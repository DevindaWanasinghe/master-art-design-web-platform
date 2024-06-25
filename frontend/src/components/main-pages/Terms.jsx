import React from "react";
import Bimage1 from "../../images/Home/Background girl image.png";
import Bimage2 from "../../images/Home/Background black-2.png";
import Bimage3 from "../../images/Home/Background black-1.png";
import Search01 from "../../images/Home/search.png";
import Logo01 from "../../images/Home/LOGO 1.png";
import NavBarBackground from "../../images/Home/NavBarbackground.png";
import TermsBack from "../../images/Home/TermsBack.png";

import '../../css/terms.css'; // Import custom CSS

function Terms() {
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
        <button className="button02C">log in</button>
        <button className="button03C">sign in</button>
        <button className="button04C">search...</button>
        <img src={Search01} alt="Arrow" className="search01C" />
      </div>
      <div>
        <img src={Logo01} alt="Logo" className="logo02C" />
        <img src={NavBarBackground} alt="NavBarBackground" className="navbarback01C"/>
      </div>
      
      <div className="termstext">
        <img
          src={TermsBack}
          alt="Overlayimage background"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      
      <div className="absolute text02C" style={{ left: "200px", top: "183.62px" }}>
        <h5 className="termstext">MasterArt Template Store - Terms and Conditions</h5>
        <p className="termstext02C">
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
          <button className="termsbutton01C">close</button>
        </div>
      </div>
    </div>
  );
}

export default Terms;
