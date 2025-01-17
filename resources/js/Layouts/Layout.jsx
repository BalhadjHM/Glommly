import { Link } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import LeftSidebar from '../Components/LeftSidebar';
import RightSidebar from '../Components/RightSidebar';
import BottomNavbar from '../Components/BottomNavbar';
export default function Layout ({children}){
    return(
        <div className="min-h-screen bg-[#F6F1F1]">
            <Navbar/>
            <BottomNavbar/>
            <LeftSidebar/>
            <RightSidebar/>
            <main className='relative'>
                {children}
            </main>
        </div>
    )
}
