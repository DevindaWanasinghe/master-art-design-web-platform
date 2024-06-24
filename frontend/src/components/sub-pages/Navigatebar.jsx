import React,{useState} from 'react'
import tempbgimg from '../../images/Hbg2.jpg';
import { FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { Link } from 'react-router-dom';
import '../../css/navigatebar.css';

const Navigatebar = ({ heartCount }) => {
  
    const [shareCount, setShareCount] = useState(10);   // Initial count shares

  return (
    <div className='fixed top-0 left-0 z-20 w-full bg-black bg-opacity-70 backdrop-blur-sm'>
      <div className=' flex flex-col justify-between w-full pr-0 mt-16 ml-[-26px] text-white md:flex-row  md:pr-[96px]'>
          <div className='flex flex-col ml-4 space-y-4 md:flex-row md:ml-36 h-7 md:space-y-0'>

              <Link to='/template'>
                <p className='pr-4 md:pr-16'>BOOK COVER</p>
              </Link>

              <Link to='/template/facebook'>
                <p className='pr-4 md:pr-16'>FACEBOOK POST</p>
              </Link>

              <Link to='/template/handbill'>
                 <p className='pr-4 md:pr-16'>HAND BILL</p>
              </Link>

              <Link to='/template/selfdesign'>
                 <p className='pr-4 md:pr-16'>SELF DESIGN</p>
              </Link>

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
    </div>

  )
}

export default Navigatebar