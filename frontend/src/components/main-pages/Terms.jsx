import React from "react";
//import TermsBg from "../../images/Home/termsbg.png"
import HomeBg from "../common/Homebg"
import SideBar from "../main-pages/Sidebar"
import Header from "../main-pages/Header"
import { Link } from "react-router-dom";


function Terms() {
  return (
    <div className="">
      <div><HomeBg/></div>
      <div><Header/></div>
      <div><SideBar/></div>

      <div className=" pt-[109px]"> 
        <div className="border-2 lg:w-[770px] lg:h-[681px] backdrop-blur-xl rounded-[33px] m-auto p-12 md:w-[600px]  md:h-[500px]">
  
            <div className="text-white lg:text-[18px] md:text-[14px]">
              <p className="m-auto text-center mt-[-10px] pb-[25px] lg:text-[25px] font-medium md:text-[20px]">MasterArt Template Store - Terms and Conditions</p>
              <p className="pb-2 ">
                  Welcome to MasterArt Template Store. By accessing and using our website,
                  you agree to comply with and be bound by the following terms and
                  conditions. Please read them carefully.
              </p>
              <p className="pb-2 ">
                  We offer a guaranteed delivery time of 5 hours for all template purchases.
                  Delivery times may vary based on order volume and other factors.
              </p>
              <p className="pb-2 ">
                  All our design templates are priced affordably. Prices are subject to change
                  without prior notice. The price at the time of purchase is final.
              </p>
              <p className="pb-2">
                  Templates purchased from MasterArt Template Store are for personal and
                  professional use only. Redistribution, resale, or sharing of templates is
                  strictly prohibited without prior written consent from MasterArt.
              </p>
              <p className="pb-2">
                  Our templates are designed for easy customization. If you encounter any
                  issues with customization, please contact our support team for assistance.
              </p>
              <p className="pb-2">
                  We are committed to protecting your privacy. Personal information
                  collected during the purchase process is kept confidential and used solely
                  for order processing and communication. For more details, please review
                  our Privacy Policy.
              </p>
            </div>
          
            <div className="flex justify-center lg:mt-[30px] md:mt-[-25px]">
              <Link to='/'>
              <button className="w-[151px] h-[38px] text-center border-2 rounded-[188px] bg-[#9573A9] hover:bg-[#6b427c] transition duration-300 text-white text-[20px] font-medium">
                close
              </button>
              </Link>
            </div>
      </div>

      </div>

  

      
    </div>
  );
}

export default Terms;
