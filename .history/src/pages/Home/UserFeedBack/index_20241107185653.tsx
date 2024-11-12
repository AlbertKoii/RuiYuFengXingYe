

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
            <div>
                <ul>
                    {
                        Contents.map((Content)=>
                        (
                        
                                <Carousel key=>
                                    <CarouselContent className="-ml-4">
                                        <CarouselItem className="pl-4">User Name : {Content.UserName}</CarouselItem>
                                        <CarouselItem className="pl-4">Content : {Content.Content}</CarouselItem>
                                        <CarouselItem className="pl-4">Date : {Content.Date}</CarouselItem>
                                    </CarouselContent>
                                </Carousel>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default UserFeedBack;