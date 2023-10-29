// import Footer from "./Layouts/Footer/index";

import React from "react";
import AppRouter from "./routes";

export default function App() {
  return (
    <AppRouter />
  )
}

// import {
//   StackedCarousel,
//   ResponsiveContainer
// } from "react-stacked-center-carousel";
// import Fab from "@material-ui/core/Fab";
// import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// import "./Slide.css";
// import { Slide } from "./Slide";

// const story = [
//   "https://i.imgur.com/QpUEcfi.jpg",
//   "https://i.imgur.com/LBRXhIq.jpg",
//   "https://picsum.photos/1080/1920",
//   "https://i.imgur.com/in5Jr1h.jpg",
//   {
//     url: 'https://i.imgur.com/LBRXhIq.jpg',
//     type: 'image',
//   },
//   {
//     url: 'https://i.imgur.com/ARMxyC4.png',
//     type: 'image',
//   }
// ]

// const data = [
//   [
//     "https://i.imgur.com/QpUEcfi.jpg",
//     "https://i.imgur.com/LBRXhIq.jpg",
//     "https://picsum.photos/1080/1920",
//     "https://i.imgur.com/in5Jr1h.jpg",
//     {
//       url: 'https://i.imgur.com/LBRXhIq.jpg',
//       type: 'image',
//     },
//     {
//       url: 'https://i.imgur.com/ARMxyC4.png',
//       type: 'image',
//     }
//   ],
//   [
//     "https://i.imgur.com/QpUEcfi.jpg",
//     "https://i.imgur.com/LBRXhIq.jpg",
//     // "https://picsum.photos/1080/1920",
//     // "https://i.imgur.com/in5Jr1h.jpg",
//     // {
//     //   url: 'https://i.imgur.com/LBRXhIq.jpg',
//     //   type: 'image',
//     // },
//     {
//       url: 'https://i.imgur.com/ARMxyC4.png',
//       type: 'image',
//     }
//   ],
//   [
//     // "https://i.imgur.com/QpUEcfi.jpg",
//     // "https://i.imgur.com/LBRXhIq.jpg",
//     // "https://picsum.photos/1080/1920",
//     "https://i.imgur.com/in5Jr1h.jpg",
//     {
//       url: 'https://i.imgur.com/LBRXhIq.jpg',
//       type: 'image',
//     },
//     {
//       url: 'https://i.imgur.com/ARMxyC4.png',
//       type: 'image',
//     }
//   ],
//   [
//     {
//       url: "https://picsum.photos/200/300/?random=1",
//       type: "image"
//     }
//   ],
//   [
//     {
//       url: "https://picsum.photos/200/300/?random=12",
//       type: "image"
//     }
//   ],
//   [
//     {
//       url: "https://picsum.photos/200/300/?random=13",
//       type: "image"
//     }
//   ],
//   [
//     {
//       url: "https://picsum.photos/200/300/?random=15",
//       type: "image"
//     }
//   ],
//   [
//     {
//       url: "https://picsum.photos/200/300/?random=10",
//       type: "image"
//     }
//   ]
// ];

// const CardExample = () => {
//   const ref = React.useRef(StackedCarousel);
//   return (
//     <div className="card">
//       <div style={{ width: "100%", position: "relative" }}>
//         <ResponsiveContainer
//           carouselRef={ref}
//           render={(width, carouselRef) => {
//             return (
//               <StackedCarousel
//                 ref={carouselRef}
//                 slideComponent={Slide}
//                 slideWidth={200}
//                 carouselWidth={width}
//                 data={data}
//                 maxVisibleSlide={5}
//                 disableSwipe
//                 // customScales={[1, 0.85, 0.7, 0.55]}
//                 customScales={[1, 0.7, 0.7, 0.55]}
//                 transitionTime={450}
//               />
//             );
//           }}
//         />
//         <Fab
//           className="card-button left"
//           size="small"
//           onClick={() => ref.current?.goBack()}
//         >
//           <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
//         </Fab>
//         <Fab
//           className="card-button right"
//           size="small"
//           onClick={() => ref.current?.goNext()}
//         >
//           <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
//         </Fab>
//       </div>
//     </div>
//   );
// };

// export default CardExample;

// import React from "react";
// import StoryComponent from './Stories'

// export default function App() {
//   return (
//     <StoryComponent />
//   );
// }

// // import React, { useEffect } from 'react';
// // import ReactDOM from 'react-dom';
// // import Modal from 'react-modal';

// // const customStyles = {
// //   content: {
// //     top: '50%',
// //     left: '50%',
// //     right: 'auto',
// //     bottom: 'auto',
// //     padding : "0px",
// //     transform: 'translate(-50%, -50%)',
// //   },
// // };

// // Modal.setAppElement('#root');

// // export default function App() {
// //   let subtitle;
// //   const [modalIsOpen, setIsOpen] = React.useState(false);
// //   useEffect(() => {
// //     modalIsOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
// //   }, [modalIsOpen]);

// //   function openModal() {
// //     setIsOpen(true);
// //   }

// //   function afterOpenModal() {
// //     subtitle.style.color = '#f00';
// //   }

// //   function closeModal() {
// //     setIsOpen(false);
// //   }

// //   return (
// //     <div>
// //       <button onClick={openModal} className="bg-red-500">Open Modal</button>
// //       <Modal
// //         isOpen={modalIsOpen}
// //         onAfterOpen={afterOpenModal}
// //         onRequestClose={closeModal}
// //         style={{
// //           content: {
// //             top: '50%',
// //             left: '50%',
// //             right: 'auto',
// //             bottom: 'auto',
// //             padding: "0px",
// //             transform: 'translate(-50%, -50%)',
// //           },
// //         }}
// //         contentLabel="Example Modal"
// //       >
// //         {/* <div className='divide-y w-[500px] text-center space-y-3 '>
// //           <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
// //           <div>Report</div>
// //           <div>Unfollow</div>
// //           <div>Add to favorites</div>
// //           <div>Go to post</div>
// //           <div>Sahre to...</div>
// //           <div>Copy link</div>
// //           <div>Embed</div>
// //           <div>About this account</div>
// //           <div onClick={closeModal}>Cancel</div>
// //         </div> */}
// //         <div class="grid grid-cols-1 divide-y">
// //           <div>01</div>
// //           <div>02</div>
// //           <div>03</div>
// //         </div>
// //       </Modal>
// //     </div>
// //   );
// // }
