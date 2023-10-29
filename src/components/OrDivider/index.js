import React from 'react'

export default function OrDivider() {
    return (
        <div className="relative flex pt-4 pb-2 items-center">
            <div className="flex-grow border-t-2 border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400 font-semibold text-sm" >OR</span>
            <div className="flex-grow border-t-2 border-gray-300"></div>
        </div>
    )
}
