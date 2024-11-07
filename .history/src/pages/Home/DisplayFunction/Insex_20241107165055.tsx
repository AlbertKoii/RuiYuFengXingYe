import React, { useState } from "react";


interface DisplayFunctionProps{
    
}

const DisplayFunction: React.FC<DisplayFunctionProps> = () =>{
    const [Contents , setContents] = useState<DisplayFunctionProps[]>([])

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