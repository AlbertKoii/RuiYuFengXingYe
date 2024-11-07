import React, { useState, useEffect } from 'react';
// import { ImageGallery } from 'react-image-grid-gallery';
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import ImageSlider from './UpperInfo/index'
import UpperInfo from './ImageSlider/Index'
UserF



interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {

  return (
    <div className="w-screen h-fit relative">
      <ImageSlider/>
      <UpperInfo/>
      
    </div>

  );
};

export default Home;