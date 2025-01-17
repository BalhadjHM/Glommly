import React from "react";

export default function BoxLayout ({title, note, children}) {
    return(
        <div className='relative w-screen min-h-screen h-dvh bg-black'>
            <div
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 max-w-md w-full space-y-8 rounded-md'>
                <div className="text-center">
                    <h2 className="mt-6 text-4xl font-bold text-white">
                        {title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">
                        {note}
                    </p>
                </div>
                {children}
            </div>
        </div>
    )
}
