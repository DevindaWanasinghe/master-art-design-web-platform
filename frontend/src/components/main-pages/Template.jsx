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
      <div className='relative '>
        <img src={tempbgimg} alt='tempbgimg' className='w-full h-full '/> 
          <div className='absolute inset-y-0 flex flex-row text-white  mt-[108px] left-0 justify-between w-full   pr-[100px] h-0'>
            <div className='flex flex-row ml-[147px] h-[30px]'>
              <p className='pr-16 '>BOOK COVER</p>
              <p className='pr-16'>FACEBOOK POST</p>
              <p className='pr-16'>HAND BILL</p>
              <p className='pr-16'>SELF DESIGN</p>
            </div>
            <div className='flex flex-row space-x-20 h-[30px]'>
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

          <div className=" mt-[-1200px]">
            <div className="container grid  h-[1000px] grid-cols-4 auto-rows-auto  gap-x-14 gap-y-24 ">

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
           
            </div>
          </div>


         

          
      </div>
      
    </div>
  );
}

const Card = () => (
  <div className=''>
  <div className='bg-white bg-opacity-10 w-[227px] h-[350px] absolute mt-[180px] ml-[147px] rounded-[20px] border-white border-2'>
    <div className='w-[227px] h-[127px] mt-[221px] bg-opacity-70 bg-neutral-600 rounded-b-[20px] ml-[-2.5px] border-white border-2'>

    </div>
      <img src={sampleImage} className='object-contain w-[165px] h-[234px] mt-[-310px] ml-[32px] border-blue-700 border'/>
  </div>
</div>


);



export default Template