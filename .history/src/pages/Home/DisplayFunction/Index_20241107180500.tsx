import React, { useEffect, useState } from "react";
import axios from 'axios';
import Display1 from '@/img/DisplayFunction001.png'

interface DisplayFunction {
    
  }

const DisplayFunction: React.FC = () =>{
    
    return(
        <div>
          <img src={Display1} alt="First Pics"/>
          
        </div>
    )

    
}

export default DisplayFunction;