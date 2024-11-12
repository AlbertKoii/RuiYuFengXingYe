import React, { useState, useEffect } from 'react';
import { IoIosBuild } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";


interface ContactProps {
}

const Contact: React.FC<ContactProps> = () => {

  return (
    <div className="w-screen relative py-20">
      <div className='bg-cyan-600 justify-center'>
        <div>免付費電話:0800-011-104</p>
        <p>市話:02-27591326</p>
        <p>星期一-星期六 9:00am-21:00pm 歡迎來電洽詢保養相關問題</p>
      </div>
    </div>

  );
};

export default Contact;