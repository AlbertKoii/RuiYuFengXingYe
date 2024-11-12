import React, { useState, useEffect } from 'react';
import { ImageGallery } from 'react-image-grid-gallery';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import ImageSlider from './Page/ImageSlider/Index'
import UpperInfo from './Page/UpperInfo/index'



interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {

  return (
    <div className="w-screen h-fit relative">
      <UpperInfo/>
      <ImageSlider/>
    </div>

  );
};

export default Home;