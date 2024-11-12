import React, { useEffect, useState } from "react";
import axios, { AxiosError } from 'axios';

interface Photo {
  id: string;
  urls: {
    regular: string;
  };
}

const DisplayFunction: React.FC = () => {
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
          console.error('Axios Error:', error.message);
          setError(error.message);
        } else {
          console.error('Unknown Error:', error);
          setError('錯誤資料');
        }
      }
    };
    fetchPhotos();
  }, []);

  return (
    <div className="grid grid-cols-1">
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.urls.regular} alt={photo.id} />
        </div>
      ))}
      {error && <div>錯誤：{error}</div>}
    </div>
  );
};

export default DisplayFunction;