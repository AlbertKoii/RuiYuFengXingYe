import React, { useState, useEffect } from 'react';
// import { ImageGallery } from 'react-image-grid-gallery';
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import ImageSlider from './UpperInfo/index'
import UpperInfo from './ImageSlider/Index'
// import UserFeedBack from './UserFeedBack';
import DisplayFunctionProps from './DisplayFunction/Index'
import 



interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {

  return (
    <div className="w-screen h-fit relative">
      <ImageSlider/>
      <UpperInfo/>
      {/* <UserFeedBack id={''} UserName={''} Content={''} Date={0}/> */}
      <DisplayFunctionProps/>
      <Contact/>
    </div>

  );
};

export default Home;