import React, { useState, useEffect } from 'react';
// import { ImageGallery } from 'react-image-grid-gallery';
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import ImageSlider from './UpperInfo/index'
import UpperInfo from './ImageSlider/Index'
// import UserFeedBack from './UserFeedBack';
import DisplayFunctionProps from './DisplayFunction/Index'
import Contact from './Contact/index'
import AirConditionalType from './AirConditionalType'
import UserFeedBack from './UserFeedBack';


const ImageComponent = () => {
  const baseUrl = process.env.NODE_ENV === 'production'? '/RuiYuFengXingYe/' : '/';

interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {

  

  return (
    <div className="w-screen h-fit relative">
      <ImageSlider/>
      <UpperInfo/>
      <DisplayFunctionProps/>
      <Contact/>
      <AirConditionalType/>
      <UserFeedBack id={''} UserName={''} Content={''} Date={0}/>
    </div>

  );
};

export default Home;