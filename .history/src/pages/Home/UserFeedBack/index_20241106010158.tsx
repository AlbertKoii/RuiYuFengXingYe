

import axios, { isAxiosError } from 'axios';
import React, { useState, useEffect } from 'react';


interface UserFeedBackProps{
    id: string;
    UserName: string;
    Content: string;
    Date: number;
}

const UserFeedBack: React.FC<UserFeedBackProps> = () =>{

    const [Content , setContent] = useState<UserFeedBackProps[]>([])
    const [error, setError] = useState<string | null>(null);

    const fetchContents = async () =>{
        try {
            const  response = await axios.get<UserFeedBackProps[]>(
                'https://66f17f7d4153791915512998.mockapi.io/api/content/TestContent'
            );
            setContent(response.data);
        }catch(error){
            if (isAxiosError(error)){
                set
            }
            
        }
    }
    
    return(
        <div>
            <h1>Hello World !</h1>
        </div>
    );
};

export default UserFeedBack;