import React, { useState, useEffect } from 'react';
import { IoIosBuild } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";


interface UpperInfoProps {
}

const UpperInfo: React.FC<UpperInfoProps> = () => {

  return (
    <div className="w-screen relative">
      <div className='grid grid-flow-col bg-blue-600 font-black object-contain sm:grid-cols-4 '>
        <div className='  place-self-center text-base whitespace-nowrap object-contain w-24'>
          瑞昱豐興業有限公司
        </div>
        <div className='  place-self-center text-base whitespace-nowrap object-contain w-24'>
          <div className='grid grid-cols-2 '>
            <IoIosBuild
            className='text-4xl cursor-pointer place-self-center box-border'
            />
            <div>
              <div className=' text-lg  ml-0 '>服務範圍:</div>
              <div className='text-base ml-2'>台灣全省(離島除外)</div>
            </div>
          </div>
        </div>
        <div className='place-self-center text-sm whitespace-nowrap object-contain w-24'>
            <div className='grid grid-cols-2'>
              <AiFillSetting
              className='text-4xl cursor-pointer place-self-center box-border'
              />
            <div>
              <div className='text-lg'>服務時間:</div>
              <div className='text-base'>星期一~星期六: 8:00 ~ 20:00</div>
              <div  className='text-base'>星期天、國定假日公休:</div>
              </div>
            </div>
        </div>  
        <div className='place-self-center text-sm whitespace-nowrap object-contain w-24'>
            <div className='grid grid-cols-2'>
                <AiFillPhone
                className='text-4xl cursor-pointer place-self-center box-border'
                />
              <div>
                  <div className='text-base'>聯絡資訊:</div>
                  <div>0938-099-062</div>
              </div>
            </div>
        </div>   
      </div>
    </div>
  );
};

export default UpperInfo;