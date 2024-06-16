import React,{useState} from 'react'
import tempbgimg from '../../images/Hbg2.jpg';
import { FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";


function Template() {

  const [heartCount, setHeartCount] = useState(10);  // Initial count hearts
  const [shareCount, setShareCount] = useState(10);   // Initial count shares

  return (
    <div>
      <div className='relative '>
        <img src={tempbgimg} alt='tempbgimg' className='w-full h-full '/> 
          <div className='absolute inset-y-0 flex flex-row text-white  mt-[108px] left-0 justify-between w-full   pr-[100px] '>
            <div className='flex flex-row ml-[147px]'>
              <p className='pr-16 '>BOOK COVER</p>
              <p className='pr-16'>FACEBOOK POST</p>
              <p className='pr-16'>HAND BILL</p>
              <p className='pr-16'>SELF DESIGN</p>
            </div>
            <div className='flex flex-row space-x-20 '>
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
         












      </div>
      
    </div>
  )
}

export default Template