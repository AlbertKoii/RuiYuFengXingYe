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

const AirConditionalType : React.FC<AirConditionalTypepProps> = () =>{

    return(
        <div className="w-screen relative">
            <Carousel>
                <CarouselContent className="h-96">
                    <CarouselItem className="basis-1/3">
                    <img src="	https://www.maintenance-service.com.tw/images/box06.jpg" alt="其他空調保養"/>
                    其他空調保養
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                    <img src="https://www.maintenance-service.com.tw/images/home-3-223x227.jpg" alt="壁掛式冷氣保養"/>
                    壁掛式冷氣保養
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                    <img src="https://www.maintenance-service.com.tw/images/home-2-223x227.jpg" alt="箱型冷氣保養"/>
                    箱型冷氣保養
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                    <img src="https://www.maintenance-service.com.tw/images/home-2-223x227.jpg" alt="箱型冷氣保養"/>
                    箱型冷氣保養
                    </CarouselItem>

                    
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default AirConditionalType;