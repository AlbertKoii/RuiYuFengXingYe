import React, { useState, useEffect } from 'react';



interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {

  return (
    <div className="w-screen h-60 relative bg-blue-900 text-white flex justify-center items-center">
        <div className='grid grid-rows-1 col-span-2'>
          <div>
            Hi 你好嗎?
          </div>
          <div>
            Hi 你好嗎?
          </div>
        </div>
     
    </div>

  );
};

export default Footer;