import React from 'react'
import Search01 from "../../images/Home/search.png";
import Logo01 from "../../images/Home/LOGO 1.png";
import { NavLink } from 'react-router-dom';
import '../../css/login-register.css';

function Header() {
  return (

    <div className=''>
      <div className='absolute inline w-screen'>
        <div><img src={Logo01} alt='logo' className='w-[75px] h-[58px] ml-[85px] mt-2 float-left'></img></div>

        <div className='w-[667px] h-[50px] float-right flex mt-4'>
          <div className='w-[288px] h-[38px] flex border-white border-[2px] rounded-[188px] mr-[23px]'>
            <input type='text' placeholder='Search...' className='w-[260px] h-[38px]  bg-transparent  text-white  placeholder-white  hover:from-[#e9d8fd] hover:to-[#9f7aea] focus:outline-0 p-5 pt-4'></input>
            <div className='w-[26px] h-[38px]'> 
              <button className='w-[22px] h-[22px] hover:bg-inherit mt-1'><img className='mt-[2px]  over:from-[#e9d8fd] ' src={Search01} alt='searching...' /></button>
            </div>
          </div>
          <NavLink to='/login'><button className="w-[152px] h-[38px] backdrop-blur-lg  rounded-[100px] border-white border-[2px] bg-gradient-to-r from-[#9573A9] to-[#D3A4F0]  hover:from-[#e9d8fd] hover:to-[#9f7aea] text-2xl text-white hover:border-inherit header-buttons mr-6"><p className='mt-[-4px] cursor-pointer '>sign in</p></button></NavLink>
          <NavLink to='/register'><button className="w-[152px] h-[38px] backdrop-blur-lg  rounded-[100px] border-white border-[2px] bg-gradient-to-r from-[#9573A9] to-[#D3A4F0]  hover:from-[#e9d8fd] hover:to-[#9f7aea] text-2xl text-white hover:border-inherit header-buttons "><p className='mt-[-4px] cursor-pointer'>sign up</p></button></NavLink>
        </div>
      </div>
  </div>
  )
};
export default Header;