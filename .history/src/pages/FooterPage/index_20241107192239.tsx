import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


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
            <div>與我們聯絡</div>
            <div>與我們聯絡
            公司行號各大單位機關,營業場所歡迎來電詢問保養相關問題,也歡迎洽詢年度保養合約相關事項!</div>
          </div>
          <div>
            <div>歡迎來電洽詢</div>
            
          
          </div>
        </div>
     
    </div>

  );
};

export default Footer;