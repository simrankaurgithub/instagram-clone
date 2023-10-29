import React from 'react'

const footerData = ["Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Top Accounts",
    "Locations",
    "Instagram Lite",
    "Contact Uploading & Non - Users"]

export default function Footer() {
    return (
        <div className='text-[13px] text-gray-500 mt-4 mb-20 '>
            <div className='flex flex-wrap justify-center'>
                {footerData.map((data, index) => {
                    return <p key={index} className='px-2.5'>{data}</p>
                })}
            </div>
            <div className='flex flex-wrap justify-center mt-5 '>
                <p className='px-2.5'>English</p>
                <p className='px-2.5'>© 2023 Instagram from Meta</p>
            </div>
        </div>
    )
}
