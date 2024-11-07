import React, { useEffect, useState } from "react";
import axios from 'axios';
import Display1 from '@/img/DisplayFunction001.png'
import Display2 from '@/img/DisplayFunction002.png'
import Display3 from '@/img/DisplayFunction003.png'
import Display4 from '@/img/DisplayFunction004.png'


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
            <img src={Display2} alt="First Pics"/>
            <div>
              <p>
              由於室外空氣污濁灰塵量多，散熱片附著過多污垢產生散熱不良，致使冷氣效率發揮不出來，耗電力太大，定期保養冷氣能節省30%的電費.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={Display3} alt="First Pics"/>
            <div>
              <p>
              清洗空調的過程中，僅清潔過濾網是不夠的，因為仍會有很多的、蟎蟲、花粉和黴菌通過過濾網累積在散熱片上並累積了大量的病菌.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={Display4} alt="First Pics"/>
            <div>
              <p>
              4
              </p>
            </div>
          </div>
          
        </div>
    )

    
}

export default DisplayFunction;