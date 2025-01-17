// import { useState } from 'react'
import { Link } from '@inertiajs/react'

export default function BottomNavbar() {
    //const [searchQuery, setSearchQuery] = useState('')

    return (
        <nav className="visible lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-secondary z-50">
            <div className="mx-auto max-w-full xl:max-w-[83%] flex items-center justify-center h-full px-4">
                {/* Actions */}
                <div className="flex items-center gap-2 md:gap-4">
                    {/* Feed */}
                    <Link href="/" className="py-2 px-4 border-x border-secondary hover:bg-[#F6F1F1] rounded-md">
                        <svg className="h-6 sm:h-7 w-6 sm:w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                        </svg>
                    </Link>

                    {/* Explore */}
                    <Link href="/explore" className="py-2 px-4 border-x border-secondary hover:bg-[#F6F1F1] rounded-md">
                        <svg className="h-6 sm:h-7 w-6 sm:w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                        </svg>
                    </Link>

                    {/* Create Post */}
                    <Link href="/posts/create" className="py-2 px-7 border-x border-secondary bg-primary hover:bg-[#F6F1F1] rounded-md">
                        <svg className="h-6 sm:h-7 w-6 sm:w-7 text-white hover:text-primary" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                        </svg>
                    </Link>

                    {/* Network */}
                    <Link href="/network" className="py-2 px-4 border-x border-secondary hover:bg-[#F6F1F1] rounded-md">
                        <svg className="h-6 sm:h-7 w-6 sm:w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                    </Link>

                    {/* Settings */}
                    <Link href='/settings' className="py-2 px-4 border-x border-secondary hover:bg-[#F6F1F1] rounded-md">
                        <svg className="h-6 sm:h-7 w-6 sm:w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
