import React from 'react';
import Bimage1 from "../../images/Home/Background girl image.png";
import Bimage2 from "../../images/Home/Background black-2.png";
import Bimage3 from "../../images/Home/Background black-1.png";
import Arrow01 from "../../images/Home/Arrow.png";
import Search01 from "../../images/Home/search.png";
import Logo01 from "../../images/Home/LOGO 1.png";
import NavBarBackground from "../../images/Home/NavBarbackground.png";

function Login() {
  return (

    
    <div className="relative overflow-hidden bg-center bg-cover bg-login-bg">
      
      <div className='absolute w-[80px] min-h-screen backdrop-blur-lg border-l-0'>
        <img src={NavBarBackground} alt='nav img'/>
      </div>

      <div className=''>
       
      </div>
      

      <div className='w-1/4 h-[574px] rounded-[33px] border-[2px] border-white backdrop-blur-lg mt-[77px] block absolute left-1/2'>
        <p className=' text-white text-[48px] text-center mt-[15px]'>Welcome!</p>
        <input className='w-5/6 h-[54px] bg-transparent border-[1px] border-white rounded-[14px] mt-[15px] ml-[24px]  text-white placeholder-white placeholder-py-4'placeholder='User Name' type='text' name='UserName'></input>
        <input className='w-5/6 h-[54px] bg-transparent border-[1px] border-white rounded-[14px] mt-[15px] ml-[24px]  text-white  placeholder-white'placeholder='Email' type='email' name='Email'></input>
        <input className='w-5/6 h-[54px] bg-transparent border-[1px] border-white rounded-[14px] mt-[15px] ml-[24px]  text-white  placeholder-white'placeholder='Contact No' type='text' name='Phone'></input>
        <input className='w-5/6 h-[54px] bg-transparent border-[1px] border-white rounded-[14px] mt-[15px] ml-[24px]  text-white  placeholder-white'placeholder='Password' type='password' name='Password'></input>
        <input className='w-5/6 h-[54px] bg-transparent border-[1px] border-white rounded-[14px] mt-[15px] ml-[24px]  text-white  placeholder-white'placeholder='Password' type='password' name='Password'></input>
        <button className='w-5/6 h-[54px] bg-#9573A9 border-[1px] rounded-[14px] mt-[30px] ml-[24px] text-white bg-custom-purple font-bold text-[24px] border-none' type='submit' >Continue</button>
      </div>

    </div>
  )
}
export default Login