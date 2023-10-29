import React from 'react';
import Avatar from 'react-avatar';
import AvatarIcon from '../../assets/Images/Profile_icon.jpg';

const suggestions = [
    { user: "priyankachopra", profilePic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&resize=640:*" },
    { user: "priyankachopra", profilePic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&resize=640:*" },
    { user: "priyankachopra", profilePic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&resize=640:*" },
    { user: "priyankachopra", profilePic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&resize=640:*" },
    { user: "priyankachopra", profilePic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&resize=640:*" },
    { user: "priyankachopra", profilePic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&resize=640:*" },
]

export default function Suggestion() {
    return (<>
        <div className='flex justify-between'>
            <div className='flex '>
                <Avatar src={AvatarIcon} round={true} size="60px" className='border' />
                <div className='mt-3 ml-4'>
                    <p className='font-semibold text-sm'>simr35478</p>
                    <p className='text-sm text-gray-500'>simran</p>
                </div>
            </div>
            <div className='font-semibold text-xs text-sky-500 mt-5'>Switch</div>
        </div>
        <div className='flex justify-between my-4'>
            <p className='font-semibold text-sm text-gray-500'>Suggestions for you </p>
            <p className='font-semibold text-xs'>See All</p>
        </div>
        {suggestions.map(({ profilePic, user }) => (
            <div className='flex justify-between my-3'>
                <div className='flex '>
                    <Avatar src={profilePic} round={true} size="30px" className='mt-0.5' />
                    <div className='ml-4'>
                        <p className='font-semibold text-sm'>{user}</p>
                        <p className='text-xs text-gray-500'>Follows you</p>
                    </div>
                </div>
                <div className='font-semibold text-xs text-sky-500 mt-2.5'>Follow</div>
            </div>
        ))}
    </>
    )
}
