import React, { useState, useEffect } from 'react';
import { IoIosBuild } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";


interface ContactProps {
}

const Contact: React.FC<ContactProps> = () => {

  return (
    <div className="w-screen relative py-20">
      <div className='bg-cyan-600 w-full flex justify-center items-center flex-col p-4 text-center'>
        <div className='font-black text-5xl'>洽詢專線: 0938-099-062</div>
        <div className='font-black '>市話:02-27591326</div>
        <div className='font-black '>星期一-星期六 9:00am-21:00pm 歡迎來電洽詢保養相關問題</div>
      </div>
    </div>

  );
};

export default Contact;