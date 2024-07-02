import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
//import backgroundImage from '../../images/Home/Background girl image.png';  
import SideBar from "../main-pages/Sidebar"
import Header from "../main-pages/Header";
import Bgimage from '../common/Homebg';
import Footer from '../common/Footer';

import Logo from '../../images/Home/LOGO 1.png';

const HomePage = () => {
  const [customerSatisfaction, setCustomerSatisfaction] = useState(0);
  const [totalActiveUsers, setTotalActiveUsers] = useState(0);
  const [teamMembers, setTeamMembers] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCustomerSatisfaction(prev => (prev < 100 ? prev + 1 : 100));
      setTotalActiveUsers(prev => (prev < 1000000 ? prev + 10000 : 1000000));
      setTeamMembers(prev => (prev < 50 ? prev + 1 : 50));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen text-white font-inter" 
      // style={{
      //   backgroundImage: `url(${backgroundImage})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundAttachment: 'fixed',
      // }}
      > 
       <Bgimage/>
     
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      {/* <div className="pb-[0.2px]"></div> */}

      <div className="relative z-10">
        <header className="flex items-center justify-between p-0">
          {/* Header Content */}
        </header>
        <div className='pt-0 '>
          <div className=''><Header></Header></div>
        </div>
        <div>
          
        </div>
        <main className="flex flex-col px-10 mt-[80px]">
          <div className="text-right">
            <h1 className="italic font-bold ng-none text-7xl ">WHERE IDEAS</h1>
            <h1 className="italic font-extrabold ng-none text-9xl"> SPARKLE</h1>
            <h1 className="italic font-bold leading-none text-8xl">ONLINE</h1>
            <p className="mt-4 mr-2 text-2xl">
              Dive into a digital wonderland with Whimsy! Journey through captivating tales,<br/>
              unleash your creativity, and connect with fellow adventurers. Explore boundless<br/>
              realms where imagination reigns supreme. Join us and discover a world where<br/>
              every click sparks new adventures.   Let Whimsy be your to endless inspiration!<br/>
            </p>
            <div class="flex flex-col ">
                  <div>
                    <img className="float-right backdrop-blur-sm" src={Logo} alt="logo" />
                  </div>
                  <div>
                    <button className="px-10 py-3 bg-gradient-to-r from-[#9573A9] to-[#D3A4F0] rounded-[40px] text-2xl border-[3px] bg-opacity-75 hover:from-[#e9d8fd] hover:to-[#9f7aea]">GET STARTED</button>
                  </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-16">
              <div className="text-center">
                <h2 className="font-extrabold text-8xl">{customerSatisfaction}%</h2>
                <p className="text-xl">customer satisfaction</p>
              </div>
              <div className="text-center">
                <h2 className="font-bold text-8xl">{totalActiveUsers.toLocaleString()}+</h2>
                <p className="text-xl">total active users</p>
              </div>
              <div className="text-center">
                <h2 className="font-bold text-8xl">{teamMembers}</h2>
                <p className="text-xl">team members</p>
              </div>
            </div>
          </div>
        </main>
        <section className="mt-20 text-center">
          <h2 className="text-5xl italic font-extrabold text-[#9573A9]">OUR TOP CATEGORIES</h2>
          <div className="mt-4 overflow-hidden">
            <div className="whitespace-nowrap animate-marquee">
              <span className="mx-4 text-4xl font-bold">TUTE COVER</span>
              <span className="mx-4 text-4xl font-bold">FACEBOOK POST</span>
              <span className="mx-4 text-4xl font-bold">HAND BILL</span>
              <span className="mx-4 text-4xl font-bold">PERSONAL DESIGN</span>
            </div>
          </div>
          <div><SideBar/></div> 
        </section>
        <section className="mt-20 text-center">
          <h2 className="text-5xl italic font-extrabold text-[#9573A9]">WHY CHOOSE US</h2>
          <ul className="mt-4 ml-[80px] mr-[20px] space-y-4 text-left list-disc list-inside bg-opacity-75 md:text-center md:space-y-0 md:space-x-4 md:list-none md:flex md:justify-center">
            <li className="p-6 pt-2 h-[100px] rounded-[100px] border-white border-[2px] bg-opacity-75 bg-gradient-to-r from-[#9573A9] to-[#D3A4F0]  hover:from-[#e9d8fd] hover:to-[#9f7aea]" >
              <h3 className="text-2xl">5-Hour Delivery Time</h3>
              <p>Get your templates fast with our lightning-quick 5-hour delivery.</p>
            </li>
            <li className="p-6 pt-2 h-[100px] rounded-[100px] border-white border-[2px] bg-gradient-to-r from-[#9573A9] to-[#D3A4F0]  hover:from-[#e9d8fd] hover:to-[#9f7aea] " >
              <h3 className="text-2xl">Affordable Prices</h3>
              <p>Enjoy high-quality designs at prices that won't break the bank.</p>
            </li>
            <li className="p-6 pt-2 h-[100px] rounded-[100px] border-white border-[2px] bg-gradient-to-r from-[#9573A9] to-[#D3A4F0]  hover:from-[#e9d8fd] hover:to-[#9f7aea] " >
              <h3 className="text-2xl">Wide Selection</h3>
              <p>Choose from a vast array of templates to fit any project or style.</p>
            </li>
            <li className="p-6 pt-2 h-[100px] rounded-[100px] border-white border-[2px] bg-gradient-to-r from-[#9573A9] to-[#D3A4F0]  hover:from-[#e9d8fd] hover:to-[#9f7aea] " >
              <h3 className="text-2xl">Easy Customization</h3>
              <p >Effortlessly tailor our templates to meet your specific needs.</p>
            </li>
          </ul>
        </section>
        <Footer/>
        {/* <footer className="p-6 mt-20 text-center bg-gray-800">
          <div className="flex justify-center mb-4 space-x-4">
            <input type="email" placeholder="Email" className="px-4 py-2 bg-gray-700 rounded" />
            <button className="px-4 py-2 bg-purple-600 rounded">Subscribe</button>
          </div>
          <div className="flex justify-center mb-4 space-x-4">
            <a href="#"><img src="facebook-icon.png" alt="Facebook" className="h-6" /></a>
            <a href="#"><img src="instagram-icon.png" alt="Instagram" className="h-6" /></a>
            <a href="#"><img src="whatsapp-icon.png" alt="WhatsApp" className="h-6" /></a>
            <a href="#"><img src="contact-icon.png" alt="Contact" className="h-6" /></a>
          </div>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Template</a>
            <a href="#" className="hover:underline">Account</a>
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Notifications</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </nav>
          <p className="mt-4">&copy; 2024 Nadine Coelho. All Rights Reserved.</p>
        </footer> */}
      </div>
    </div>
  );
};

export default HomePage;
