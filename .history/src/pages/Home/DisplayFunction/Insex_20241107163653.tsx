import React from "react";
import DisplayFunction001 from '@/img/DisplayFunction001.svg'



interface DisplayFunctionProps{
    
}

const DisplayFunction: React.FC<DisplayFunctionProps> = () =>{
    

    return(
        <div>
            <div className="grid grid-cols-1">
                <div>
                    <img src="https://www.figma.com/board/LcN9QwI525wWu57w4tCzpg/Untitled?node-id=2977-113&t=T0F8pjOgmGrvoko6-4" alt="功能展示圖像一"></img>
                {DisplayFunction001/>
                <p>Hello world</p>
                </div>
                
            </div>
        </div>
    )

    
}

export default DisplayFunction;