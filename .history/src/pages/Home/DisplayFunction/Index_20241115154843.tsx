import React, { useEffect, useState } from "react";
import axios from 'axios';

import Pics01 from '';




interface DisplayFunction {
    
  }

const DisplayFunction: React.FC = () =>{
    
    return(
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-0 px-24">
          <div className="flex flex-col items-center ">
            <img src={`${__BASE_URL__}img/DisplayFunction001.png`} alt="First Pics"/>
            <div className="px-10">
              <p>
              冷氣暴露室外無論經常使用還是偶爾使用，空調都要進行定期的清洗，定期保養的冷氣能降低室內溫度及延長冷氣壽命.
              </p>
            </div>
          </div>
          <div>
            <img src={`${__BASE_URL__}img/DisplayFunction002.png`} alt="First Pics"/>
            <div className="px-10">
              <p>
              由於室外空氣污濁灰塵量多，散熱片附著過多污垢產生散熱不良，致使冷氣效率發揮不出來，耗電力太大，定期保養冷氣能節省30%的電費.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={`${__BASE_URL__}img/DisplayFunction003.png`} alt="First Pics"/>
            <div className="px-10">
              <p>
              清洗空調的過程中，僅清潔過濾網是不夠的，因為仍會有很多的、蟎蟲、花粉和黴菌通過過濾網累積在散熱片上並累積了大量的病菌.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={`${__BASE_URL__}img/DisplayFunction004.png`} alt="First Pics"/>
            <div className="px-10">
              <p>
              空調如果運行了較長時間，空調的濾網以及銅片內部會擠壓一定的灰塵，熱交換器翅片間也會積滿灰塵，，隨著空調開啟，空調出風異味與菸味就會飄散到空氣中.
              </p>
            </div>
          </div>
          
        </div>
    )

    
}

export default DisplayFunction;