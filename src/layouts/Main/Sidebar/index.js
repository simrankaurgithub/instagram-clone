import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
    HomeIcon,
    SearchIcon,
    ExploreIcon,
    ReelsIcon,
    MessagesIcon,
    Notifications,
    CreateIcon,
    ProfileIcon,
    MoreIcon,
} from '../../../assets/svgIcons';
import InstagramLogo from '../../../components/Logo';


const MENU = [
    { label: "Home", href: "/", component: HomeIcon },
    { label: "Search", href: "/search", component: SearchIcon },
    { label: 'Explore', href: "/explore", component: ExploreIcon },
    { label: 'Reels', href: "/reels", component: ReelsIcon },
    { label: 'Messages', href: "/messages", component: MessagesIcon },
    { label: 'Notifications', href: "/notifications", component: Notifications },
    { label: 'Create', href: "/create", component: CreateIcon },
    { label: 'Profile', href: "/profile", component: ProfileIcon },
    // { label: 'More', href: "/more", component: MoreIcon },
]

export default function Sidebar() {
    const { pathname } = useLocation();

    return (
        <div className='flex'>
            <div className="sticky top-0 left-0 lg:w-1/6 md:w-auto h-screen border-r">
                <ul className="space-y-2 m-2.5">
                    <li> <InstagramLogo /> </li>
                    {MENU.map((menu, index) => (
                        <li key={index}>
                            <Link to={menu.href} className=" flex items-center pl-4 py-3 text-base font-normal rounded-full hover:bg-gray-200 ">
                                <menu.component isActive={pathname === menu.href} />
                                <span className="ml-3 hidden  lg:block">{menu.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <MoreIcon />
            </div>
            <div className='w-5/6'>
                <Outlet />
            </div>
        </div>
    )
}
