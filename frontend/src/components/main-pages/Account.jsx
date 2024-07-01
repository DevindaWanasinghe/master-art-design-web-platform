import React from 'react';
import AcImg from '../../images/AccountImg/accover.png';
import Bgimage from '../common/Bgimage';
import UserImage from '../../images/AccountImg/userimage.png'; // assuming you have a user image
import Sidebar from '../main-pages/Sidebar'

function Account() {
  return (
    <div className="relative min-h-screen lg:h-screen">
      <Bgimage  />
      <Sidebar/>
      <div className="border-2 lg:w-[1100px] lg:h-[653px] md:w-[1020px] text-white bg- relative z-10 pt-[50px]  xl:mt-[110px] xl:ml-[280px] md:ml-[0px] rounded-[31px] lg:ml-[100px] lg:mt-[100px] ">
        <div className="lg:w-[100%] relative ">
          <img src={AcImg} alt="AccountCover" className="w-full h-[200px] object-cover rounded-t-[31px] mt-[-50px]" />
          <div className="absolute xl:top-[70px] left-[58px] flex items-center space-x-4 lg:top-[180px]">
            <img src={UserImage} alt="User" className="md:w-[80px]  md:h-[80px] lg:w-[120px] lg:h-[120px] xl:w-[215px] xl:h-[215px] rounded-full border-4 border-white" />
            <div className=''>
              <h2 className="text-lg font-bold text-white xl:pt-[300px] xl:ml-[-230px] xl:text-[40px] xl:font-extrabold">FULL NAME</h2>
              <p className="text-white xl:ml-[-180px] xl:mt-4">@USER_NAME</p>
            </div>
          </div>
        </div>


      <div className="lg:w-[100%] flex flex-col lg:flex-row">
       
          <div className="  lg:w-[30%] flex justify-between items-center px-6 py-4  rounded-b-[31px] lg:h-[448px] backdrop-blur-2xl lg:flex-row md:h-[150px] lg:pt-[400px]">
            <div className="flex space-x-8 md:mt-[20px] lg:mt-[-200px] lg:ml-5 md:ml-[300px]">
                <div className="text-center">
                  <p className="text-lg font-bold text-white md:text-[38px]">78</p>
                  <p className="pt-2 font-bold text-white">favorite</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-white md:text-[38px]">18</p>
                  <p className="pt-2 font-bold text-white">save</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-white md:text-[38px]">98</p>
                  <p className="pt-2 font-bold text-white">download</p>
                </div>
            </div>

            <div className="absolute mt-[300px] text-white lg:mt-[-10px]">
              <p>© 2024 Company</p>
            </div> 
          </div>
        



          <div className="p-2 lg:w-[70%] ">
            <div className="p-4  rounded-lg notification-center lg:h-[100%] rounded-b-[31px] backdrop-blur-2xl">
              <h3 className="mb-4 text-[24px] font-bold text-white">Notification Center</h3>
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
