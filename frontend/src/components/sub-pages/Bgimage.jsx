import React,{useState} from 'react'
import tempbgimg from '../../images/Hbg2.jpg';
import '../../../src/index.css';
import '../../css/template.css';

const Bgimage = () => {
  return (
    <div>
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
    </div>
  
  );
}

export default Bgimage