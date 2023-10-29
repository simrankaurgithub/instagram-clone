import React from 'react';
import Stories from 'react-insta-stories';

const burakHeading = {
  heading: "Burak Deniz",
  subheading: "burakdeniz@gmail.com",
  profileImage: "https://i.imgur.com/lq0DC3a.jpg"
}
const story = [

  "https://i.imgur.com/QpUEcfi.jpg",
  "https://i.imgur.com/LBRXhIq.jpg",
  "https://picsum.photos/1080/1920",
  // type: 'image',
  // header: burakHeading,
  // seeMore: true,
  // // duration: 1500,
  // seeMore: ({ close }) => {
  // 		return <div onClick={close}>Hello, click to close this.</div>;
  // 	},


  "https://i.imgur.com/in5Jr1h.jpg",
  // type: 'image',
  // header: burakHeading,
  // seeMore: ({ close }) => {
  // 		return <div onClick={close}>Hello, click to close this.</div>;
  // 	},

  // {
  //   url: 'https://i.imgur.com/Zo5Kpnd.mp4',
  //   type: 'video',
  //   // header: burakHeading
  // },
  {
    url: 'https://i.imgur.com/LBRXhIq.jpg',
    type: 'image',
    header: burakHeading,
  },
  {
    url: 'https://i.imgur.com/ARMxyC4.png',
    type: 'image',
    header: burakHeading,
  }
]
const StoryComponent = () => {
  //   const [stories, setStories] = React.useState(initialStories);

  const onAllStoriesEndHandler = () => {
    console.log('stories ended')
  }

  const storyContent = {
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 'auto',

  }

  return (
    <>
      <Stories
        stories={story}
        defaultInterval={1500}
        width={'100%'}
        height={'100vh'}
        style={{
          display: 'flex', justifyContent: "center", background: "red",
          cursor: 'pointer'
        }}
        storyStyles={storyContent}
        loop={false}
        keyboardNavigation={true}
        isPaused={() => { }}
        currentIndex={() => { }}
        onStoryStart={() => { }}
        onStoryEnd={() => { }}
        onAllStoriesEnd={onAllStoriesEndHandler}
      />
    </>
  )
}

export default StoryComponent;