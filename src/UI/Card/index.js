import React from 'react'

export default function Card(props) {
    return (
        <div className='flex justify-center my-3 '>
            <div className='w-[390px]'>
                {props.children}
            </div>
        </div>
    )
}
