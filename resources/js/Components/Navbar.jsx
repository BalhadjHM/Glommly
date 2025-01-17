// import { useState } from 'react'
import { Link } from '@inertiajs/react'

export default function Navbar({ auth }) {
    //const [searchQuery, setSearchQuery] = useState('')

    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-secondary z-50">
            <div className="mx-auto max-w-full xl:max-w-[83%] flex items-center justify-between h-full px-4">

                {/* Logo */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-2xl font-bold text-accent">
                        Glommly
                    </Link>
                </div>

                {/* Search */}
                <div className="hidden md:block flex-1 max-w-xl px-24 lg:px-4">
                    <div className="relative">
                        <input
                            type="search"
                            placeholder="Search..."
                            //value={searchQuery}
                            //onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 bg-[#F6F1F1] rounded-full border focus:outline-none focus:border-primary"
                        />
                        <svg className="absolute right-3 top-2.5 h-5 w-5 text-[#146C94]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 md:gap-4">
                    {/* Search */}
                    <button className="block md:hidden p-2 hover:bg-[#F6F1F1] rounded-full">
                        <svg className="h-5 sm:h-6 w-5 sm:w-6 text-accent" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </button>
                    {/* Notifications */}
                    <button className="p-2 hover:bg-[#F6F1F1] rounded-full">
                        <svg className="h-5 sm:h-6 w-5 sm:w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                        </svg>
                    </button>

                    {/* Messages */}
                    <button className="visible lg:hidden p-2 hover:bg-[#F6F1F1] rounded-full">
                        <svg className="h-5 sm:h-6 w-5 sm:w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                        </svg>
                    </button>

                    {/* Profile */}
                    <Link href='/users' className="p-2 hover:bg-[#F6F1F1] rounded-full">
                        <svg className="h-5 sm:h-6 w-5 sm:w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </nav>
)
}
