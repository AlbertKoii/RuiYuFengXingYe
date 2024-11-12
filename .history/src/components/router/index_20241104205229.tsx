import { useRoutes, Navigate, Link } from "react-router-dom"
import React, { ReactElement, Suspense } from "react"
import Home from "@/pages/Home/Index"
import { FaSquareFacebook } from "react-icons/fa6";
import Appointment from "@/pages/Home/Appointment";



function Router() {
    return (
      <div className="App h-screen">
        <nav className='flex  bg-blue-600'>
          <ul className='flex flex-nowrap justify-content '>
            <li className="content-center"><Link to="/"><Home/></Link></li>
            <li className="content-center"><Link to="https://www.facebook.com/profile.php?id=100075747225558">
              <FaSquareFacebook 
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
  
  export default Router;