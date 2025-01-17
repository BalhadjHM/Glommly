<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Indexing all the posts from all the users that have the visibility set to public
        $posts = Post::where('visibility', 'public')->with('user')->latest()->get();

        // Return the feed view with the posts and the authenticated user
        return inertia::render('Feed', [
            'posts' => $posts,
            'auth' => auth()->user(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia::render('CreatePost')->with('auth', auth()->user());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request
        $validated = $request->validate([
            'content' => 'required|string',
            'visibility' => 'required|string|in:public,friends,private',
            'category' => 'required|string',
            'media' => 'nullable|file|mimes:jpg,jpeg,png,mp4,mov,avi|max:4096',
        ]);

        // Create a new post
        $post = new Post();

        // Assign the post's attributes
        $post->user_id = auth()->id();
        $post->category = $validated['category'];
        $post->visibility = $validated['visibility'];
        $post->content = $validated['content'];

        // Save the post
        $post->save();

        // Handle file upload if present
        if ($request->hasFile('media')) {
            try {
                // Upload the media file
                $file = $request->file('media');
                $filename = auth()->user()->name . '_' . auth()->id() . '_post_' . $post->id . '.' . $file->getClientOriginalExtension();
                $path = $file->storeAs('PostMedia', $filename); // Store in "public/PostMedia"
                $post->media_url = 'storage/PostMedia/' . $filename; // Save correct URL

                // save the post
                $post->save();
            } catch (\Exception $e) {
                Log::error('Media upload failed: ' . $e->getMessage());
                return back()->withErrors(['media' => 'The media failed to upload.']);
            }
        }

        // flash error message if the post is not saved
        if (!$post) {
            session()->flash('error', 'Post could not be created!, Please try later.');
            return Inertia::render('CreatePost');
        }

        // Flash a success message
        session()->flash('success', 'Post created successfully!');

        // Redirect to the homepage
        return Inertia::location('/');
    }

    /**
     * Display the specified resource.
     */
    public function show($postId)
    {
        // Find the post with the corresponding post id and get the user who created the post
        $post = Post::where('id', $postId)->with('user')->first();

        // Return the post view with the post and the authenticated user
        return Inertia::render('ShowPost', [
            'post' => $post,
            'auth' => auth()->user(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($postId)
    {
        // Find the post
        $post = Post::find($postId);

        // Return the edit post view with the post and the authenticated user
        return Inertia::render('EditPost', [
            'post' => $post,
            'auth' => auth()->user(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $postId)
    {
        // Find the post
        $post = Post::find($postId);

        // Validate the request
        $validated = $request->validate([
            'content' => 'required|string',
            'visibility' => 'required|string|in:public,friends,private',
            'category' => 'required|string',
            'media' => 'nullable|file|mimes:jpg,jpeg,png,webp,mp4,mov,avi|max:4096',
        ]);

        // Assign the post's attributes
        $post->category = $validated['category'];
        $post->visibility = $validated['visibility'];
        $post->content = $validated['content'];

        // Save the post
        $post->save();

        // Handle file upload if present
        if ($request->hasFile('media')) {
            // Delete the old media file if it exists
            if ($post->media_url) {
                Storage::delete($post->media_url);
            }

            // Upload the new media file
            $file = $request->file('media');
            $filename = auth()->id() . '_' . auth()->user()->name . '_post_' . $post->id . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('PostMedia', $filename); // Store in "public/PostMedia"
            $post->media_url = 'storage/PostMedia/' . $filename; // Save correct URL

            // Save the post
            $post->save();
        }

        // flash error message if the post is not saved
        if (!$post) {
            session()->flash('error', 'Post could not be updated!, Please try later.');

            // Find the post
            $prevPost = Post::find($postId);

            // Return the edit post view with the post and the authenticated user
            return Inertia::render('EditPost', [
                'post' => $prevPost,
                'auth' => auth()->user(),
            ]);
        }

        // Flash a success message
        session()->flash('success', 'Post updated successfully!');

        // Redirect to the homepage
        return Inertia::location('/');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($postId)
    {
        // Find the post
        $post = Post::find($postId);

        // Delete the post
        $post->delete();

        // Flash a success message
        session()->flash('success', 'Post deleted successfully!');

        // Redirect to the homepage
        return Inertia::location('/');
    }
}
