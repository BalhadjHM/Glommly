<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    // Indexing the signup
    public function signup()
    {
        return Inertia::render('Signup');
    }

    // Storing the user
    public function register(Request $request)
    {
        // Validating the request
        $request->validate([
            'username' => 'required|unique:users|max:25|string|alpha_dash',
            'name' => 'required|max:60|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed', //min:8|string|regex:/[a-z]/|regex:/[A-Z]/|regex:/[0-9]/|regex:/[^a-zA-Z0-9]/
        ]);

        // Hashing the password
        //$request['password'] = bcrypt($request['password']);

        // Creating the user
        $user = User::create([
            'username' => $request['username'],
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => bcrypt($request['password']),
        ]);

        // Logging in the user
        session()->flash('success', 'You have successfully registered a new account');
        return Inertia::location('/login');
    }

    // Indexing the login
    public function login()
    {
        return Inertia::render('Login');
    }

    // Logging in the user
    public function authenticate(Request $request)
    {
        // Validating the request
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        // Attempting to authenticate the user
        if (auth()->attempt($request->only('email', 'password'))) {
            session()->flash('success', 'Welcome Back ' . auth()->user()->name . ' !!');
            return Inertia::location('/');
        }

        session()->flash('error', 'Invalid credentials');
        return Inertia::location('/login');
    }

    // Logging out the user
    public function logout()
    {
        auth()->logout();
        session()->flash('success', 'You have been logged out');
        return Inertia::location('/login');
    }

    // Showing the profile of the authenticated user
    public function profile()
    {
        // Finding the authenticated user
        $user = auth()->user();

        // Finding the posts of the authenticated user
        $posts = $user->posts()->latest()->get();

        // Returning the authenticated user and the posts of the authenticated user
        return Inertia::render('UserAccount', [
            'user' => $user,
            'posts' => $posts,
            'auth' => auth()->user(),
        ]);
    }

    // Showing the user
    public function show($userId)
    {
        // Finding the user
        $user = User::find($userId);

        // Finding the posts of the user
        $posts = $user->posts()->latest()->get();

        // Returning the user and the posts of the user and the authenticated user
        return Inertia::render('UserAccount', [
            'user' => $user,
            'posts' => $posts,
            'auth' => auth()->user(),
        ]);
    }

    // Editing the user
    public function edit()
    {
        $user = auth()->user();
        return Inertia::render('Settings', [
            'user' => $user,
        ]);
    }

    // Updating the user
    public function update(Request $request, $userId)
    {
        // Finding the user
        $user = User::find($userId);

        // Validating the request
        $validated = $request->validate([
            'username' => 'required|max:25|string|alpha_dash' . ($request->username !== $user->username ? '|unique:users' : ''),
            'name' => 'required|max:60|string',
            'email' => 'required|email' . ($request->email !== $user->email ? '|unique:users' : ''),
            'headline' => 'nullable|max:100|string',
            'bio' => 'nullable|max:500|string',
            'tel' => 'nullable|max:15|numeric',
            'address' => 'nullable|max:255|string',
            'industries' => 'nullable|max:255|string',
            'profile_photo_path' => 'nullable|file|mimes:jpg,jpeg,png,wepb|max:4096',
        ]);

        // Updating the user
        $user->username = $validated['username'];
        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->headline = $validated['headline'];
        $user->bio = $validated['bio'];
        $user->tel = $validated['tel'];
        $user->address = $validated['address'];
        $user->industries = $validated['industries'];

        // Saving the user
        $user->save();

        // Handle file 'profile_photo' upload if present
        if ($request->hasFile('profile_photo_path')) {
            // Checking if the user has a profile photo, if so, delete it
            if ($user->profile_photo_path) {
                $path = explode('/', $user->profile_photo_path);
                $filename = end($path);
                Storage::delete('ProfilePhotos/' . $filename);
            }

            // Storing the new profile photo with a new name
            $file = $request->file('profile_photo_path');
            $filename = $user->username . '_profile.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('ProfilePhotos', $filename); // Store in "public/ProfilePhotos"
            $user->profile_photo_path = 'storage/ProfilePhotos/' . $filename; // Save correct URL

            dd($path, $filename, $user->profile_photo_path);

            // Saving the user
            $user->save();
        }

        // Flashing a success message
        session()->flash('success', 'Profile updated successfully');
        return Inertia::location('/settings');
    }

    // Deleting the user
    public function destroy($userId)
    {
        // Finding the user
        $user = User::find($userId);

        // Deleting the user
        $user->delete();

        // Logging out the user
        auth()->logout();

        // Flashing a success message
        session()->flash('success', 'Account deleted successfully');
        return Inertia::location('/login');
    }
}
