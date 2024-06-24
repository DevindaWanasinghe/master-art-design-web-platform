import React from 'react';
import Search01 from "../../images/Home/search.png";
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

    
    <div className="relative min-h-screen overflow-hidden bg-center bg-cover bg-login-bg">
      
      <div className='absolute w-[80px] backdrop-blur-lg border-l-0 h-full'>
        <div className='w-[39px] h-[391px] absolute top-1/4 ml-[10px]'>
          <NavLink to='act'><div className='bg-white w-[40px] h-[40px] rounded-[30px] mt-4 flex  items-center justify-center'><RiUserFill size={30} className='cursor-pointer fill-custom-purple hover:fill-blue-700' /></div></NavLink>    
          <NavLink to='nbbn'><div className='bg-white w-[40px] h-[40px] rounded-[30px] mt-4 flex  items-center justify-center'><FaRegImages size={30} className='cursor-pointer fill-custom-purple hover:fill-blue-700' /></div></NavLink>
          <NavLink to='mnb'><div className='bg-white w-[40px] h-[40px] rounded-[30px] mt-4 flex  items-center justify-center'><IoHome size={30} className='cursor-pointer fill-custom-purple hover:fill-blue-700' /></div></NavLink>
          <NavLink to='msnb'><div className='bg-white w-[40px] h-[40px] rounded-[30px] mt-4 flex  items-center justify-center'><HiUserAdd size={30} className='cursor-pointer fill-custom-purple hover:fill-blue-700' /></div></NavLink>
          <NavLink to=',jn'><div className='bg-white w-[40px] h-[40px] rounded-[30px] mt-4 flex  items-center justify-center'><AiFillSetting size={30} className='cursor-pointer fill-custom-purple hover:fill-blue-700' /></div></NavLink>
        </div>
        <img  className= 'h-auto 'src={NavBarBackground} alt='nav img'/>
      </div>

      <div className='w-[667px] h-[50px] float-right flex mt-4'>
        <div className='w-[288px] h-[38px] flex border-white border-[2px] rounded-[188px] mr-[23px]'>
          <input type='text' placeholder='Search...' className='w-[260px] h-[38px]  bg-transparent  text-white  placeholder-white focus:outline-0 p-5'></input>
          <div className='w-[26px] h-[38px]'> 
            <button className='w-[22px] h-[22px] hover:bg-inherit mt-1'><img className='mt-[4px]  hover:fill-blue-700' src={Search01} alt='searching...' /></button>
          </div>
        </div>
        <boutton className="w-[152px] h-[38px] backdrop-blur-lg  border-[1px] text-white text-center rounded-[188px] border-custom-purple ml-[17px] hover:bg-blue-700 hover:border-inherit"><p className='mt-[4px] cursor-pointer'>log in</p></boutton>
        <boutton className="w-[152px] h-[38px] backdrop-blur-lg  border-[1px] text-white text-center rounded-[188px] border-custom-purple ml-[17px] hover:bg-blue-700 hover:border-inherit"><p className='mt-[4px] cursor-pointer'>sign in</p></boutton>
      </div>
      

      <div className='w-1/4 h-[500px] rounded-[33px] border-[2px] border-white backdrop-blur-xl mt-[77px] block absolute left-2/3'>
        <p className=' text-white text-[48px] text-center mt-[15px]'>Welcome!</p>
        <input className='w-5/6 h-[45px] bg-transparent border-[1px] border-white rounded-[14px] mt-[15px]   text-white placeholder-white focus:outline-0  p-4 lg:ml-[25px] md:ml-[15px]'placeholder='User Name' type='text' name='UserName'></input>
        <input className='w-5/6 h-[45px] bg-transparent border-[1px] border-white rounded-[14px] mt-[15px]  text-white  placeholder-white focus:outline-0 p-4 lg:ml-[25px] md:ml-[15px]'placeholder='Email' type='email' name='Email'></input>
        <input className='w-5/6 h-[45px] bg-transparent border-[1px] border-white rounded-[14px] mt-[15px]  text-white  placeholder-white focus:outline-0 p-4 lg:ml-[25px] md:ml-[15px]'placeholder='Contact No' type='text' name='Phone'></input>
        <input className='w-5/6 h-[45px] bg-transparent border-[1px] border-white rounded-[14px] mt-[15px]  text-white  placeholder-white focus:outline-0 p-4 lg:ml-[25px] md:ml-[15px]'placeholder='Password' type='password' name='Password'></input>
        <input className='w-5/6 h-[45px] bg-transparent border-[1px] border-white rounded-[14px] mt-[15px]  text-white  placeholder-white focus:outline-0 p-4 lg:ml-[25px] md:ml-[15px]'placeholder='Password' type='password' name='Password'></input>
        <button className='w-5/6 h-[45px] bg-#9573A9 border-[1px] rounded-[14px] mt-[30px] ml-[24px] text-white bg-custom-purple font-bold text-[24px] border-none  hover:bg-blue-700 ' type='submit' ><p className='pb-2 '>Continue</p></button>
      </div>

    </div>
  )
}
export default Login