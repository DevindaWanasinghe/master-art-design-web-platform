import React,{useState} from 'react'
//import tempbgimg from '../../images/Hbg2.jpg';
import { FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { Link,useLocation } from 'react-router-dom';
import '../../css/navigatebar.css';
//import Card from './Card';

const Navigatebar = ({ heartCount, anyHeartRed }) => {
  
    const [shareCount, setShareCount] = useState(10);   // Initial count shares
    const location = useLocation(); //get current location



  return (
    <div className='fixed top-0 left-0 z-20 w-full bg-black bg-opacity-70 backdrop-blur-sm'>
      <div className=' flex flex-col justify-between w-full pr-0 mt-16 ml-[-26px] text-white md:flex-row  md:pr-[96px]'>
          <div className='flex flex-col ml-4 space-y-4 md:flex-row md:ml-36 h-7 md:space-y-0'>

              <Link to='/template' className={`nav-link ${location.pathname === '/template' ? 'active' : ''}`}>
                <p className='pr-4 md:pr-16 text-[17px] font-medium'>BOOK COVER</p>
              </Link>

              <Link to='/template/facebook' className={`nav-link ${location.pathname === '/template/facebook' ? 'active' : ''}`}>
                <p className='pr-4 md:pr-16 text-[17px] font-medium'>FACEBOOK POST</p>
              </Link>

              <Link to='/template/handbill' className={`nav-link ${location.pathname === '/template/handbill' ? 'active' : ''}`}>
                 <p className='pr-4 md:pr-16 text-[17px] font-medium'>HAND BILL</p>
              </Link>

              <Link to='/template/selfdesign' className={`nav-link ${location.pathname === '/template/selfdesign' ? 'active' : ''}`}>
                 <p className='pr-4 md:pr-16 text-[17px] font-medium'>SELF DESIGN</p>
              </Link>

            </div>

            <div className='flex flex-row mt-4 space-x-[10px] md:space-x-20 h-7 md:mt-0'>
              <div className='flex space-x-2'>
              {<FaHeart size={20} color={anyHeartRed ? 'red' :'white'}/>}
                <span className=' text-[17px] font-medium mt-[-4px]'>{heartCount}</span>
              </div>
              <div className='flex space-x-2'>
                {<IoIosShareAlt size={28} className=' mt-[-3px]'/>}
                <span className=' text-[17px] font-medium mt-[-4px]'>{shareCount}</span>
              </div>   
            </div>  
        </div>
    </div>

  )
}

export default Navigatebar