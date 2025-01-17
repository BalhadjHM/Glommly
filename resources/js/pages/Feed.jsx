import {Link, usePage} from '@inertiajs/react';
import Stories from '../Components/Stories';
import Body from '../Components/Body';
import React, {useEffect, useState} from "react";

export default function Feed({ posts, auth }) {

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
        <div className="absolute top-[50%] left-0 sm:left-[13%] lg:left-[25%] w-full sm:w-3/4 lg:w-2/4 py-16 bg-[#F6F1F1]">
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

            {/* Stories */}
            <Stories/>

            {/* Body */}
            <div className="p-4">
                <Body posts={posts} auth={auth}/>
            </div>

        </div>
    )
}
