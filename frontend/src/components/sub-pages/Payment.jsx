import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Bgimage from '../common/Bgimage'
import WpImage from '../../images/Pay/wp1.png'
import WpImage2 from '../../images/Pay/wp2.png'
import PreviewButton from '../../images/Pay/preview_button.png'
import NextButton from '../../images/Pay/next_button.png'
import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';

function Payment() {

    const location = useLocation();
    const { name, price, image_url } = location.state || {};

    const navigate = useNavigate();

    const handleGoBack = () => {
    navigate(-1); // This navigate back to the previous page
  };


  const whatsappNumber = '+94778663845';

    
  return (
    <div>
        <div className='relative min-h-screen '>
        <Bgimage/>

            <div className='absolute inset-0 z-10 flex flex-col items-center justify-center p-4 m-auto md:flex-row md:space-x-8 lg:space-x-[200px] md:p-0 '> 
                <div className=' relative w-full md:w-[393px] h-[555px]   backdrop-blur-sm rounded-[40px] mb-4 md:mb-0 sm:w-[500px] p-4 mt-[-110px]'>
                    <div>
                        <h2 className='text-[#F8F8FF] text-[32px] items-center text-center pt-[4px] font-bold float-top'>{name}</h2>
                    </div>

                    <div className='flex items-center justify-center w-full h-ful'> 
                        {image_url && (
                            <div className='relative flex flex-col items-center w-full h-full max-w-full max-h-full'>
                                     <img src={image_url} alt={name} className='object-contain w-full h-auto max-h-full mb-4 sm:w-1/2 md:w-3/4 lg:w-[392px] xl:w-[392px] xl:mt-4 lg:mt-[20px] md:mt-[60px] rounded-[31px]' />      
                                     {/* box-content  p-6 border-2 border-blue-600 */}
                                     <div className='flex justify-between w-full mt-[-250px]'>
                                        <div className=' w-[50px] h-[95px] bg-[#D9D9D9] rounded-l-[15px] md:ml-[-12px] lg:mt-[-80px] lg:ml-[-61px] xl:ml-[-61px] sm:ml-[60px] '>
                                            <img src={PreviewButton} alt='Preview' className='w-[50px] h-[50px] cursor-pointer mt-[20px]' onClick={() => console.log('Preview clicked')} />
                                        </div>
                                        <div className='w-[50px] h-[95px] bg-[#D9D9D9] rounded-r-[15px] md:mr-[-12px]  lg:mt-[-80px] lg:mr2-[-61px] lg:mr-[-61px] sm:mr-[60px] '>
                                            <img src={NextButton} alt='Next' className='w-[50px] h-[50px] cursor-pointer mt-[20px]' onClick={() => console.log('Next clicked')} />
                                        </div>
                                    </div>
                            </div>
                        )}     
                    </div>
                    <div className=' lg:mt-[230px] md:mt-[150px]'>
                        <p className='text-[#F8F8FF] text-[32px] font-semibold text-center float-bottom items-center '>{price}</p>
                    </div>
                </div>

                <div className=' w-full md:w-[426px] sm:w-[400px] h-[652px] border-2 border-[#F8F8FF] backdrop-blur-lg rounded-[40px] p-4'>
                    <div className='flex flex-row'>
                        <img src={WpImage} alt='wpimage' className=' w-[50px] h-[50px] m-auto'/> 
                        <p className=' text-[42px] font-bold text-[#F8F8FF] text-center items-center m-auto ml-[-30px]'>WhatsApp</p>
                    </div>
                        
                    <div className=' mt-[-8px] lg:ml-[14px]'>
                        <img src={WpImage2} alt='wpimage2'/>
                    </div>

                    <div className=' w-[354px] h-[50px] bg-Green bg-[#73A97B] rounded-[14px] backdrop-blur-md lg:ml-4  mt-3'>
                        <p className='pt-[4px] m-auto text-center text-white text-[24px] font-semibold'>
                            <a href={`https://wa.me/${whatsappNumber}`} target="_blank"  rel="noopener noreferrer">
                                {/*  rel="noopener noreferrer" */}
                                Continue to Chat
                            </a>
                        </p>
                    </div>
                    
                    <Link to='/target-page'>
                        <div className=' w-[151px] h-[38px] rounded-[188px] bg-[#9573A9] border-[2px] items-center justify-center m-auto mt-[40px]'  onClick={handleGoBack}>
                            <p className='m-auto font-medium text-center text-white text-[20px] pt-[1px]'>close</p>
                        </div>
                    </Link>
                   
                </div>

            </div>

        </div>
    </div>
  );
}

export default Payment