

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
        <div>
      {
        error && <h1>{error}</h1>
      }
      <Carousel className='h-96 px-24'>
        <CarouselContent className="-ml-4 basis-1/3">
          {Contents.map((Content)=>
            (
              <CarouselItem key={Content.id} className="">
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