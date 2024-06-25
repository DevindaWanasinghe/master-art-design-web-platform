import React from "react";
import Bimage1 from "../../images/Home/Background girl image.png";
import Bimage2 from "../../images/Home/Background black-2.png";
import Bimage3 from "../../images/Home/Background black-1.png";
import Arrow01 from "../../images/Home/Arrow.png";
import Search01 from "../../images/Home/search.png";
import Logo01 from "../../images/Home/LOGO 1.png";
import NavBarBackground from "../../images/Home/NavBarbackground.png";
import Sidebar from '../../components/main-pages/Sidebar';
import Header from '../../components/main-pages/Header';
import { IoIosArrowDropright } from "react-icons/io";
import "./../../css/home.css"; // Import custom CSS

<script src="https://cdn.tailwindcss.com"></script>;
function Home() {
  return (
 
    <div className="relative min-h-screen overflow-hidden bg-center bg-cover bg-login-bg">
      <Sidebar></Sidebar>
      <Header></Header>
      <div className="float-right w-auto h-auto mt-[100px] mr-10">
        <h1 className="text-white text-[64px] font-bold inter">WHERE, IDEAS</h1>
        <h1 className="text-white text-[128px] font-extrabold  inter">SPARKLE</h1>
        <h1 className="text-white text-[96px] font-extrabold  inter">ONLINE</h1>

        <div className="float-right w-[572px] h-auto mt-[15px] ">
          <p className="text-white text04C inter text-[14px]">
                Dive into a digital wonderland with Whimsy! Journey through
                captivating tales unleash your creativity, and connect with fellow
                adventurers. Explore boundless realms where imagination reigns
                supreme. Join us and discover a world where every click sparks new
                adventures. Let Whimsy be your guide to endless inspiration!
          </p>
        </div>
        <div className="w-[572px] h-[245px]"><img src={Logo01} alt="logo" className="w-[260px] h-[190px] float-right"></img></div>
        <div className="float-right w-auto h-auto">
        <boutton className=" rounded-[188px] inline-flex w-[203px] h-[48px] text-white text-[20px] pl-[15px] pt-[6px] hover:bg-blue-700 border-[2px] border-white ml-[110px] cursor-pointer backdrop-blur-lg">GET STARTED<IoIosArrowDropright size={30}  className="ml-[29px] mt-[1px]"/></boutton>
        </div>
      </div>
       
      
      
    </div>

  );
}

export default Home;
