import React, {useEffect, useState} from 'react'
import {useForm, Link, usePage} from '@inertiajs/react'
export default function Settings({ user, csrf_token }) {
    const [activeTab, setActiveTab] = useState('profile')
    const [darkMode, setDarkMode] = useState(false)
    const [notifications, setNotifications] = useState(true)
    const [language, setLanguage] = useState('en')

    const { data, setData, errors, put, isLoading } = useForm({
        name: user.name || '',
        username: user.username || '',
        email: user.email || '',
        headline: user.headline || '',
        bio: user.bio || '',
        gender: user.gender || '',
        tel: user.tel || '',
        address: user.address || '',
        industries: user.industries || '',
        profile_photo_path: user.profile_photo_path || '',
        darkMode: user.darkMode || false,
        notifications: user.notifications || true,
    })

    // Save User Settings
    const UserSettings = (e) => {
        e.preventDefault()
        put(`/settings/${user.id}`, {
            _token: csrf_token,
            ...data,
        })
    }

    const { delete: Delete } = useForm();

    // Delete User
    const DeleteUser = (e, userId) => {
        e.preventDefault()
        Delete(`/users/${userId}`, {
            _token: csrf_token,
            ...data,
        })
    }

    // Flash message
    const { flash } = usePage().props;
    const [flashMessage, setFlashMessage] = useState(flash);

    useEffect(() => {
        if (flash.success || flash.error) {
            setFlashMessage(flash);
            const timer = setTimeout(() => setFlashMessage({}), 5000); // 5 seconds
            return () => clearTimeout(timer);
        }
    }, [flash]);


    return (
        <div className="absolute top-[50%] left-0 sm:left-[13%] lg:left-[25%] w-full sm:w-3/4 lg:w-2/4 py-16 ">

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

                {/* Settings Tab */}
                <div className="bg-white border border-[#AFD3E2] rounded-xl shadow-md overflow-hidden">
                    <div className="flex border-b border-[#AFD3E2]">

                        {/* User Info Tab */}
                        <button
                            className={`flex-1 py-4 px-6 focus:outline-none ${
                                activeTab === 'profile'
                                    ? 'bg-[#19A7CE] text-white'
                                    : 'text-[#146C94] hover:bg-[#F6F1F1]'
                            }`}
                            onClick={() => setActiveTab('profile')}
                        >
                            Profile
                        </button>

                        {/* Interface Tab */}
                        <button
                            className={`flex-1 py-4 px-6 focus:outline-none ${
                                activeTab === 'interface'
                                    ? 'bg-[#19A7CE] text-white'
                                    : 'text-[#146C94] hover:bg-[#F6F1F1]'
                            }`}
                            onClick={() => setActiveTab('interface')}
                        >
                            Interface
                        </button>

                        {/* Account Tab */}
                        <button
                            className={`flex-1 py-4 px-6 focus:outline-none ${
                                activeTab === 'account'
                                    ? 'bg-[#19A7CE] text-white'
                                    : 'text-[#146C94] hover:bg-[#F6F1F1]'
                            }`}
                            onClick={() => setActiveTab('account')}
                        >
                            Account
                        </button>
                    </div>

                    {/* Settings Content */}
                    <div className="p-6">
                        {/* Profile Tab */}
                        {activeTab === 'profile' && (
                            // User Info Form
                            <form method='PUT' onSubmit={UserSettings}>
                                {/* CSRF token */}
                                <input type="hidden" name="_token" value={csrf_token}/>

                                {/* Name */}
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-[#146C94] mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="w-full p-2 border border-[#AFD3E2] rounded focus:outline-none focus:ring-2 focus:ring-[#19A7CE] focus:border-transparent"
                                    />
                                </div>
                                {errors.name && (
                                    <p className="pt-2 text-red-500 text-xs italic">{errors.name}</p>
                                )}

                                {/* Username */}
                                <div className="mb-4">
                                    <label htmlFor="username" className="block text-sm font-medium text-[#146C94] mb-1">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        value={data.username}
                                        onChange={(e) => setData('username', e.target.value)}
                                        className="w-full p-2 border border-[#AFD3E2] rounded focus:outline-none focus:ring-2 focus:ring-[#19A7CE] focus:border-transparent"
                                    />
                                </div>
                                {errors.username && (
                                    <p className="pt-2 text-red-500 text-xs italic">{errors.username}</p>
                                )}

                                {/* Email */}
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-[#146C94] mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full p-2 border border-[#AFD3E2] rounded focus:outline-none focus:ring-2 focus:ring-[#19A7CE] focus:border-transparent"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="pt-2 text-red-500 text-xs italic">{errors.email}</p>
                                )}

                                {/* Headline */}
                                <div className="mb-4">
                                    <label htmlFor="headline" className="block text-sm font-medium text-[#146C94] mb-1">
                                        Headline
                                    </label>
                                    <input
                                        type="text"
                                        id="headline"
                                        value={data.headline}
                                        onChange={(e) => setData('headline', e.target.value)}
                                        className="w-full p-2 border border-[#AFD3E2] rounded focus:outline-none focus:ring-2 focus:ring-[#19A7CE] focus:border-transparent"
                                    />
                                </div>
                                {errors.headline && (
                                    <p className="pt-2 text-red-500 text-xs italic">{errors.headline}</p>
                                )}

                                {/* Bio */}
                                <div className="mb-4">
                                    <label htmlFor="bio" className="block text-sm font-medium text-[#146C94] mb-1">
                                        Bio
                                    </label>
                                    <textarea
                                        id="bio"
                                        value={data.bio}
                                        onChange={(e) => setData('bio', e.target.value)}
                                        rows="3"
                                        resize="none"
                                        className="w-full p-2 border border-[#AFD3E2] rounded focus:outline-none focus:ring-2 focus:ring-[#19A7CE] focus:border-transparent"
                                    ></textarea>
                                </div>
                                {errors.bio && (
                                    <p className="pt-2 text-red-500 text-xs italic">{errors.bio}</p>
                                )}

                                {/* Gender */}
                                <div className="mb-4">
                                    <label htmlFor="gender" className="block text-sm font-medium text-[#146C94] mb-1">
                                        Gender
                                    </label>
                                    <select
                                        id="gender"
                                        value={data.gender}
                                        onChange={(e) => setData('gender', e.target.value)}
                                        className="w-full p-2 border border-[#AFD3E2] rounded focus:outline-none focus:ring-2 focus:ring-[#19A7CE] focus:border-transparent"
                                    >
                                        <option value="man">Man</option>
                                        <option value="women">Women</option>
                                        <option value="unknown">Prefer not to say</option>
                                    </select>
                                </div>
                                {errors.gender && (
                                    <p className="pt-2 text-red-500 text-xs italic">{errors.gender}</p>
                                )}

                                {/* Tel */}
                                <div className="mb-4">
                                    <label htmlFor="tel" className="block text-sm font-medium text-[#146C94] mb-1">
                                        Tel
                                    </label>
                                    <input
                                        type="tel"
                                        id="tel"
                                        value={data.tel}
                                        onChange={(e) => setData('tel', e.target.value)}
                                        className="w-full p-2 border border-[#AFD3E2] rounded focus:outline-none focus:ring-2 focus:ring-[#19A7CE] focus:border-transparent"
                                    />
                                </div>
                                {errors.tel && (
                                    <p className="pt-2 text-red-500 text-xs italic">{errors.tel}</p>
                                )}

                                {/* Address */}
                                <div className="mb-4">
                                    <label htmlFor="address" className="block text-sm font-medium text-[#146C94] mb-1">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        value={data.address}
                                        onChange={(e) => setData('address', e.target.value)}
                                        className="w-full p-2 border border-[#AFD3E2] rounded focus:outline-none focus:ring-2 focus:ring-[#19A7CE] focus:border-transparent"
                                    />
                                </div>
                                {errors.address && (
                                    <p className="pt-2 text-red-500 text-xs italic">{errors.address}</p>
                                )}

                                {/* Industries */}
                                <div className="mb-4">
                                    <label htmlFor="industries" className="block text-sm font-medium text-[#146C94] mb-1">
                                        Industries
                                    </label>
                                    <input
                                        type="text"
                                        id="industries"
                                        value={data.industries}
                                        onChange={(e) => setData('industries', e.target.value)}
                                        className="w-full p-2 border border-[#AFD3E2] rounded focus:outline-none focus:ring-2 focus:ring-[#19A7CE] focus:border-transparent"
                                    />
                                </div>
                                {errors.industries && (
                                    <p className="pt-2 text-red-500 text-xs italic">{errors.industries}</p>
                                )}

                                {/* Save Changes & Reset Buttons */}
                                <div className='pt-4 flex gap-4 flex-col sm:flex-row'>
                                    <button
                                        type="submit"
                                        className="w-full py-2 px-4 bg-[#19A7CE] text-white rounded-lg hover:bg-[#146C94] transition-colors"
                                    >
                                        Save Changes
                                    </button>
                                    <button
                                        disabled={isLoading}
                                        type="reset"
                                        className="w-full py-2 px-4 bg-white text-[#146C94] border border-[#146C94] rounded-lg hover:bg-[#F6F1F1] transition-colors"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* Interface Tab */}
                        {activeTab === 'interface' && (
                            <div className="space-y-4">

                                {/* Dark Mode */}
                                <div className="py-1 w-full xl:w-1/2 flex items-center justify-between">
                                    <span className="text-slate-600">Dark Mode</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={darkMode}
                                            onChange={() => setDarkMode(!darkMode)}
                                        />
                                        <div className="w-11 h-6 bg-[#AFD3E2] peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-[#19A7CE] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#19A7CE]"></div>
                                    </label>
                                </div>

                                {/* Notifications */}
                                <div className="py-1 w-full xl:w-1/2 flex items-center justify-between">
                                    <span className="text-slate-600">Notifications</span>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={notifications}
                                            onChange={() => setNotifications(!notifications)}
                                        />
                                        <div className="w-11 h-6 bg-[#AFD3E2] peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-[#19A7CE] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#19A7CE]"></div>
                                    </label>
                                </div>

                                {/* Language */}
                                <div>
                                    <label htmlFor="language" className="pb-1 block text-sm font-medium text-[#146C94] mb-1">
                                        Language
                                    </label>
                                    <select
                                        id="language"
                                        value={language}
                                        onChange={(e) => setLanguage(e.target.value)}
                                        className="w-full p-2 border border-[#AFD3E2] rounded focus:outline-none focus:ring-2 focus:ring-[#19A7CE] focus:border-transparent"
                                    >
                                        <option value="en">English</option>
                                        <option value="es">Español</option>
                                        <option value="fr">Français</option>
                                        <option value="ar">Arabic</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {/* Account Tab */}
                        {activeTab === 'account' && (
                            <div className="flex flex-col md:flex-row gap-4 text-center items-center">

                                {/* Profile Photo */}
                                <Link href='/logout' className="w-full py-2 px-4 bg-[#19A7CE] text-white rounded-lg hover:bg-[#146C94] transition-colors">
                                    Log Out
                                </Link>

                                {/* Delete Account */}
                                <form method='DELETE' onSubmit={(e) => DeleteUser(e, user.id)} className="w-full">
                                    {/* Add CSRF token*/}
                                    <input type="hidden" name="_token" value={csrf_token}/>

                                    {/* Add method field */}
                                    <input type="hidden" name="_method" value="DELETE"/>

                                    <button type='submit' className="w-full py-2 px-4 bg-white text-red-600 border border-red-600 rounded-lg hover:bg-[#F6F1F1] transition-colors">
                                        Delete Account
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

