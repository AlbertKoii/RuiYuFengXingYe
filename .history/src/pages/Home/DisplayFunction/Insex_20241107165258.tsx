import React, { useEffect, useState } from "react";


interface DisplayFunctionProps{
    
}

const DisplayFunction: React.FC<DisplayFunctionProps> = () =>{
    const [DisContents , setDisContents] = useState<DisplayFunctionProps[]>([])
    const [error , setError] = useState<string | null>
    

    useEffect (()=>{
        const fetchContents = async () => {
             try{

             }catch
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