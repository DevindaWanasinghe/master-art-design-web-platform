import React from 'react'
import Whatsapp from '../../images/Fotter/whatsapp.png';
import Instagram from '../../images/Fotter/instagram.png';
import Facebook from '../../images/Fotter/facebook.png';
import Call from '../../images/Fotter/call.png';
import Logo from '../../images/Home/LOGO 1.png';
import { Link } from 'react-router-dom';
 
function Footer() {
  return (
    <div className=''>
        <div>
            <img className="float-right pr-[50px] mt-[30px] " src={Logo} alt="" />
            <p className=" float-end mt-[250px] mr-[-300px]">&copy; 2024 Company. All Rights Reserved.</p>
        </div>
        <footer className="p-16 pl-[80px] mt-[100px] mb-[-30px] text-left bg-[#795a8b] ">
          
          <div className='flex flex-row '>
              <div className="flex flex-col mb-4 space-x-4 justify-normal">
                
                <input type="email" placeholder="Email" className=" rounded-[14px]  w-[364px] h-[58px] ml-4 mb-8 pl-2 bg-transparent border-2 placeholder:text-white placeholder:text-[18px]" />
                <button className=" backdrop-blur-xl border-2 rounded-[138px] w-[195px] h-[38px] mb-8 bg-[#b590cb] border-[#7e5794]"><p className=" text-white text-[18px]">Subscribe</p></button>
                    <div className="flex flex-row justify-start mb-8 pl-[10px] space-x-4">
                      <a href="#"><img src={Facebook} alt="Facebook" className="h-6 " /></a>
                      <a href="#"><img src={Instagram} alt="Instagram" className="h-6" /></a>
                      <a href="#"><img src={Whatsapp} alt="WhatsApp" className="h-6" /></a>
                      <a href="#"><img src={Call} alt="Contact" className="h-6" /></a>
                    </div>
              </div>
              
              <div className="flex flex-col space-x-4 space-y-[12px] ml-[200px]">
                <p className="mb-4 ml-[15px] ">Site Map</p>
                <Link to='/'> <a className=" hover:underline">Home</a> </Link>
                <Link to='/template'> <a className=" hover:underline">Template</a> </Link>
                <Link to='/account'><a className=" hover:underline">Account</a></Link>
                <Link to='/terms'> <a className="hover:underline">Terms & Conditions</a> </Link>
              </div>
              
          </div>
        </footer>
    </div>
  )
}

export default Footer