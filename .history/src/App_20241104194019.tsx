import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './index.css';
import HomeIcon from './icons/HomeIcons';
import Appointment from './Layout/Home/Page/Appointment';
import { AiFillFacebook } from "react-icons/ai";

const Home = lazy(() => import('./Layout/Home/index'));
// const About = lazy(() => import('./Layout/About'));
// const Team = lazy(() => import('./Layout/Team'));

function App() {
  return (
    <div className="App h-screen">
      <nav className='flex  bg-blue-600'>
        <ul className='flex flex-nowrap justify-content '>
          <li className="content-center"><Link to="/"><HomeIcon/></Link></li>
          <li className="content-center"><Link to="https://www.facebook.com/profile.php?id=100075747225558">
            <AiFillFacebook 
            size={30} 
            color="#303ebf"/>
            </Link>
          </li>
          {/* 做預約功能連結 */}
          <li className=" content-center ml-auto"><Link to="/"><Appointment/></Link></li>
          {/* 預留會員註冊與登錄 */}
          {/* <li><Link to="/Login"><LoginIcon/></Link></li> */}
        </ul>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;