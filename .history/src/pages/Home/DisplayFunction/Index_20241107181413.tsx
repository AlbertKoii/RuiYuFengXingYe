import React, { useEffect, useState } from "react";
import axios from 'axios';
import Display1 from '@/img/DisplayFunction001.png'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"


interface DisplayFunction {
    
  }

const DisplayFunction: React.FC = () =>{
    
    return(
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <img src={Display1} alt="First Pics"/>
            <div>
              <p>
              冷氣暴露室外無論經常使用還是偶爾使用，空調都要進行定期的清洗，定期保養的冷氣能降低室內溫度及延長冷氣壽命.
              </p>
            </div>
          </div>
          <div>
            <img src={Display1} alt="First Pics"/>
            <div>
              <p>
              2
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={Display1} alt="First Pics"/>
            <div>
              <p>
              冷氣暴露室外無論經常使用還是偶爾使用，空調都要進行定期的清洗，定期保養的冷氣能降低室內溫度及延長冷氣壽命.
              </p>
            </div>
          </div>
          <div onContextMenu={(e) => e.preventDefault()}>
            <img src={Display1} alt="First Pics"/>
            <div>
              <p>
              冷氣暴露室外無論經常使用還是偶爾使用，空調都要進行定期的清洗，定期保養的冷氣能降低室內溫度及延長冷氣壽命.
              </p>
            </div>
          </div>
          
        </div>
    )

    
}

export default DisplayFunction;