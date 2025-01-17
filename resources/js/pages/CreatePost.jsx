import React, {useEffect, useState} from 'react';
import {useForm, usePage} from '@inertiajs/react';

export default function CreatePost({ csrf_token, auth }) {

    const [selectedFile, setSelectedFile] = useState(null)
    const categories = ['Technology', 'Sports', 'Entertainment', 'Politics', 'Science', 'Health', 'Business', 'Education', 'Travel', 'Fashion', 'Food', 'Lifestyle', 'Other'];
    const visibilities = ['public', 'friends', 'private'];

    const { data, setData, errors, processing, post } = useForm({
        content: '',
        visibility: '',
        category: '',
        media: null,
    });

    const SubmitPost = (e) => {
        e.preventDefault();
        post('/posts', {
            _token: csrf_token,
            ...data,
        });
    };

    const { flash } = usePage().props;
    const [flashMessage, setFlashMessage] = useState(flash);

    useEffect(() => {
        if (flash.success || flash.error) {
            setFlashMessage(flash);
            const timer = setTimeout(() => setFlashMessage({}), 5000); // 5 seconds
            return () => clearTimeout(timer);
        }
    }, [flash]);

    return(
        <div className="absolute top-[50%] left-0 sm:left-[13%] lg:left-[25%] w-full sm:w-3/4 lg:w-2/4 py-16">

            {/* Flash message */}
            {flashMessage.error && (
                <div
                    className="mx-4 mt-4 px-4 py-2 bg-red-100 border border-red-400 text-sm text-red-700 rounded relative space-x-2"
                    role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline">{flashMessage.error}</span>
                </div>
            )}

            {/* Flash message */}
            {flashMessage.success && (
                <div className="mx-4 mt-4 px-4 py-2 bg-teal-100 border border-teal-400 text-sm text-teal-700 rounded relative space-x-2" role="alert">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline">{flashMessage.success}</span>
                </div>
            )}

            <div className="p-4">
                <div className="bg-white border border-[#AFD3E2] rounded-xl p-4 shadow-md">

                    {/* Create a Post */}
                    <div className="flex items-center space-x-4 mb-4">
                        <img
                            src={auth.profile_photo_url || '/placeholder.jpg'}
                            alt="Profile"
                            className="w-10 h-10 rounded-full border border-[#AFD3E2]"
                        />
                        <h2 className="text-xl font-bold text-[#146C94] ">Create a Post</h2>
                    </div>

                    {/* Post form */}
                    <form method='POST' onSubmit={SubmitPost}>
                        {/* Add CSRF token*/}
                        <input type="hidden" name="_token" value={csrf_token}/>

                        {/* Post content */}
                        <textarea
                            className="w-full p-3 border border-[#AFD3E2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19A7CE] focus:border-transparent resize-none whitespace-pre-wrap"
                            rows="4"
                            placeholder="What's on your mind?"
                            name="content"
                            value={data.content}
                            onChange={(e) => setData('content', e.target.value)}
                        />
                        {errors.content && (
                            <p className="pt-1 text-red-500 text-xs italic">{errors.content}</p>
                        )}

                        {/* Add Photo/Video */}
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <svg className="w-6 h-6 text-[#146C94]" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                    </svg>
                                    <span className="text-[#146C94]">Add Photo/Video</span>
                                    <input
                                        type="file"
                                        className="hidden"
                                        name="media"
                                        onChange={(e) => {
                                            setSelectedFile(e.target.files[0]);
                                            setData('media', e.target.files[0]);}
                                        }
                                        accept="image/*,video/*"
                                    />
                                </label>
                                {selectedFile && (
                                    <span className="text-sm text-[#19A7CE]">{selectedFile.name}</span>
                                )}
                            </div>
                        </div>
                        {errors.media && (
                            <p className="pt-1 text-red-500 text-xs italic">{errors.media}</p>
                        )}

                        {/* Visibility and Category */}
                        <div className="flex items-center space-x-4 mt-6">

                            {/* Visibility */}
                            <div className="flex-1">
                                <label htmlFor="visibility" className="block text-sm font-medium text-[#146C94] mb-1">
                                    Visibility
                                </label>
                                <select
                                    id="visibility"
                                    name="visibility"
                                    value={data.visibility}
                                    onChange={(e) => setData('visibility', e.target.value)}
                                    className="w-full p-2 border border-[#AFD3E2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19A7CE] focus:border-transparent"
                                >
                                    <option value="">Select visibility</option>
                                    {visibilities.map((vis) => (
                                        <option key={vis} value={vis.toLowerCase()}>{vis}</option>
                                    ))}
                                </select>
                                {errors.visibility && (
                                    <p className="pt-1 text-red-500 text-xs italic">{errors.visibility}</p>
                                )}
                            </div>

                            {/* Category */}
                            <div className="flex-1">
                                <label htmlFor="category" className="block text-sm font-medium text-[#146C94] mb-1">
                                    Category
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    value={data.category}
                                    onChange={(e) => setData('category', e.target.value)}
                                    className="w-full p-2 border border-[#AFD3E2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19A7CE] focus:border-transparent"
                                >
                                    <option value="">Select category</option>
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                                    ))}
                                </select>
                                {errors.category && (
                                    <p className="pt-1 text-red-500 text-xs italic">{errors.category}</p>
                                )}
                            </div>
                        </div>

                        <div className="mt-4 flex justify-end">
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-4 py-2 bg-[#19A7CE] text-white rounded-lg hover:bg-[#146C94] transition-colors"
                            >
                                Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
