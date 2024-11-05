import React, { useState, useEffect } from 'react';
// import { ImageGallery } from 'react-image-grid-gallery';
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import ImageSlider from './UpperInfo/index'
import UpperInfo from './ImageSlider/Index'



interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {

  const handleClickLineOfficial = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault(); // 防止默认行为（如果必要）
    window.location.href = 'https://lin.ee/OaVwRcs';
    console.log('Button clicked!');
  };

  return (
    <div className="w-screen h-fit relative">
      <ImageSlider handleClickLineOfficial={handleClickLineOfficial}/>
      <UpperInfo/>
      
    </div>

  );
};

export default Home;