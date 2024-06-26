import React from 'react';
import Sidebar from "../main-pages/Sidebar";
import Header from "../main-pages/Header";
import "./../../css/home.css"; 


function Login() {
  return (

    
    <div className="relative min-h-screen overflow-hidden bg-center bg-cover bg-login-bg">
      <div><Sidebar></Sidebar></div>
      <div><Header></Header></div>
      
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