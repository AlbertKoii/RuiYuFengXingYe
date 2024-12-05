import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import React from "react"


interface AirConditionalTypeProps{
    
}

const AirConditionalType : React.FC<AirConditionalTypeProps> = () =>{

    return(
        <div className="w-screen relative">
            <h1 className="mb-10 justify-center">冷氣保養</h1>
            <Carousel>
                <CarouselContent className="h-96 px-24 py-10 xs:basic-1/1 sm:basic-1 lg:basic-1/3 xl:basic-1/3">
                    <CarouselItem className="basis-1/3 xs:basic-1/1 sm:basic-1/1 lg:basic-1/3 xl:basic-1/3">
                    <img src="	https://www.maintenance-service.com.tw/images/box06.jpg" alt="其他空調保養"/>
                    其他空調保養
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 xs:basic-1/1 sm:basic-1/1 lg:basic-1/3 xl:basic-1/3">
                    <img src="https://www.maintenance-service.com.tw/images/home-1-223x227.jpg" alt="壁掛式冷氣保養"/>
                    壁掛式冷氣保養
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 xs:basic-1/1 sm:basic-1/1 lg:basic-1/3 xl:basic-1/3">
                    <img src="https://www.maintenance-service.com.tw/images/home-2-223x227.jpg" alt="箱型冷氣保養"/>
                    箱型冷氣保養    
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 xs:basic-1/1 sm:basic-1/1 lg:basic-1/3 xl:basic-1/3">
                    <img src="https://www.maintenance-service.com.tw/images/home-2-223x227.jpg" alt="窗型冷氣保養"/>
                    窗型冷氣保養
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 xs:basic-1/1 sm:basic-1/1 lg:basic-1/3 xl:basic-1/3">
                    <img src="https://www.maintenance-service.com.tw/images/home-3-223x227.jpg" alt="吊隱式冷氣保養"/>
                    吊隱式冷氣保養
                    </CarouselItem>    
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default AirConditionalType;