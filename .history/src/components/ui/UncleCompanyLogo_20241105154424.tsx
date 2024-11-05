import * as React from "react"


interface UncleCompanyLogoProps{
  
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
  
    return (
      <div className="w-screen h-fit relative">
        <img></img>
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

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg width="370" height="370" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="quickmark" fill="black" transform="translate(40,40)">
<rect x="0" y="0" width="10" height="10"/>
<rect x="10" y="0" width="10" height="10"/>
<rect x="20" y="0" width="10" height="10"/>
<rect x="30" y="0" width="10" height="10"/>
<rect x="40" y="0" width="10" height="10"/>
<rect x="50" y="0" width="10" height="10"/>
<rect x="60" y="0" width="10" height="10"/>
<rect x="80" y="0" width="10" height="10"/>
<rect x="90" y="0" width="10" height="10"/>
<rect x="120" y="0" width="10" height="10"/>
<rect x="130" y="0" width="10" height="10"/>
<rect x="140" y="0" width="10" height="10"/>
<rect x="150" y="0" width="10" height="10"/>
<rect x="170" y="0" width="10" height="10"/>
<rect x="180" y="0" width="10" height="10"/>
<rect x="190" y="0" width="10" height="10"/>
<rect x="220" y="0" width="10" height="10"/>
<rect x="230" y="0" width="10" height="10"/>
<rect x="240" y="0" width="10" height="10"/>
<rect x="250" y="0" width="10" height="10"/>
<rect x="260" y="0" width="10" height="10"/>
<rect x="270" y="0" width="10" height="10"/>
<rect x="280" y="0" width="10" height="10"/>
<rect x="0" y="10" width="10" height="10"/>
<rect x="60" y="10" width="10" height="10"/>
<rect x="80" y="10" width="10" height="10"/>
<rect x="120" y="10" width="10" height="10"/>
<rect x="130" y="10" width="10" height="10"/>
<rect x="160" y="10" width="10" height="10"/>
<rect x="180" y="10" width="10" height="10"/>
<rect x="200" y="10" width="10" height="10"/>
<rect x="220" y="10" width="10" height="10"/>
<rect x="280" y="10" width="10" height="10"/>
<rect x="0" y="20" width="10" height="10"/>
<rect x="20" y="20" width="10" height="10"/>
<rect x="30" y="20" width="10" height="10"/>
<rect x="40" y="20" width="10" height="10"/>
<rect x="60" y="20" width="10" height="10"/>
<rect x="90" y="20" width="10" height="10"/>
<rect x="100" y="20" width="10" height="10"/>
<rect x="110" y="20" width="10" height="10"/>
<rect x="120" y="20" width="10" height="10"/>
<rect x="160" y="20" width="10" height="10"/>
<rect x="180" y="20" width="10" height="10"/>
<rect x="190" y="20" width="10" height="10"/>
<rect x="220" y="20" width="10" height="10"/>
<rect x="240" y="20" width="10" height="10"/>
<rect x="250" y="20" width="10" height="10"/>
<rect x="260" y="20" width="10" height="10"/>
<rect x="280" y="20" width="10" height="10"/>
<rect x="0" y="30" width="10" height="10"/>
<rect x="20" y="30" width="10" height="10"/>
<rect x="30" y="30" width="10" height="10"/>
<rect x="40" y="30" width="10" height="10"/>
<rect x="60" y="30" width="10" height="10"/>
<rect x="80" y="30" width="10" height="10"/>
<rect x="90" y="30" width="10" height="10"/>
<rect x="110" y="30" width="10" height="10"/>
<rect x="120" y="30" width="10" height="10"/>
<rect x="140" y="30" width="10" height="10"/>
<rect x="150" y="30" width="10" height="10"/>
<rect x="200" y="30" width="10" height="10"/>
<rect x="220" y="30" width="10" height="10"/>
<rect x="240" y="30" width="10" height="10"/>
<rect x="250" y="30" width="10" height="10"/>
<rect x="260" y="30" width="10" height="10"/>
<rect x="280" y="30" width="10" height="10"/>
<rect x="0" y="40" width="10" height="10"/>
<rect x="20" y="40" width="10" height="10"/>
<rect x="30" y="40" width="10" height="10"/>
<rect x="40" y="40" width="10" height="10"/>
<rect x="60" y="40" width="10" height="10"/>
<rect x="90" y="40" width="10" height="10"/>
<rect x="140" y="40" width="10" height="10"/>
<rect x="160" y="40" width="10" height="10"/>
<rect x="170" y="40" width="10" height="10"/>
<rect x="190" y="40" width="10" height="10"/>
<rect x="220" y="40" width="10" height="10"/>
<rect x="240" y="40" width="10" height="10"/>
<rect x="250" y="40" width="10" height="10"/>
<rect x="260" y="40" width="10" height="10"/>
<rect x="280" y="40" width="10" height="10"/>
<rect x="0" y="50" width="10" height="10"/>
<rect x="60" y="50" width="10" height="10"/>
<rect x="110" y="50" width="10" height="10"/>
<rect x="130" y="50" width="10" height="10"/>
<rect x="150" y="50" width="10" height="10"/>
<rect x="160" y="50" width="10" height="10"/>
<rect x="190" y="50" width="10" height="10"/>
<rect x="200" y="50" width="10" height="10"/>
<rect x="220" y="50" width="10" height="10"/>
<rect x="280" y="50" width="10" height="10"/>
<rect x="0" y="60" width="10" height="10"/>
<rect x="10" y="60" width="10" height="10"/>
<rect x="20" y="60" width="10" height="10"/>
<rect x="30" y="60" width="10" height="10"/>
<rect x="40" y="60" width="10" height="10"/>
<rect x="50" y="60" width="10" height="10"/>
<rect x="60" y="60" width="10" height="10"/>
<rect x="80" y="60" width="10" height="10"/>
<rect x="100" y="60" width="10" height="10"/>
<rect x="120" y="60" width="10" height="10"/>
<rect x="140" y="60" width="10" height="10"/>
<rect x="160" y="60" width="10" height="10"/>
<rect x="180" y="60" width="10" height="10"/>
<rect x="200" y="60" width="10" height="10"/>
<rect x="220" y="60" width="10" height="10"/>
<rect x="230" y="60" width="10" height="10"/>
<rect x="240" y="60" width="10" height="10"/>
<rect x="250" y="60" width="10" height="10"/>
<rect x="260" y="60" width="10" height="10"/>
<rect x="270" y="60" width="10" height="10"/>
<rect x="280" y="60" width="10" height="10"/>
<rect x="80" y="70" width="10" height="10"/>
<rect x="110" y="70" width="10" height="10"/>
<rect x="120" y="70" width="10" height="10"/>
<rect x="150" y="70" width="10" height="10"/>
<rect x="160" y="70" width="10" height="10"/>
<rect x="170" y="70" width="10" height="10"/>
<rect x="190" y="70" width="10" height="10"/>
<rect x="0" y="80" width="10" height="10"/>
<rect x="20" y="80" width="10" height="10"/>
<rect x="30" y="80" width="10" height="10"/>
<rect x="50" y="80" width="10" height="10"/>
<rect x="60" y="80" width="10" height="10"/>
<rect x="70" y="80" width="10" height="10"/>
<rect x="90" y="80" width="10" height="10"/>
<rect x="120" y="80" width="10" height="10"/>
<rect x="130" y="80" width="10" height="10"/>
<rect x="150" y="80" width="10" height="10"/>
<rect x="170" y="80" width="10" height="10"/>
<rect x="220" y="80" width="10" height="10"/>
<rect x="250" y="80" width="10" height="10"/>
<rect x="270" y="80" width="10" height="10"/>
<rect x="280" y="80" width="10" height="10"/>
<rect x="10" y="90" width="10" height="10"/>
<rect x="80" y="90" width="10" height="10"/>
<rect x="90" y="90" width="10" height="10"/>
<rect x="110" y="90" width="10" height="10"/>
<rect x="120" y="90" width="10" height="10"/>
<rect x="130" y="90" width="10" height="10"/>
<rect x="140" y="90" width="10" height="10"/>
<rect x="150" y="90" width="10" height="10"/>
<rect x="170" y="90" width="10" height="10"/>
<rect x="190" y="90" width="10" height="10"/>
<rect x="210" y="90" width="10" height="10"/>
<rect x="220" y="90" width="10" height="10"/>
<rect x="240" y="90" width="10" height="10"/>
<rect x="280" y="90" width="10" height="10"/>
<rect x="0" y="100" width="10" height="10"/>
<rect x="10" y="100" width="10" height="10"/>
<rect x="20" y="100" width="10" height="10"/>
<rect x="30" y="100" width="10" height="10"/>
<rect x="40" y="100" width="10" height="10"/>
<rect x="50" y="100" width="10" height="10"/>
<rect x="60" y="100" width="10" height="10"/>
<rect x="120" y="100" width="10" height="10"/>
<rect x="130" y="100" width="10" height="10"/>
<rect x="160" y="100" width="10" height="10"/>
<rect x="170" y="100" width="10" height="10"/>
<rect x="210" y="100" width="10" height="10"/>
<rect x="220" y="100" width="10" height="10"/>
<rect x="260" y="100" width="10" height="10"/>
<rect x="270" y="100" width="10" height="10"/>
<rect x="0" y="110" width="10" height="10"/>
<rect x="10" y="110" width="10" height="10"/>
<rect x="20" y="110" width="10" height="10"/>
<rect x="30" y="110" width="10" height="10"/>
<rect x="100" y="110" width="10" height="10"/>
<rect x="110" y="110" width="10" height="10"/>
<rect x="160" y="110" width="10" height="10"/>
<rect x="190" y="110" width="10" height="10"/>
<rect x="230" y="110" width="10" height="10"/>
<rect x="280" y="110" width="10" height="10"/>
<rect x="30" y="120" width="10" height="10"/>
<rect x="40" y="120" width="10" height="10"/>
<rect x="60" y="120" width="10" height="10"/>
<rect x="70" y="120" width="10" height="10"/>
<rect x="90" y="120" width="10" height="10"/>
<rect x="100" y="120" width="10" height="10"/>
<rect x="110" y="120" width="10" height="10"/>
<rect x="140" y="120" width="10" height="10"/>
<rect x="150" y="120" width="10" height="10"/>
<rect x="170" y="120" width="10" height="10"/>
<rect x="180" y="120" width="10" height="10"/>
<rect x="190" y="120" width="10" height="10"/>
<rect x="250" y="120" width="10" height="10"/>
<rect x="260" y="120" width="10" height="10"/>
<rect x="0" y="130" width="10" height="10"/>
<rect x="20" y="130" width="10" height="10"/>
<rect x="50" y="130" width="10" height="10"/>
<rect x="80" y="130" width="10" height="10"/>
<rect x="90" y="130" width="10" height="10"/>
<rect x="110" y="130" width="10" height="10"/>
<rect x="120" y="130" width="10" height="10"/>
<rect x="140" y="130" width="10" height="10"/>
<rect x="160" y="130" width="10" height="10"/>
<rect x="170" y="130" width="10" height="10"/>
<rect x="180" y="130" width="10" height="10"/>
<rect x="190" y="130" width="10" height="10"/>
<rect x="220" y="130" width="10" height="10"/>
<rect x="260" y="130" width="10" height="10"/>
<rect x="270" y="130" width="10" height="10"/>
<rect x="280" y="130" width="10" height="10"/>
<rect x="0" y="140" width="10" height="10"/>
<rect x="30" y="140" width="10" height="10"/>
<rect x="40" y="140" width="10" height="10"/>
<rect x="50" y="140" width="10" height="10"/>
<rect x="60" y="140" width="10" height="10"/>
<rect x="80" y="140" width="10" height="10"/>
<rect x="90" y="140" width="10" height="10"/>
<rect x="100" y="140" width="10" height="10"/>
<rect x="130" y="140" width="10" height="10"/>
<rect x="150" y="140" width="10" height="10"/>
<rect x="160" y="140" width="10" height="10"/>
<rect x="170" y="140" width="10" height="10"/>
<rect x="180" y="140" width="10" height="10"/>
<rect x="190" y="140" width="10" height="10"/>
<rect x="210" y="140" width="10" height="10"/>
<rect x="240" y="140" width="10" height="10"/>
<rect x="260" y="140" width="10" height="10"/>
<rect x="270" y="140" width="10" height="10"/>
<rect x="280" y="140" width="10" height="10"/>
<rect x="20" y="150" width="10" height="10"/>
<rect x="50" y="150" width="10" height="10"/>
<rect x="70" y="150" width="10" height="10"/>
<rect x="100" y="150" width="10" height="10"/>
<rect x="110" y="150" width="10" height="10"/>
<rect x="120" y="150" width="10" height="10"/>
<rect x="140" y="150" width="10" height="10"/>
<rect x="160" y="150" width="10" height="10"/>
<rect x="200" y="150" width="10" height="10"/>
<rect x="230" y="150" width="10" height="10"/>
<rect x="270" y="150" width="10" height="10"/>
<rect x="20" y="160" width="10" height="10"/>
<rect x="40" y="160" width="10" height="10"/>
<rect x="60" y="160" width="10" height="10"/>
<rect x="70" y="160" width="10" height="10"/>
<rect x="90" y="160" width="10" height="10"/>
<rect x="110" y="160" width="10" height="10"/>
<rect x="140" y="160" width="10" height="10"/>
<rect x="150" y="160" width="10" height="10"/>
<rect x="210" y="160" width="10" height="10"/>
<rect x="230" y="160" width="10" height="10"/>
<rect x="240" y="160" width="10" height="10"/>
<rect x="250" y="160" width="10" height="10"/>
<rect x="270" y="160" width="10" height="10"/>
<rect x="20" y="170" width="10" height="10"/>
<rect x="50" y="170" width="10" height="10"/>
<rect x="80" y="170" width="10" height="10"/>
<rect x="100" y="170" width="10" height="10"/>
<rect x="120" y="170" width="10" height="10"/>
<rect x="140" y="170" width="10" height="10"/>
<rect x="160" y="170" width="10" height="10"/>
<rect x="180" y="170" width="10" height="10"/>
<rect x="200" y="170" width="10" height="10"/>
<rect x="230" y="170" width="10" height="10"/>
<rect x="250" y="170" width="10" height="10"/>
<rect x="260" y="170" width="10" height="10"/>
<rect x="270" y="170" width="10" height="10"/>
<rect x="10" y="180" width="10" height="10"/>
<rect x="20" y="180" width="10" height="10"/>
<rect x="30" y="180" width="10" height="10"/>
<rect x="50" y="180" width="10" height="10"/>
<rect x="60" y="180" width="10" height="10"/>
<rect x="70" y="180" width="10" height="10"/>
<rect x="100" y="180" width="10" height="10"/>
<rect x="120" y="180" width="10" height="10"/>
<rect x="130" y="180" width="10" height="10"/>
<rect x="140" y="180" width="10" height="10"/>
<rect x="150" y="180" width="10" height="10"/>
<rect x="160" y="180" width="10" height="10"/>
<rect x="180" y="180" width="10" height="10"/>
<rect x="200" y="180" width="10" height="10"/>
<rect x="230" y="180" width="10" height="10"/>
<rect x="240" y="180" width="10" height="10"/>
<rect x="260" y="180" width="10" height="10"/>
<rect x="0" y="190" width="10" height="10"/>
<rect x="10" y="190" width="10" height="10"/>
<rect x="30" y="190" width="10" height="10"/>
<rect x="40" y="190" width="10" height="10"/>
<rect x="50" y="190" width="10" height="10"/>
<rect x="80" y="190" width="10" height="10"/>
<rect x="100" y="190" width="10" height="10"/>
<rect x="110" y="190" width="10" height="10"/>
<rect x="130" y="190" width="10" height="10"/>
<rect x="140" y="190" width="10" height="10"/>
<rect x="160" y="190" width="10" height="10"/>
<rect x="170" y="190" width="10" height="10"/>
<rect x="190" y="190" width="10" height="10"/>
<rect x="210" y="190" width="10" height="10"/>
<rect x="230" y="190" width="10" height="10"/>
<rect x="240" y="190" width="10" height="10"/>
<rect x="260" y="190" width="10" height="10"/>
<rect x="0" y="200" width="10" height="10"/>
<rect x="50" y="200" width="10" height="10"/>
<rect x="60" y="200" width="10" height="10"/>
<rect x="80" y="200" width="10" height="10"/>
<rect x="130" y="200" width="10" height="10"/>
<rect x="140" y="200" width="10" height="10"/>
<rect x="170" y="200" width="10" height="10"/>
<rect x="180" y="200" width="10" height="10"/>
<rect x="200" y="200" width="10" height="10"/>
<rect x="210" y="200" width="10" height="10"/>
<rect x="220" y="200" width="10" height="10"/>
<rect x="230" y="200" width="10" height="10"/>
<rect x="240" y="200" width="10" height="10"/>
<rect x="250" y="200" width="10" height="10"/>
<rect x="260" y="200" width="10" height="10"/>
<rect x="80" y="210" width="10" height="10"/>
<rect x="110" y="210" width="10" height="10"/>
<rect x="120" y="210" width="10" height="10"/>
<rect x="160" y="210" width="10" height="10"/>
<rect x="170" y="210" width="10" height="10"/>
<rect x="180" y="210" width="10" height="10"/>
<rect x="200" y="210" width="10" height="10"/>
<rect x="240" y="210" width="10" height="10"/>
<rect x="250" y="210" width="10" height="10"/>
<rect x="260" y="210" width="10" height="10"/>
<rect x="270" y="210" width="10" height="10"/>
<rect x="280" y="210" width="10" height="10"/>
<rect x="0" y="220" width="10" height="10"/>
<rect x="10" y="220" width="10" height="10"/>
<rect x="20" y="220" width="10" height="10"/>
<rect x="30" y="220" width="10" height="10"/>
<rect x="40" y="220" width="10" height="10"/>
<rect x="50" y="220" width="10" height="10"/>
<rect x="60" y="220" width="10" height="10"/>
<rect x="80" y="220" width="10" height="10"/>
<rect x="110" y="220" width="10" height="10"/>
<rect x="120" y="220" width="10" height="10"/>
<rect x="140" y="220" width="10" height="10"/>
<rect x="160" y="220" width="10" height="10"/>
<rect x="170" y="220" width="10" height="10"/>
<rect x="190" y="220" width="10" height="10"/>
<rect x="200" y="220" width="10" height="10"/>
<rect x="220" y="220" width="10" height="10"/>
<rect x="240" y="220" width="10" height="10"/>
<rect x="250" y="220" width="10" height="10"/>
<rect x="270" y="220" width="10" height="10"/>
<rect x="0" y="230" width="10" height="10"/>
<rect x="60" y="230" width="10" height="10"/>
<rect x="80" y="230" width="10" height="10"/>
<rect x="90" y="230" width="10" height="10"/>
<rect x="100" y="230" width="10" height="10"/>
<rect x="130" y="230" width="10" height="10"/>
<rect x="140" y="230" width="10" height="10"/>
<rect x="150" y="230" width="10" height="10"/>
<rect x="180" y="230" width="10" height="10"/>
<rect x="190" y="230" width="10" height="10"/>
<rect x="200" y="230" width="10" height="10"/>
<rect x="240" y="230" width="10" height="10"/>
<rect x="250" y="230" width="10" height="10"/>
<rect x="280" y="230" width="10" height="10"/>
<rect x="0" y="240" width="10" height="10"/>
<rect x="20" y="240" width="10" height="10"/>
<rect x="30" y="240" width="10" height="10"/>
<rect x="40" y="240" width="10" height="10"/>
<rect x="60" y="240" width="10" height="10"/>
<rect x="170" y="240" width="10" height="10"/>
<rect x="200" y="240" width="10" height="10"/>
<rect x="210" y="240" width="10" height="10"/>
<rect x="220" y="240" width="10" height="10"/>
<rect x="230" y="240" width="10" height="10"/>
<rect x="240" y="240" width="10" height="10"/>
<rect x="260" y="240" width="10" height="10"/>
<rect x="270" y="240" width="10" height="10"/>
<rect x="0" y="250" width="10" height="10"/>
<rect x="20" y="250" width="10" height="10"/>
<rect x="30" y="250" width="10" height="10"/>
<rect x="40" y="250" width="10" height="10"/>
<rect x="60" y="250" width="10" height="10"/>
<rect x="80" y="250" width="10" height="10"/>
<rect x="90" y="250" width="10" height="10"/>
<rect x="100" y="250" width="10" height="10"/>
<rect x="110" y="250" width="10" height="10"/>
<rect x="130" y="250" width="10" height="10"/>
<rect x="150" y="250" width="10" height="10"/>
<rect x="160" y="250" width="10" height="10"/>
<rect x="180" y="250" width="10" height="10"/>
<rect x="230" y="250" width="10" height="10"/>
<rect x="240" y="250" width="10" height="10"/>
<rect x="250" y="250" width="10" height="10"/>
<rect x="280" y="250" width="10" height="10"/>
<rect x="0" y="260" width="10" height="10"/>
<rect x="20" y="260" width="10" height="10"/>
<rect x="30" y="260" width="10" height="10"/>
<rect x="40" y="260" width="10" height="10"/>
<rect x="60" y="260" width="10" height="10"/>
<rect x="80" y="260" width="10" height="10"/>
<rect x="90" y="260" width="10" height="10"/>
<rect x="120" y="260" width="10" height="10"/>
<rect x="190" y="260" width="10" height="10"/>
<rect x="230" y="260" width="10" height="10"/>
<rect x="260" y="260" width="10" height="10"/>
<rect x="280" y="260" width="10" height="10"/>
<rect x="0" y="270" width="10" height="10"/>
<rect x="60" y="270" width="10" height="10"/>
<rect x="100" y="270" width="10" height="10"/>
<rect x="110" y="270" width="10" height="10"/>
<rect x="130" y="270" width="10" height="10"/>
<rect x="150" y="270" width="10" height="10"/>
<rect x="160" y="270" width="10" height="10"/>
<rect x="180" y="270" width="10" height="10"/>
<rect x="190" y="270" width="10" height="10"/>
<rect x="220" y="270" width="10" height="10"/>
<rect x="240" y="270" width="10" height="10"/>
<rect x="250" y="270" width="10" height="10"/>
<rect x="270" y="270" width="10" height="10"/>
<rect x="0" y="280" width="10" height="10"/>
<rect x="10" y="280" width="10" height="10"/>
<rect x="20" y="280" width="10" height="10"/>
<rect x="30" y="280" width="10" height="10"/>
<rect x="40" y="280" width="10" height="10"/>
<rect x="50" y="280" width="10" height="10"/>
<rect x="60" y="280" width="10" height="10"/>
<rect x="80" y="280" width="10" height="10"/>
<rect x="100" y="280" width="10" height="10"/>
<rect x="120" y="280" width="10" height="10"/>
<rect x="130" y="280" width="10" height="10"/>
<rect x="150" y="280" width="10" height="10"/>
<rect x="180" y="280" width="10" height="10"/>
<rect x="190" y="280" width="10" height="10"/>
<rect x="200" y="280" width="10" height="10"/>
<rect x="210" y="280" width="10" height="10"/>
<rect x="220" y="280" width="10" height="10"/>
<rect x="240" y="280" width="10" height="10"/>
<rect x="270" y="280" width="10" height="10"/>
</g></svg>