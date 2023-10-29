import React from 'react';
import Login from '../Login';
import HomeImage from '../../assets/Images/Home_page.png';

export default function Home() {
    return (
        <div className='lg:flex lg:justify-center mt-9'>
            <div className='hidden lg:block w-[500px] bg-cover relative' style={{ backgroundImage: `url('${HomeImage}')` }}>
                <div className='bg-cover w-[273px] h-[592px] absolute top-[30px] left-[172px]
                    animate-[change_10s_ease-in-out_infinite]'>
                </div>
            </div>
            <Login />
        </div>
    )
}
