import React, { useEffect } from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
// import CustomLeftArrow from '../CustomLeftArrow';
// import CustomRightArrow from '../CustomRightArrow';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getStories } from '../../redux/Actions/stories';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
}

export default function CarouselStories() {
    const { stories } = useSelector((state) => state.storyReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStories());
    }, [dispatch])
    return (
        <Carousel
            className=""
            containerClass="w-5/6 mx-auto"
            itemClass="text-center p-1"
            // customRightArrow={<CustomRightArrow />}
            keyBoardControl
            responsive={responsive}
            sliderClass=""
            slidesToSlide={8}>
            {stories.map(({ profilePic, user }) => (
                <>
                    <Avatar src={profilePic} round={true} size="58px" className='text-center border-red outline outline-offset-2 outline-2 outline-red-500' />
                    <p className='text-xs'>{user}</p>
                </>
            ))}
        </Carousel>
    )
}
