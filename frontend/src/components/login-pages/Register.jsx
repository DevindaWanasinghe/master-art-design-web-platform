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

    
    <div className="relative min-h-screen overflow-hidden bg-center bg-cover bg-login-bg">
      
      <div className='absolute w-[80px] h-auto backdrop-blur-lg border-l-0'>
        <img  className= 'h-auto 'src={NavBarBackground} alt='nav img'/>
      </div>

      <div className='w-[667px] h-[50px] float-right flex'>
        <div className='w-[288px] h-[38px] flex border-white border-[2px] rounded-[188px] mr-[23px]'>
          <input type='text' placeholder='Search...' className='w-[260px] h-[38px]  bg-transparent  text-white  placeholder-white '></input>
          <div className='w-[26px] h-[38px]'>
            <button className='w-[22px] h-[22px]'><img className='mt-[6px]' src={Search01} alt='searching...' /></button>
          </div>
        </div>
        <boutton className="w-[152px] h-[38px] backdrop-blur-lg  border-[1px] text-white text-center rounded-[188px] border-custom-purple ml-[17px]"><p className='mt-[4px]'>log in</p></boutton>
        <boutton className="w-[152px] h-[38px] backdrop-blur-lg  border-[1px] text-white text-center rounded-[188px] border-custom-purple ml-[17px]"><p className='mt-[4px]'>sign in</p></boutton>
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