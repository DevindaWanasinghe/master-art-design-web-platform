import React from 'react';
import AcImg from '../../images/AccountImg/accover.png';
import Bgimage from '../common/Bgimage';
import UserImage from '../../images/AccountImg/userimage.png'; // assuming you have a user image

function Account() {
  return (
    <div className="relative min-h-screen">
      <Bgimage />
      <div className="border-2 w-[1141px] h-[653px] text-white bg- relative z-10 pt-[50px] lg:mt-[110px] lg:ml-[280px] rounded-[31px] ">
        <div className="lg:w-[100%] relative">
          <img src={AcImg} alt="AccountCover" className="w-full h-[200px] object-cover rounded-t-[31px] mt-[-50px]" />
          <div className="absolute top-[150px] left-4 flex items-center space-x-4">
            <img src={UserImage} alt="User" className="w-[80px] h-[80px] rounded-full border-4 border-white" />
            <div>
              <h2 className="text-lg font-bold text-white">FULL NAME</h2>
              <p className="text-gray-400">@USER_NAME</p>
            </div>
          </div>
        </div>


      <div className="lg:w-[100%] flex flex-col lg:flex-row">
       
          <div className="  lg:w-[30%] flex justify-between items-center px-6 py-4  rounded-b-[31px] lg:h-[448px] backdrop-blur-2xl lg:flex-row ">
            <div className="flex space-x-8 mt-[-100px]">
                <div className="text-center">
                  <p className="text-lg font-bold text-white text-[58px]">78</p>
                  <p className="text-gray-400">favorite</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-white text-[58px]">18</p>
                  <p className="text-gray-400">save</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-white text-[58px]">98</p>
                  <p className="text-gray-400">download</p>
                </div>
            </div>

            <div className="absolute mt-[300px] text-white">
              <p>© 2024 Company</p>
            </div> 
          </div>
        



          <div className="p-2 lg:w-[70%] ">
            <div className="p-4  rounded-lg notification-center lg:h-[100%] rounded-b-[31px] backdrop-blur-2xl">
              <h3 className="mb-4 text-xl text-white">Notification Center</h3>
              <ul className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <li key={i} className="p-4 text-gray-300 bg-gray-500 rounded-md opacity-95">
                    <p className='text-white '>We hope this message finds you well. We are writing to inform you about the latest update regarding your ongoing design project with us.</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
         
      </div>



      </div>
    </div>
  );
}

export default Account;
