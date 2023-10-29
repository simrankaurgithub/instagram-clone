import React from "react";
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
import "./Slide.css";
import Stories from 'react-insta-stories';


const story = [
  "https://i.imgur.com/QpUEcfi.jpg",
  "https://i.imgur.com/LBRXhIq.jpg",
  "https://picsum.photos/1080/1920",
  "https://i.imgur.com/in5Jr1h.jpg",
  {
    url: 'https://i.imgur.com/LBRXhIq.jpg',
    type: 'image',
  },
  {
    url: 'https://i.imgur.com/ARMxyC4.png',
    type: 'image',
  }
]

export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const {
    data,
    dataIndex,
    isCenterSlide,
    swipeTo,
    slideIndex
  } = StackedCarouselSlideProps;

  const coverImage = data[dataIndex].image;
  // const text = data[dataIndex].text;
  console.log("object", data[dataIndex])

  return (
    <div className="card-card" draggable={false}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      <div className="detail fill">
        <div className="discription">

          <Stories
            stories={data[dataIndex]}
            defaultInterval={1500}
            width={'100%'}
            height={'100vh'}
            style={{
              display: 'flex', justifyContent: "center", background: "red",
              cursor: 'pointer'
            }}
            // storyStyles={storyContent}
            loop={false}
            keyboardNavigation={true}
            isPaused={() => { }}
            currentIndex={() => { }}
            onStoryStart={() => { }}
            onStoryEnd={() => { }}
          />
          {/* <img
            style={{ width: 100 }}
            alt="j"
            className="cover-image"
            src={coverImage}
          /> */}
          {/* <p>{text}</p> */}
        </div>
      </div>
    </div>
  );
});
