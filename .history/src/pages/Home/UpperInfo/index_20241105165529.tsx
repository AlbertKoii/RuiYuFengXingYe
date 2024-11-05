import React, { useState, useEffect } from 'react';
import { IoIosBuild } from "react-icons/io";


interface UpperInfoProps {
}

const UpperInfo: React.FC<UpperInfoProps> = () => {

  return (
    <div className="w-screen relative">
      <div className='inline-grid grid-cols-3 gap-4  bg-blue-600 h-full font-black'>
        <div>Logo & pics</div>
        <div className=' grid grid-flow-col place-self-center text-base whitespace-nowrap'>
            <IoIosBuild
            className='grid grid-flow-col text-4xl cursor-pointer mr-2 place-self-center'
            
            />
            <div className='text-lg'>服務範圍:</div>
            <div className='text-base place-self-center ml-2'>台灣全省(離島除外)</div>
        </div>
        <div className='place-self-center text-sm whitespace-nowrap'>
            <div className='text-lg'>服務時間:</div>
            <div className='text-base'>星期一~星期六: 8:00 ~ 20:00</div>
            <div  className='text-base'>星期天、國定假日公休:</div>
        </div>
        <div className='place-self-center text-sm whitespace-nowrap'>
            <div className='text-base'>聯絡資訊:</div>
            <div>0938-099-062</div>
        </div>
      </div>
    </div>

  );
};

export default UpperInfo;