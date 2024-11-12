import React from 'react';
import { IoIosBuild } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";

const UpperInfo = () => {
  return (
    <div className="w-screen relative">
    <div className="grid grid-flow-col bg-blue-600 font-black object-contain p-4">
      <div className="place-self-center text-base whitespace-nowrap sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7">
        瑞昱豐興業有限公司
      </div>
      <div className="place-self-center text-base whitespace-nowrap sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7">
        <div className="grid grid-cols-2 gap-2">
          <IoIosBuild className="text-4xl cursor-pointer place-self-center" />
          <div>
            <div className="text-lg">服務範圍:</div>
            <div className="text-base">台灣全省(離島除外)</div>
          </div>
        </div>
      </div>
      <div className="place-self-center text-sm whitespace-nowrap sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7">
        <div className="grid grid-cols-2 gap-2">
          <AiFillSetting className="text-4xl cursor-pointer place-self-center" />
          <div>
            <div className="text-lg">服務時間:</div>
            <div className="text-base">星期一~星期六: 8:00 ~ 20:00</div>
            <div className="text-base">星期天、國定假日公休:</div>
          </div>
        </div>
      </div>
      <div className="place-self-center text-sm whitespace-nowrap sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7">
        <div className="grid grid-cols-2 gap-2">
          <AiFillPhone className="text-4xl cursor-pointer place-self-center" />
          <div>
            <div className="text-base">聯絡資訊:</div>
            <div>0938-099-062</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default UpperInfo;