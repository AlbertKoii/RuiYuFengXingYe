import React from "react";

import DisplayFunction001 from '@/img/DisplayFunction001.svg'




interface DisplayFunctionProps{
    
}

const DisplayFunction: React.FC<DisplayFunctionProps> = () =>{
    

    return(
        <div>
            <div className="grid grid-cols-1">
                <div>
                    <img src="../..//img/DisplayFunction001.svg" alt="功能展示圖像一"></img>
                <p>Hello world</p>
                </div>
                
            </div>
        </div>
    )

    
}

export default DisplayFunction;