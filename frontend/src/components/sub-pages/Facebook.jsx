import React,{useState} from 'react'
import sampleImage from '../../images/sampleimg.png';
import '../../../src/index.css';
import '../../css/template.css';
import Navigatebar from '../sub-pages/Navigatebar';
import Bgimage from '../sub-pages/Bgimage';

function Facebook() {

  return (
  <div>
    {/* Background images */}
    <div className='relative min-h-screen '>
      <Bgimage/>
        <div className="relative z-10">
            <Navigatebar/>
              <div className='pb-28 '></div>
                {/* Rendering  cards */}
                <div className="p-4 mt-44 md:mt-0 sm:mt-0">
                  <div className="container grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-[56px] md:gap-y-[96px] sm:gap-y-[100px] sm:ml-[40px] ml-[150px] xl:ml-[180px] lg:ml-[-10px] "> 
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
  <div className='relative ml-[0px]  w-[230px] '>
  <div className='relative w-56 mb-[10px]  border-2 border-[#F8F8FF] rounded-lg bg-opacity-10 h-80 md:mt-[20px] md:ml-[0px] backdrop-blur-md mt-[0px]  lg:ml-0 sm:mb-[0px] '>
    <div className='w-56 h-[94px] mt-56 bg-opacity-70 bg-neutral-600 rounded-b-lg ml-[-2.0px] border-white border-2'>

    </div>
      <img src={sampleImage} className='object-contain w-[165px] h-[234px] mt-[-285px]  ml-[28px] border-blue-700 border'/>
  </div>
</div>
);

export default Facebook