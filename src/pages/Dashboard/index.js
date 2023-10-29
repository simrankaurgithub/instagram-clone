import React from 'react'
import Carousel from '../../components/Carousel';
import Suggestion from '../../components/Suggestions';
import Avatar from 'react-avatar';
import { Comment, SharePost, Notifications, SavePost, Emoji } from '../../assets/svgIcons';

const posts = [
  { user: "selena", profilePic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&resize=640:*", image: "https://images.unsplash.com/flagged/photo-1559502867-c406bd78ff24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGNlbGVicml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" },
  { user: "selena", profilePic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&resize=640:*", image: "https://media.gettyimages.com/id/1397760813/photo/deepika-padukone-attends-the-photocall-for-the-jury-during-the-75th-annual-cannes-film.jpg?s=612x612&w=0&k=20&c=h05t6lIMqydx0-07Lm_KnsaUnEGT8eLK9mVdkYQrKjY=" },

]


export default function Dashboard() {
  return (
    <div className='flex mt-12'>
      <div className='w-[65%]'>
        <Carousel />
        <div className='w-3/5 mx-auto mt-10'>
          {posts.map(({ user, profilePic, image }) => (<>
            <div className='flex justify-between mt-5'>
              <div className='flex '>
                <Avatar src={profilePic} round={true} size="30px" className='border-red outline outline-offset-2 outline-2 outline-red-500 ' />
                <div className='ml-3'>
                  <p className='font-semibold text-sm'>{user}</p>
                  <p className='text-xs text-gray-500'>Follows you</p>
                </div>
                <div className='font-semibold text-sm text-gray-500'>2d</div>
              </div>
              <div className='font-bold'>...</div>
            </div>
            <img src={image} alt="no post" className='h-[500px] w-full my-3' />
            <div className='flex justify-between'>
              <div className='flex'>
                <Notifications />
                <Comment />
                <SharePost />
              </div>
              <div>
                <SavePost />
              </div>
            </div>
            <div className='font-semibold text-sm my-2'>1,732 likes</div>
            <div>
              <span className='font-semibold text-sm'>{user}</span>
              <span className='text-gray-600 text-sm'>Bigg Boss contestant Asim Riaz, who was close friends with the late actor, Sidharth Shukla, claimed the actor came in... more</span>
            </div>
            <div className='text-gray-500 text-sm my-2'>View all 1,034 comments</div>
            <div className='flex justify-between'>
              <div className='text-gray-500 text-sm mb-3'>Add a comment...</div>
              <Emoji />
            </div> <hr />
          </>
          ))}
        </div>
      </div>
      <div className='w-[35%] mr-20'>
        <Suggestion />
      </div>
    </div>
  )
}
