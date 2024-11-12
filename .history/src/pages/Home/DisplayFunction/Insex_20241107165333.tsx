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
                const response = awai

             }catch(error){
                
             }
        }
    })
    
    return(
        <div>
            <div className="grid grid-cols-1">
                <div>
                    {
                        
                    }
                </div>
                
            </div>
        </div>
    )

    
}

export default DisplayFunction;