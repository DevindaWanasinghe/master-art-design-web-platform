import React from 'react';
import NavBarBackground from "../../images/Home/NavBarbackground.png";
import "./../../css/home.css"; 
import { RiUserFill } from "react-icons/ri";
import { FaRegImages } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { HiUserAdd } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
function Login() {
  return (

      <div className='absolute w-[80px] border-l-0 h-Screen'>
      <div className='w-[39px] h-[391px] absolute ml-[10px] top top-[25%]'>
          
          <NavLink to='/account'><div className='bg-white w-[40px] h-[40px] rounded-[30px] mt-4 flex  items-center justify-center icon'><RiUserFill size={30} className='cursor-pointer icon' /></div></NavLink>    
          <NavLink to='/template'><div className='bg-white w-[40px] h-[40px] rounded-[30px] mt-4 flex  items-center justify-center icon'><FaRegImages size={30} className='cursor-pointer icon' /></div></NavLink>
          <NavLink to='/'><div className='bg-white w-[40px] h-[40px] rounded-[30px] mt-4 flex  items-center justify-center icon'><IoHome size={30} className='cursor-pointer icon' /></div></NavLink>
          <NavLink to='/terms'><div className='bg-white w-[40px] h-[40px] rounded-[30px] mt-4 flex  items-center justify-center icon'><HiUserAdd size={30} className='cursor-pointer icon' /></div></NavLink>
          <NavLink to='/about'><div className='bg-white w-[40px] h-[40px] rounded-[30px] mt-4 flex  items-center justify-center icon'><AiFillSetting size={30} className='cursor-pointer icon' /></div></NavLink>
        </div>
        <img  className= 'h-auto 'src={NavBarBackground} alt='nav img'/>
      </div>
     
  )
}
export default Login