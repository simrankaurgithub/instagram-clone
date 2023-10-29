import React from 'react';
import  Sidebar  from '../layouts/Main/Sidebar';


import { Route, Routes } from "react-router-dom";
import {
    Dashboard,
    Search,
    Messages,
    Explore,
    Reels,
    Create,
    Notifications,
    More,
    Profile,
    Login,
    SignUp
    // Home,
} from '../pages';

export default function AppRouter() {
    return (
        <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path="/" element={<Sidebar />}>
                <Route path="" element={<Dashboard />} />
                <Route path="search" element={<Search />} />
                <Route path="explore" element={<Explore />} />
                <Route path="reels" element={<Reels />} />
                <Route path="messages" element={<Messages />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="create" element={<Create />} />
                <Route path="profile" element={<Profile />} />
                <Route path="more" element={<More />} />
            </Route>
        </Routes>
    )
}
