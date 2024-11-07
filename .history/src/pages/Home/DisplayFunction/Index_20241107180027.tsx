import React, { useEffect, useState } from "react";
import axios from 'axios';

interface Photo {
    id: string;
    urls: {
      regular: string;
    };
  }

const DisplayFunction: React.FC = () =>{
    
    return(
        <div>
            <div className="grid grid-cols-1">
                <div className="grid grid-cols-4 ">
                    {photos.map((photo) => (
                    <div 
                    key={photo.urls.regular}>
                        <img 
                        className=" object-cover w-30 h-30 "
                        src={photo.urls.regular} alt={photo.id} />
                    </div>
                    ))}
                </div>
                {error && <div>錯誤：{error}</div>}
            </div>
        </div>
    )

    
}

export default DisplayFunction;