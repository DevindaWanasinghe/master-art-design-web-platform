import React from "react";
import Bimage1 from "../../images/Home/Background girl image.png";
import Bimage2 from "../../images/Home/Background black-2.png";
import Bimage3 from "../../images/Home/Background black-1.png";
import Arrow01 from "../../images/Home/Arrow.png";
import Search01 from "../../images/Home/search.png";
import Logo01 from "../../images/Home/LOGO 1.png";
import NavBarBackground from "../../images/Home/NavBarbackground.png";
import TermsBack from "../../images/Home/TermsBack.png";

 
import "./../../css/terms.css"; // Import custom CSS
import "./../../css/home.css"; // Import custom CSS

<script src="https://cdn.tailwindcss.com"></script>;

function terms() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <img 
        src={Bimage1}
        alt="Overlay image1"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay Image 1 */}
      <img
        src={Bimage2}
        alt="Overlay image2"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay Image 2 */}
      <img
        src={Bimage3}
        alt="Overlay image3"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Text Overlay */}

      <div>
        <boutton className="button02C">log in</boutton>
        <boutton className="button03C">sign in</boutton>
        <boutton className="button04C">search...</boutton>
        <img src={Search01} alt="Arrow" className="search01C" />
      </div>
      <div>
        <img src={Logo01} alt="Logo" className="logo02C" />
        <img src={NavBarBackground} alt="NavBarBackground" className="navbarback01C"/>
      </div>
      
      <div calssname="termsback01C">
        <img
        src={TermsBack}
        alt="Overlay image background"
        className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      
      <div className="absolute text02C" style={{ left: "200px", top: "183.62px" }}>
        <h5 classname="termstext01C">MasterArt Template Store - Terms and Conditions</h5>
        <p classname="termstext02C">
          Welcome to MasterArt Template Store. By accessing and using our website,
          you agree to comply with and be bound by the following terms and
          conditions. Please read them carefully.

          We offer a guaranteed delivery time of 5 hours for all template purchases.
          Delivery times may vary based on order volume and other factors.

          All our design templates are priced affordably. Prices are subject to change
          without prior notice. The price at the time of purchase is final.

          Templates purchased from MasterArt Template Store are for personal and
          professional use only. Redistribution, resale, or sharing of templates is
          strictly prohibited without prior written consent from MasterArt.

          Our templates are designed for easy customization. If you encounter any
          issues with customization, please contact our support team for assistance.

          We are committed to protecting your privacy. Personal information
          collected during the purchase process is kept confidential and used solely
          for order processing and communication. For more details, please review
          our Privacy Policy.
          </p>
          <div>
        <boutton className="termsbutton01C">cloase</boutton>
      </div>
      </div>
    </div>
  );
}

export default terms;