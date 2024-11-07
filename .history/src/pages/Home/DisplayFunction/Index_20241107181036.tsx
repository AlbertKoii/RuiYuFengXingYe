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
        <div>
          <div onContextMenu={(e) => e.preventDefault()}>
          <img src={Display1} alt="First Pics"/>
          <div></div>
          </div>
          
        </div>
    )

    
}

export default DisplayFunction;