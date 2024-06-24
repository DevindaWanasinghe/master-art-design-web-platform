import React,{useState} from 'react'
import tempbgimg from '../../images/Hbg2.jpg';
import '../../../src/index.css';
import '../../css/template.css';

const Bgimage = () => {
  return (
    <div className="fixed top-0 left-0 z-0 w-full h-full">
    <img src={tempbgimg} alt='background' className='object-cover w-full h-full'/>
  </div>
);
}

export default Bgimage