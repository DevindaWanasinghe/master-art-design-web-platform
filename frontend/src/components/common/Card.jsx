import React,{useState,useEffect} from 'react'
import { FaHeart } from "react-icons/fa";
import sampleImage from '../../images/TemplateImg/sampleimg.png';
import { Link } from 'react-router-dom';

const Card = ({name, price, image,incrementHeartCount, decrementHeartCount, updateHeartStatus }) => {

    const [isRed, setIsRed] = useState(false);
  
    const toggleHeartColor = () => {
      if (isRed) {
        decrementHeartCount();
      } else {
        incrementHeartCount();
      }
      setIsRed(!isRed);
    };

    useEffect(() => {
      updateHeartStatus(isRed); // Notify initial state of the heart
    }, [isRed]);
  
    return(
    <div className='relative ml-[0px]  w-[230px] '>
    <div className='relative w-56 mb-[10px]  border-2 border-[#F8F8FF] rounded-[30px] bg-opacity-10 h-[345px] md:mt-[20px] md:ml-[0px] backdrop-blur-md mt-[0px]  lg:ml-0 sm:mb-[0px] '>
      <div className='w-56 h-[119px] mt-56 bg-opacity-70 bg-neutral-600 rounded-b-[30px] ml-[-2.0px] border-white border-2'>
  
      </div>
        <img src={image || sampleImage} className='object-contain w-[165px] h-[234px] mt-[-310px]  ml-[28px] border-blue-700 border'/>
        <div className=' ml-[-5px] text-center'>
            <div className='text-white text-[13px] font-light'>{name}</div>
            <div className='text-white text-[17px] font-medium '>{price}</div>
        </div>
  
            <div className="absolute top-0 right-0 mt-[11px] mr-[11px] cursor-pointer" onClick={toggleHeartColor}>
             <FaHeart color={isRed ? 'red' : 'white'}  />
            </div>
        <Link to='/payment' state={{  name, price, image}}>
          <div className='w-[99px] h-[31px] rounded-[100px]  border-2 ml-[59px] mt-[14px] bg-[#816492] bg-opacity-100  ca'>
            <p className='pl-[16px] pt-[1px] text-white text-[15px] font-medium'>
              Buy Now
            </p>
            </div>
        </Link>
    </div>
  </div>
    );
  };

  export default Card;