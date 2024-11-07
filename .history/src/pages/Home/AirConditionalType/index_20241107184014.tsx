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
        <div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="basis-1/3">
                    <img src="	https://www.maintenance-service.com.tw/images/box06.jpg" alt="其他空調保養"/>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">
                    
                    </CarouselItem>
                    <CarouselItem className="basis-1/3">...</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default AirConditionalType;