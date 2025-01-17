import React from 'react';
import { useState } from 'react';
import {Link, useForm} from "@inertiajs/react";

export default function UserAccount({ user, posts, auth, csrf_token }) {
    const [activeTab, setActiveTab] = useState('posts');

    const comments = [
        { id: 1, postAuthor: 'Jane Smith', postContent: 'Great article on React hooks!', content: 'Thanks for sharing! This was really helpful.', likes: 3 },
        { id: 2, postAuthor: 'Mike Johnson', postContent: 'Anyone tried the new JavaScript framework?', content: 'Ive been using it for a month now. Its pretty good!', likes: 5 },
    ]

    const { delete: Delete } = useForm();
    const DeletePost = (e, postId) => {
        e.preventDefault();
        Delete(`/posts/${postId}`, {
            _token: csrf_token,
        });
    };

    return (
        <div className="absolute top-[50%] left-0 sm:left-[13%] lg:left-[25%] w-full sm:w-3/4 lg:w-2/4 py-16">
            <div className="p-4">
                <div className="bg-white border border-[#AFD3E2] rounded-xl shadow-md overflow-hidden">
                    {/* Cover Photo */}
                    <div className="h-28 overflow-hidden">
                        <img src="/BannerPlaceholder.png" alt="Cover" className="w-full h-full object-cover"/>
                    </div>

                    {/* Profile Info */}
                    <div className="px-6 py-4 flex items-center -mt-10 sm:-mt-16">
                        <img src={user.profile_photo_path || `/placeholder.jpg`} alt={`${user.name}'s profile`}
                             className="w-24 sm:w-32 w-24 sm:h-32 rounded-full border-4 border-white mr-2 sm:mr-4"/>
                        <div className='pt-4 sm:pt-10'>
                            <h1 className="text-xl sm:text-2xl font-bold text-[#146C94]">{user.name}</h1>
                            <p className="text-slate-400 text-xs">@{user.username}</p>
                        </div>
                        <div className='w-full flex justify-end pt-4 sm:pt-6'>
                            {auth?.id == user.id && (
                                <Link href={`/settings`}
                                        className="text-[#146C94] hover:text-[#19A7CE]">
                                    {/*pen looking svg*/}
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                           strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
                                                    fill="#146C94"></path>
                                        </g>
                                    </svg>
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Bio and Headline */}
                    <div className="px-6 pt-2 pb-6 space-y-4">
                        <p className="text-[#19A7CE] text-sm">{user.headline}</p>
                        <p className="text-slate-500 mb-2">{user.bio}</p>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-y border-[#AFD3E2]">
                        <button
                            className={`flex-1 py-2 px-4 focus:outline-none ${
                                activeTab === 'posts'
                                    ? 'border-b-2 border-[#19A7CE] text-[#19A7CE]'
                                    : 'text-[#146C94] hover:bg-[#F6F1F1]'
                            }`}
                            onClick={() => setActiveTab('posts')}
                        >
                            Posts
                        </button>
                        <button
                            className={`flex-1 py-2 px-4 focus:outline-none ${
                                activeTab === 'comments'
                                    ? 'border-b-2 border-[#19A7CE] text-[#19A7CE]'
                                    : 'text-[#146C94] hover:bg-[#F6F1F1]'
                            }`}
                            onClick={() => setActiveTab('comments')}
                        >
                            Comments
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {activeTab === 'posts' && (
                            <div className="space-y-6">
                                {posts.map((post) => (
                                    // <div key={post.id} className="border border-[#AFD3E2] rounded-lg p-4">
                                    //     <p className="text-[#146C94] mb-2">{post.content}</p>
                                    //     <div className="flex items-center text-[#19A7CE] text-sm">
                                    //         <span className="mr-4">{post.likes} Likes</span>
                                    //         <span>{post.comments} Comments</span>
                                    //     </div>
                                    // </div>

                                    <div key={post.id} className="bg-white border border-[#AFD3E2] rounded-xl">

                                        {/* Post header */}
                                        <div className="flex items-center gap-3 p-4">

                                            {/* User profile */}
                                            {user && (
                                                <Link href={`/users/${user.id}`}>
                                                    <img
                                                        src={user.profile_photo_url || '/placeholder.jpg'}
                                                        alt={`${user.name}'s profile`}
                                                        className="border border-[#AFD3E2] w-10 h-10 rounded-full"
                                                    />
                                                </Link>
                                            )}

                                            <div className="flex items-start justify-between w-full">
                                                {/* User name */}
                                                <Link href={`/users/${user.id}`} className="flex flex-col">
                                                    <span className="font-medium text-[#146C94]">{user.name}</span>
                                                    <span
                                                        className="block text-slate-500 text-xs">@{user.username}</span>
                                                </Link>

                                                {/* Post date */}
                                                <span
                                                    className="block text-slate-500 text-xs">{new Date(post.created_at).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                    hour: 'numeric',
                                                })}</span>
                                            </div>
                                        </div>

                                        {/* Post content */}
                                        <Link href={`/posts/${post.id}`} className='cursor-pointer'>
                                            <p className="px-4 pb-3 text-slate-700 whitespace-pre-wrap">{post.content}</p>
                                        </Link>

                                        <div className='w-full bg-slate-200'>
                                            {/* Post media */}
                                            {post.media_url && (
                                                post.media_url.match(/\.(mp4|mov|avi)$/i) ? (
                                                    <video
                                                        src={`/${post.media_url}`}
                                                        className="w-full h-auto mt-4 rounded-b-xl"
                                                        controls
                                                    />
                                                ) : (
                                                    <img
                                                        src={`/${post.media_url}`}
                                                        alt="Post content"
                                                        className="w-full h-auto mt-4 max-h-96 object-contain"
                                                    />
                                                )
                                            )}
                                        </div>

                                        {/* Post actions */}
                                        <div
                                            className="w-full flex items-center justify-between p-4 border-t border-[#AFD3E2]">
                                            <div className="flex items-center gap-6">
                                                <button
                                                    className="flex items-center gap-2 text-[#146C94] hover:text-[#19A7CE]">
                                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                                         stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth={2}
                                                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                                    </svg>
                                                    <span>150</span>
                                                </button>
                                                <button
                                                    className="flex items-center gap-2 text-[#146C94] hover:text-[#19A7CE]">
                                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                                         stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth={2}
                                                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                                    </svg>
                                                    <span>25</span>
                                                </button>
                                                <button
                                                    className="flex items-center gap-2 text-[#146C94] hover:text-[#19A7CE]">
                                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                                         stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth={2}
                                                              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                                                    </svg>
                                                    <span>35</span>
                                                </button>
                                            </div>

                                            {auth?.id == user.id && (
                                                <div className="flex items-center gap-4">
                                                    {/*edit button*/}
                                                    <Link href={`/posts/${post.id}/edit`}
                                                          className="text-[#146C94] hover:text-[#19A7CE]">
                                                        {/*pen looking svg*/}
                                                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                                               strokeLinejoin="round"></g>
                                                            <g id="SVGRepo_iconCarrier">
                                                                <path fillRule="evenodd" clipRule="evenodd"
                                                                      d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
                                                                      fill="#146C94"></path>
                                                            </g>
                                                        </svg>
                                                    </Link>

                                                    {/*delete button*/}
                                                    <form method="DELETE" onSubmit={(e) => DeletePost(e, post.id)}
                                                          className='flex items-center'>
                                                        {/* Add CSRF token*/}
                                                        <input type="hidden" name="_token" value={csrf_token}/>

                                                        {/* Add method field */}
                                                        <input type="hidden" name="_method" value="DELETE"/>

                                                        {/* trash can svg */}
                                                        <button type="submit"
                                                                className="text-[#146C94] hover:text-[#19A7CE]">
                                                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg"
                                                                 stroke="currentColor">
                                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                                                   strokeLinejoin="round"></g>
                                                                <g id="SVGRepo_iconCarrier">
                                                                    <path d="M10 11V17" stroke="#146C94" strokeWidth="2"
                                                                          strokeLinecap="round"
                                                                          strokeLinejoin="round"></path>
                                                                    <path d="M14 11V17" stroke="#146C94" strokeWidth="2"
                                                                          strokeLinecap="round"
                                                                          strokeLinejoin="round"></path>
                                                                    <path d="M4 7H20" stroke="#146C94" strokeWidth="2"
                                                                          strokeLinecap="round"
                                                                          strokeLinejoin="round"></path>
                                                                    <path
                                                                        d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                                                                        stroke="#146C94" strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"></path>
                                                                    <path
                                                                        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                                                        stroke="#146C94" strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"></path>
                                                                </g>
                                                            </svg>
                                                        </button>
                                                    </form>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === 'comments' && (
                            <div className="space-y-6">
                                {comments.map((comment) => (
                                    <div key={comment.id} className="border border-[#AFD3E2] rounded-lg p-4">
                                        <p className="text-[#146C94] text-sm mb-1">
                                            Commented on {comment.postAuthor}'s post: "{comment.postContent}"
                                        </p>
                                        <p className="text-[#146C94] mb-2">{comment.content}</p>
                                        <div className="flex items-center text-[#19A7CE] text-sm">
                                            <span>{comment.likes} Likes</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
