import { useRoutes, Navigate, Link, Routes, Route } from "react-router-dom"
import React, { lazy, ReactElement, Suspense } from "react"
import { FaSquareFacebook } from "react-icons/fa6";
import Appointment from "@/pages/Home/Appointment";
import { FaHome } from "react-icons/fa";
import { Footer } from "react-day-picker";
import FooterPage from "./"



const Home = lazy(() => import('@/pages/Home/Index'));

function RouterMap() {
    return (
      <div className="App h-screen">
        <nav className='flex  bg-blue-900 h-16'>
          <ul className='flex flex-nowrap justify-content'>
            <li className="content-center ml-4"><Link to="/">
            <FaHome 
             style={{ fontSize: '2rem' , color:"#e8e8fa"}}
            />
            </Link></li>
            <li className="content-center ml-4"><Link to="https://www.facebook.com/profile.php?id=100075747225558">
              <FaSquareFacebook
              size={30} 
              color="#e8e8fa"/>
              </Link>
            </li>
            {/* 做預約功能連結 */}
            <li className=" content-center ml-4"><Link to="/">
            <Appointment/>
            </Link></li>
            {/* 預留會員註冊與登錄 */}
            {/* <li><Link to="/Login"><LoginIcon/></Link></li> */}
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
        <footer>
          <FooterPage/>
        </footer>
      </div>
    );
  }
  
  export default RouterMap;