import { useRoutes, Navigate, Link, Routes, Route } from "react-router-dom"
import React, { lazy, ReactElement, Suspense } from "react"
import { FaSquareFacebook } from "react-icons/fa6";
import Appointment from "@/pages/Home/Appointment";



interface HomeIconProps {
  width?: string; // 图标宽度
  height?: string; // 图标高度
  fill?: string; // 填充颜色
  stroke?: string; // 边框颜色
  strokeWidth?: number; // 边框宽度
  
}

const HomeIcon: React.FC<HomeIconProps> = ({
  width = '1.5rem',
  height = '1.5rem',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = 2,
}) =>{
  
  
  return(
      <div>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
      </div>    
  )
}


const Home = lazy(() => import('@/pages/Home/Index'));

function RouterMap() {
    return (
      <div className="App h-screen">
        <nav className='flex  bg-blue-600'>
          <ul className='flex flex-nowrap justify-content '>
            <li className="content-center"><Link to="/">{HomeIcon()}</Link></li>
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
  
  export default RouterMap;