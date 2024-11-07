import React, { useEffect, useState } from "react";
import axios, { isAxiosError } from 'axios';


interface DisplayFunctionProps{
    
}

const DisplayFunction: React.FC<DisplayFunctionProps> = () =>{
    const [DisContents , setDisContents] = useState<DisplayFunctionProps[]>([])
    const [error , setError] = useState<string | null>
    

    useEffect (()=>{
        const fetchContents = async () => {
             try{
                const response = await axios.get<DisplayFunctionProps[]>(
                    'https://api.unsplash.com/photos?client_id=m9PWKb7gMe3jBdFxodl-482pnXqPftUPHVsrc4syM_0',{
                    params: { client_id: 'm9PWKb7gMe3jBdFxodl-482pnXqPftUPHVsrc4syM_0' }
                    }
                    
                )
                setDisContents(response.data)

             }catch(error){
                if (isAxiosError(error)){
                    setError(error.message)
                }else{
                    setError('錯誤資料')
                }
             }
        }
    },[])
    
    return(
        <div>
            <div className="grid grid-cols-1">
                <div>
                    {
                        DisContents.map((DisContent)=>(
                            <div>
                                <img src={DisContent.urls.id}>{}</img>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </div>
    )

    
}

export default DisplayFunction;