import React from 'react'

export default function CustomRightArrow({ onClick }) {
    return (
        <button className="absolute top-1/3 right-[30px]" onClick={onClick} style={{
            background: "green",
            border: '4px',
            color: "red",
        }}>
            <i class="fa-solid fa-arrow-right"></i>
        </button>
    )
}
