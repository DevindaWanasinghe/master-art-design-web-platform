import React,{useState} from 'react'
import tempbgimg from '../../images/Hbg2.jpg';
import { FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import sampleImage from '../../images/sampleimg.png';
import '../../../src/index.css';
import '../../css/template.css';


function Template() {

  const [heartCount, setHeartCount] = useState(10);  // Initial count hearts
  const [shareCount, setShareCount] = useState(10);   // Initial count shares

  return (
    <div>
      {/* Background images */}
      <div className='relative min-h-screen '>
        <div className="absolute w-full h-screen">
          <img src={tempbgimg} alt='background1' className='object-cover w-full h-full '/> 
        </div>
        <div className="absolute top-[100vh] w-full h-screen">
          <img src={tempbgimg} alt='background2' className='object-cover w-full h-full '/> 
        </div>
        <div className="absolute top-[200vh] w-full h-screen">
          <img src={tempbgimg} alt='background3' className='object-cover w-full h-full '/> 
        </div>
        <div className="absolute top-[300vh] w-full h-screen">
          <img src={tempbgimg} alt='background4' className='object-cover w-full h-full '/> 
        </div>
        <div className="absolute top-[400vh] w-full h-screen">
          <img src={tempbgimg} alt='background5' className='object-cover w-full h-full '/> 
        </div>

        {/* Navigate Bar */}
        <div className="relative z-10">
          <div className='absolute inset-y-0 left-0 flex flex-col justify-between w-full pr-0 mt-16 ml-[-26px] text-white md:flex-row  md:pr-[96px]'>
            <div className='flex flex-col ml-4 space-y-4 md:flex-row md:ml-36 h-7 md:space-y-0'>
              <p className='pr-4 md:pr-16'>BOOK COVER</p>
              <p className='pr-4 md:pr-16'>FACEBOOK POST</p>
              <p className='pr-4 md:pr-16'>HAND BILL</p>
              <p className='pr-4 md:pr-16'>SELF DESIGN</p>
            </div>
            <div className='flex flex-row mt-4 space-x-[10px] md:space-x-20 h-7 md:mt-0'>
              <div className='flex space-x-2'>
                {<FaHeart size={20}/>}
                <span className=' text-[14px] font-medium'>{heartCount}</span>
              </div>
              <div className='flex space-x-2'>
                {<IoIosShareAlt size={25}/>}
                <span className=' text-[14px] font-medium'>{shareCount}</span>
              </div>   
            </div>  
          </div>

          {/* Rendering  cards */}
          <div className="p-4 mt-44 md:mt-0">
            <div className="container grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-14 md:gap-y-24"> 
              {Array.from({ length: 36 }).map((_, index) => (
                <Card key={index} />
              ))}
            </div>
          </div>  
          </div>
      </div>
      
    </div>
  );
}

// Card styling
const Card = () => (
  <div className='relative ml-[-150px]'>
  <div className='relative w-56 mb-[-200px] ml-4 bg-white border-2 border-white rounded-lg bg-opacity-10 h-80 md:mt-44 md:ml-36 '>
    <div className='w-56 h-[94px] mt-56 bg-opacity-70 bg-neutral-600 rounded-b-lg ml-[-2.0px] border-white border-2'>

    </div>
      <img src={sampleImage} className='object-contain w-[165px] h-[234px] mt-[-285px]  ml-[32px] border-blue-700 border '/>
  </div>
</div>


);



export default Template