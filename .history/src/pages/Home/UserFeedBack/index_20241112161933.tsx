

import axios, { isAxiosError } from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


interface UserFeedBackProps{
    id: string;
    UserName: string;
    Content: string;
    Date: number;
}

const UserFeedBack: React.FC<UserFeedBackProps> = () =>{

    const [Contents , setContents] = useState<UserFeedBackProps[]>([])
    const [error, setError] = useState<string | null>(null);

    useEffect (()=>{
    const fetchContents = async () =>{
        try {
            const  response = await axios.get<UserFeedBackProps[]>(
                'https://66f17f7d4153791915512998.mockapi.io/api/content/TestContent'
            );
            setContents(response.data);
        }catch(error){
            if (isAxiosError(error)){
                setError(error.message)
            }else{
                setError('An unknown error occurred');
            }
        }
    }    
        fetchContents();
    },[])
    
    return(
        <div >

      <Carousel className='h-96 px-24 flex flex-wrap font-black object-contain p-4'>
        <CarouselContent className="ml-4">
          {Contents.map((Content)=>
            (
              <CarouselItem key={Content.id} 
              className=" basis-1/3 pl-4 mt-20">
                <p>User Name : {Content.UserName}</p>
                <p>Content : {Content.Content}</p>
                <p>Date : {Content.Date}</p>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    );
};

export default UserFeedBack;