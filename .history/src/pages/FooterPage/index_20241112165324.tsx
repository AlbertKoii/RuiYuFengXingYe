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
    <div className="w-screen h-fit p-8 relative bg-blue-900 text-white flex justify-center items-center">
        <div className='grid grid-cols-3 gap-4 flex justify-center xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3'>
          <div>
            LOGO & PICS 
          </div>
          <div>
            <div>與我們聯絡</div>
            <div>公司行號各大單位機關,營業場所歡迎來電詢問保養相關問題,也歡迎洽詢年度保養合約相關事項!</div>
          </div>
          <div className=''>
            <div>歡迎來電洽詢</div>
            <div>email: xxx@gamil.com</div>
            <div>歡迎來電洽詢</div>
            <div>0938-099-062</div>
            <div>
              <div>周一-周六: 9:00am-9:00pm</div>
              <div>星期日 國定假日公休</div>
            </div>
          </div>
        </div>
     
    </div>

  );
};

export default Footer;