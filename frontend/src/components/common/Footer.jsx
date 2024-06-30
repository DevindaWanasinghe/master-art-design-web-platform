import React from 'react'
import Whatsapp from '../../images/Fotter/whatsapp.png';
import Instagram from '../../images/Fotter/instagram.png';
import Facebook from '../../images/Fotter/facebook.png';
import Call from '../../images/Fotter/call.png';
import Logo from '../../images/Home/LOGO 1.png';
import { Link } from 'react-router-dom';
 
function Footer() {
  return (
    <div>
            <div>
          <img className="float-right pl-[30px]" src={Logo} alt="" />
          </div>
      <footer className="p-16 mt-20 mb-0 text-left bg-gray-800">

          <div className="flex mb-4 space-x-4 justify-normal">
            <input type="email" placeholder="Email" className="px-4 py-2 bg-gray-700 rounded" />
            <button className="px-4 py-2 bg-purple-600 rounded">Subscribe</button>
          </div>
          <div className="flex justify-start mb-8 space-x-4">
            <a href="#"><img src={Facebook} alt="Facebook" className="h-6" /></a>
            <a href="#"><img src={Instagram} alt="Instagram" className="h-6" /></a>
            <a href="#"><img src={Whatsapp} alt="WhatsApp" className="h-6" /></a>
            <a href="#"><img src={Call} alt="Contact" className="h-6" /></a>
          </div>
          <div className="space-x-4">
            <Link to='/'> <a className="hover:underline">Home</a> </Link>
            <Link to='/template'> <a className="hover:underline">Template</a> </Link>
            <Link to='/account'><a className="hover:underline">Account</a></Link>
            <Link to='/terms'> <a className="hover:underline">Terms & Conditions</a> </Link>
          </div>
          <p className="mt-4">&copy; 2024 Nadine Coelho. All Rights Reserved.</p>
        </footer>
    </div>
  )
}

export default Footer