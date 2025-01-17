import { Link } from '@inertiajs/react';

export default function LeftSidebar() {
    const menuItems = [
        { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: 'Feed', path: '/' },
        { icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", label: 'Explore', path: '/explore' },
        { icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", label: 'Messages', path: '/messages' },
        { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", label: 'Network', path: '/network' },
        { icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9", label: 'Notifications', path: '/notifications' },
        { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", label: 'Settings', path: '/settings'},
    ]

    return (
        <div className="hidden lg:block fixed left-0 top-16 w-1/4 h-[calc(100vh-4rem)] bg-white border-r border-secondary p-4">
            <div className="grid grid-cols-1 justify-items-end">
                {menuItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.path}
                        className="flex items-center mb-3 gap-4 px-4 py-3 w-full xl:w-2/3 text-accent hover:bg-[#F6F1F1] rounded-lg transition-colors"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                        <span className="font-medium">{item.label}</span>
                    </Link>
                ))}

                {/* Create Post */}
                <Link href='/posts/create' className="w-full xl:w-2/3 mt-3 px-4 py-3 bg-[#19A7CE] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-[#146C94] transition-colors">
                    Create Post
                </Link>

                {/* Logout */}
                <Link href='/logout' className="w-full xl:w-2/3 mt-3 px-4 py-3 bg-[#19A7CE] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-[#146C94] transition-colors">
                    Logout
                </Link>
            </div>

        </div>
    )
}
