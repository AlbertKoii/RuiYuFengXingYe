import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './Styles.css'

interface ImageSliderProps{
  
}
interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    thumb: string;
  };
}

interface Image {
  id: string;
  alt: string;
  caption?: string;
  src: string;
  thumbnail: string;
}

const ImageSlider: React.FC<ImageSliderProps> = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchImages = async () => {
    const response = await fetch('https://api.unsplash.com/photos?client_id=m9PWKb7gMe3jBdFxodl-482pnXqPftUPHVsrc4syM_0');
    const data: UnsplashImage[] = await response.json();
    const imagesData = data.map((image: UnsplashImage , index: number) => ({
      id: index.toString(),
      alt: 'Image',
      src: image.urls.regular,
      thumbnail: image.urls.thumb,
    }));
    setImages(imagesData);
    console.log('Images fetched:', imagesData);
  };

  useEffect(() => {
    fetchImages();
  }, []);
  

  function handlePrevious() {
    console.log('handlePrevious be used');
    if (images.length > 0) {
      setCurrentSlide(currentSlide === 0? images.length - 1 : currentSlide - 1);
      console.log('New Slide Index:', currentSlide);
    } else {
      console.log('No images available');
    }
  }

  function handleNext() {
    console.log('handleNext be used');
    if (images.length > 0) {
      setCurrentSlide(currentSlide === images.length - 1? 0 : currentSlide + 1);
      console.log('New Slide Index:', currentSlide);
    } else {
      console.log('No images available');
    }
  }

  function handleClickLine

  return (
    <div className="w-screen h-fit relative">
      <div 
        className='absolute'
        style={{ top: '20rem', left: '-40rem' }}
        >
        <img 
        className=' w-24 h-24'
        src='https://qr-official.line.me/gs/M_870ixmou_GW.png' alt='Line 連結'
        onClick={}
        />
      </div>
      <div className="absolute top-0 left-0 w-full flex z-10 ">
        <BsArrowLeftCircleFill
          color = "white"
          onClick={handlePrevious}
          className="text-4xl cursor-pointer mx-4 mt-96"
        />
        <BsArrowRightCircleFill
          color = "white"
          onClick={handleNext}
          className="text-4xl cursor-pointer mx-4 mt-96 ml-3rem"
        />
      </div>
      <div className="gallery w-screen mx-auto">
        {images.length > 0 && (
            <img
              src={images[currentSlide].src}
              alt={images[currentSlide].alt}
              style={{ width: '100rem', height: '30rem', objectFit: 'cover' }}
            />
          )}
        
      </div>
      
    </div>

  );
};

export default ImageSlider;