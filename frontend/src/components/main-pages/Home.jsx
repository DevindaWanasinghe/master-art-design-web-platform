import React from "react";
import Bimage1 from "../../images/Home/Background girl image.png";
import Arrow01 from "../../images/Home/Arrow.png";
import Search01 from "../../images/Home/search.png";
import Logo01 from "../../images/Home/LOGO 1.png";
import NavBarBackground from "../../images/Home/NavBarbackground.png";

import "./../../css/home.css"; // Import custom CSS

function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img 
        src={Bimage1}
        alt="Overlay image1"
        className="fixed absolute inset-0 z-0 object-cover w-full h-full"
      />
      
      {/* Text Overlay */}
      <div className="absolute text02C" style={{ left: "625.02px", top: "183.62px" }}>
        <h1 className="text01C">WHERE, IDEAS</h1>
      </div>
      <div className="absolute text02C" style={{ left: "625.02px", top: "213.62px" }}>
        <h1 className="text02C">SPARKLE</h1>
      </div>
      <div className="absolute text02C" style={{ left: "625.02px", top: "243.62px" }}>
        <h1 className="text03C">ONLINE</h1>
      </div>
      <div className="absolute text02C" style={{ left: "625.02px", top: "283.62px" }}>
        <p className="text04C">
          Dive into a digital wonderland with Whimsy! Journey through captivating tales, unleash your creativity, and connect with fellow adventurers. Explore boundless realms where imagination reigns supreme. Join us and discover a world where every click sparks new adventures. Let Whimsy be your guide to endless inspiration!
        </p>
      </div>
      <div>
        <button className="button01C">GET STARTED</button>
        <img src={Arrow01} alt="Arrow" className="arrow01C" />
      </div>
      <div>
        <button className="button02C">log in</button>
        <button className="button03C">sign in</button>
        <button className="button04C">search...</button>
        <img src={Search01} alt="Search" className="search01C" />
      </div>
      <div>
        <img src={Logo01} alt="Logo" className="logo01C" />
        <img src={Logo01} alt="Logo" className="logo02C" />
        <img src={NavBarBackground} alt="NavBarBackground" className="navbarback01C" />
      </div>
      
      {/* Coundown text */}
      <div className="relative grid grid-cols-3 pl-[250px] pt-[800px] text-cente8r font-inter">
      <div>
          <h1 className="font-bold text-white text-9xl">00%</h1>
          {/* <CountUp start={0} end={10} duration={2.75}></Countup> */}
          <p className="font-medium text-white">Customer Satisfaction</p>
        </div>
        <div>
          <h1 className="font-bold text-white text-9xl">50+</h1>
          <p className="font-medium text-white">Projects Completed</p>
        </div>
        <div>
          <h1 className="font-bold text-white text-9xl">100+</h1>
          <p className="font-medium text-white">Happy Clients</p>
        </div>

        
      </div>
       {/* Our Top catogery */}
       <div className="relative pl-[250px] pt-[800px] text-cente8r font-inter">
        <h1 className="font-bold text-white text-9xl">OUR TOP CATEGORIES</h1>
      </div>
    </div>
  );
}

export default Home;
