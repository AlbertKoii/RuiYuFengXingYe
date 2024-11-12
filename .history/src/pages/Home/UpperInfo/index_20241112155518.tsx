import React from 'react';
import { IoIosBuild } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";

const UpperInfo = () => {
  return (
    <div className="w-screen relative">
    <div className="flex flex-wrap bg-blue-600 font-black object-contain p-4">
      <div className="w-full xs:sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 text-center">
        瑞昱豐興業有限公司
      </div>
      <div className="w-full xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 text-center">
        <div className="flex items-center justify-center">
          <IoIosBuild className="text-4xl cursor-pointer mr-2" />
          <div>
            <div className="text-lg">服務範圍:</div>
            <div className="text-base">台灣全省(離島除外)</div>
          </div>
        </div>
      </div>
      <div className="w-full xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 text-center">
        <div className="flex items-center justify-center">
          <AiFillSetting className="text-4xl cursor-pointer mr-2" />
          <div>
            <div className="text-lg">服務時間:</div>
            <div className="text-base">星期一~星期六: 8:00 ~ 20:00</div>
            <div className="text-base">星期天、國定假日公休:</div>
          </div>
        </div>
      </div>
      <div className="w-full xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 text-center">
        <div className="flex items-center justify-center">
          <AiFillPhone className="text-4xl cursor-pointer mr-2" />
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