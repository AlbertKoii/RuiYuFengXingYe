import React, { useEffect, useState } from "react";
import axios, { isAxiosError } from 'axios';

interface Photo {
    id: string;
    urls: {
      regular: string;
    };
  }

const DisplayFunction: React.FC = () =>{
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [error, setError] = useState<string | null>(null);
    

    useEffect(() => {
        const fetchPhotos = async () => {
          try {
            const response = await axios.get<Photo[]>(
              'https://api.unsplash.com/photos?client_id=YOUR_ACCESS_KEY'
            );
            setPhotos(response.data);
          } catch (error) {
            if (axios.isAxiosError(error)) {
              setError(error.message);
            } else {
              setError('錯誤資料');
            }
          }
        };
        fetchPhotos();
      }, []);
    
    return(
        <div>
            <div className="grid grid-cols-1">
                <div className="grid grid-cols-1">
                    {photos.map((photo) => (
                    <div key={photo.id}>
                        <img src={photo.urls.regular} alt={photo.id} />
                    </div>
                    ))}
                </div>
                {error && <div>錯誤：{error}</div>}
            </div>
        </div>
    )

    
}

export default DisplayFunction;