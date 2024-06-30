import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import backgroundImage from '../../images/Home/Background girl image.png';  

import header from './Header';
import slidebar from './Sidebar';

const HomePage = () => {
  const [customerSatisfaction, setCustomerSatisfaction] = useState(0);
  const [totalActiveUsers, setTotalActiveUsers] = useState(0);
  const [teamMembers, setTeamMembers] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCustomerSatisfaction(prev => (prev < 100 ? prev + 1 : 100));
      setTotalActiveUsers(prev => (prev < 10000 ? prev + 10000 : 10000));
      setTeamMembers(prev => (prev < 50 ? prev + 1 : 50));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen text-white font-inter" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div>
        <header></header>
        <slidebar></slidebar>
      </div>
      <div className="relative z-10">
        <header className="flex items-center justify-between p-5">
          <img src="logo.png" alt="Logo" className="h-10" />
        </header>
        <main className="flex flex-col items-center justify-center px-10 mt-20">
          <div className="text-right ">
            <h1 className="italic font-bold leading-none text-7xl">WHERE IDEAS</h1>
            <h1 className="italic font-bold leading-none text-9xl"> SPARKLE</h1>
            <h1 className="italic font-bold leading-none text-8xl">ONLINE</h1>
            <p className="mt-4 text-lg ">
              Dive into a digital wonderland with Whimsy! Journey through captivating tales,
              unleash your creativity, and connect with fellow adventurers. Explore boundless
              realms where imagination reigns supreme. Join us and discover a world where
              every click sparks new adventures. Let Whimsy be your guide to endless inspiration!
            </p>
            <button className="px-6 py-3 mt-6 bg-purple-600 rounded">Get Started</button>
          </div>
          <div className="flex flex-col items-center mt-10 space-y-8 md:flex-row md:space-y-0 md:space-x-16">
            <div className="text-center">
              <h2 className="font-bold text-8xl">{customerSatisfaction}%</h2>
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
        </main>
        <section className="mt-20 text-center">
          <h2 className="text-5xl italic font-bold">OUR TOP CATEGORIES</h2>
          <div className="mt-4 overflow-hidden">
            <div className="whitespace-nowrap animate-marquee">
              <span className="mx-4 text-4xl font-bold">TUTE COVER</span>
              <span className="mx-4 text-4xl font-bold">FACEBOOK POST</span>
              <span className="mx-4 text-4xl font-bold">HAND BILL</span>
              <span className="mx-4 text-4xl font-bold">PERSONAL DESIGN</span>
            </div>
          </div>
        </section>
        <section className="mt-20 text-center">
        <h2 className="text-5xl italic font-bold">WHY CHOOSE US</h2>
          <ul className="mt-4 space-y-4 text-left list-disc list-inside md:text-center md:space-y-0 md:space-x-4 md:list-none md:flex md:justify-center">
            <li className="p-6 bg-purple-700 rounded">
              <h3 className="text-2xl">5-Hour Delivery Time</h3>
              <p>Get your templates fast with our lightning-quick 5-hour delivery.</p>
            </li>
            <li className="p-6 bg-purple-700 rounded">
              <h3 className="text-2xl">Affordable Prices</h3>
              <p>Enjoy high-quality designs at prices that won't break the bank.</p>
            </li>
            <li className="p-6 bg-purple-700 rounded">
              <h3 className="text-2xl">Wide Selection</h3>
              <p>Choose from a vast array of templates to fit any project or style.</p>
            </li>
            <li className="p-6 bg-purple-700 rounded">
              <h3 className="text-2xl">Easy Customization</h3>
              <p>Effortlessly tailor our templates to meet your specific needs.</p>
            </li>
          </ul>
        </section>
        <footer className="p-6 mt-20 text-center bg-gray-800">
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
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
