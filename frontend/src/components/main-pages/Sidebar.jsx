import React from 'react';
import NavBarBackground from "../../images/Home/NavBarbackground.png";
import "./../../css/home.css"; 
import { RiUserFill } from "react-icons/ri";
import { FaRegImages } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { HiUserAdd } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
//import "../../css/sidebar.css"
function Sidebar() {
  return (

      <div className=' w-[80px] border-l-0 h-Screen fixed mt-0'>
      <div className='w-[39px] h-[391px] absolute ml-[15px] top-[21%] mt-[0px]'>
          
          <NavLink to='/account'><div className='bg-white w-[40px] h-[40px] rounded-[30px] mt-4 flex  items-center justify-center icon text-black mb-[55px]'><RiUserFill size={30} className='cursor-pointer icon' /></div></NavLink>    
          <NavLink to='/template'><div className='bg-white w-[40px] h-[40px] rounded-[30px] mt-4 flex  items-center justify-center icon text-black mb-[55px]'><FaRegImages size={30} className='cursor-pointer icon' /></div></NavLink>
          <NavLink to='/'><div className='bg-white w-[40px] h-[40px] rounded-[30px] mt-4 flex  items-center justify-center icon text-black mb-[55px]'><IoHome size={30} className='cursor-pointer icon' /></div></NavLink>
          <NavLink to='/terms'><div className='bg-white w-[40px] h-[40px] rounded-[30px] mt-4 flex  items-center justify-center icon text-black mb-[55px]'><HiUserAdd size={30} className='cursor-pointer icon' /></div></NavLink>
          <NavLink to='/about'><div className='bg-white w-[40px] h-[40px] rounded-[30px] mt-4 flex  items-center justify-center icon text-black mb-[55px]'><AiFillSetting size={30} className='cursor-pointer icon' /></div></NavLink>
        </div>
        <img  className= 'h-auto 'src={NavBarBackground} alt='nav img'/>
      </div>
     
  )
}
export default Sidebar