import React from 'react'

export default function SubmitButton(props) {
  return (
    <div>
      <input type='submit' className='w-full bg-[#0095F6] text-white hover:bg-[#1877F2] rounded-md px-8 py-1.5' value={props.value}/>
    </div>
  )
}
