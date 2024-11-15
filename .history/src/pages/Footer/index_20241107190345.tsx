import React, { useState, useEffect } from 'react';



interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {

  return (
    <div className="w-screen h-fit relative">
      <ImageSlider/>
      <UpperInfo/>
      <DisplayFunctionProps/>
      <Contact/>
      <AirConditionalType/>
      <UserFeedBack id={''} UserName={''} Content={''} Date={0}/>
    </div>

  );
};

export default Footer;