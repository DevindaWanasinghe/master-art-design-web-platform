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

      {/* Text Overlay */}
      <div
        className="absolute text02C"
        style={{ left: "625.02px", top: "183.62px" }}
      >
        <h1 className="text01C">WHERE, IDEAS</h1>
      </div>
      <div
        className="absolute text02C"
        style={{ left: "625.02px", top: "183.62px" }}
      >
        <h1 className="text02C">SPARKLE</h1>
      </div>
      <div
        className="absolute text02C"
        style={{ left: "625.02px", top: "183.62px" }}
      >
        <h1 className="text03C">ONLINE</h1>
      </div>
      <div
        className="absolute text02C"
        style={{ left: "625.02px", top: "183.62px" }}
      >
        <p className="text04C">
          Dive into a digital wonderland with Whimsy! Journey through
          captivating tales unleash your creativity, and connect with fellow
          adventurers. Explore boundless realms where imagination reigns
          supreme. Join us and discover a world where every click sparks new
          adventures.  Let Whimsy be your guide to endless inspiration!
        </p>
      </div>
      <div>
        <boutton className="button01C">GET STARTED</boutton>
        <img src={Arrow01} alt="Arrow" className="arrow01C" />
      </div>
      <div>
        <boutton className="button02C">log in</boutton>
        <boutton className="button03C">sign in</boutton>
        <boutton className="button04C">search...</boutton>
        <img src={Search01} alt="Arrow" className="search01C" />
      </div>
      <div>
        <img src={Logo01} alt="Logo" className="logo01C" />
        <img src={Logo01} alt="Logo" className="logo02C" />
        <img
          src={NavBarBackground}
          alt="NavBarBackground"
          className="navbarback01C"
        />
      </div>
    </div>

  );
}

export default Home;