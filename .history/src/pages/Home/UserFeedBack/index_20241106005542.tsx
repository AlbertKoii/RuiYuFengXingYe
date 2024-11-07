

import React, { useState, useEffect } from 'react';

interface UserFeedBackProps{
    id: string;
    UserName: string;
    Content: string;
    Date: number;
}

const UserFeedBack: React.FC<UserFeedBackProps> = () =>{

    const [Content , setContent] = useState<Content[]  >
    
    return(
        <div>
            <h1>Hello World !</h1>
        </div>
    );
};

export default UserFeedBack;