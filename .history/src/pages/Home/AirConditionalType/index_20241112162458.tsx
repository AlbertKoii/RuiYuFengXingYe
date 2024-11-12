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
            <Carousel className="flex flex-wrap w-full font-black object-contain p-4">
                <CarouselContent className="h-96 px-24 w-full xs:w-1/1 sm:w-1/1 md:w-1/2 lg:w-1/4 xl:w-1/5 p-4 text-center">
                    <CarouselItem className="basis-1/3 xs:basic-1/1 sm:basic-1/1 md:basic-1/2">
                    <img src="	https://www.maintenance-service.com.tw/images/box06.jpg" alt="其他空調保養"/>
                    其他空調保養
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 xs:basic-1/1 sm:basic-1/1 md:basic-1/2">
                    <img src="https://www.maintenance-service.com.tw/images/home-1-223x227.jpg" alt="壁掛式冷氣保養"/>
                    壁掛式冷氣保養
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 xs:basic-1/1 sm:basic-1/1 md:basic-1/2">
                    <img src="https://www.maintenance-service.com.tw/images/home-2-223x227.jpg" alt="箱型冷氣保養"/>
                    箱型冷氣保養
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 xs:basic-1/1 sm:basic-1/1 md:basic-1/2">
                    <img src="https://www.maintenance-service.com.tw/images/home-2-223x227.jpg" alt="窗型冷氣保養"/>
                    窗型冷氣保養
                    </CarouselItem>
                    <CarouselItem className="basis-1/3 xs:basic-1/1 sm:basic-1/1 md:basic-1/2">
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