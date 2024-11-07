import React, { useState, useEffect } from 'react';



interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {

  return (
    <div className="w-screen h-60 relative bg-blue-900 text-white flex justify-center items-center">
        <div className='grid grid-cols-3 gap-4'>
          <div>
            LOGO & PICS 
          </div>
          <div>
            LOGO & PICS 
          </div>
        </div>
     
    </div>

  );
};

export default Footer;