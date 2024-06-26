import React from 'react'
import { useLocation } from 'react-router-dom';
import Bgimage from '../common/Bgimage'

function Payment() {

    const location = useLocation();
    const { name, price, image } = location.state || {};
    
  return (
    <div>
        <div className='relative min-h-screen '>
        <Bgimage/>

            <div className='absolute inset-0 z-10 flex flex-col items-center justify-center p-4 m-auto md:flex-row md:space-x-8 lg:space-x-[200px] md:p-0 '> 
                <div className=' relative w-full md:w-[620px] h-[652px] border-[2px] border-[#F8F8FF] backdrop-blur-md rounded-[40px] mb-4 md:mb-0 sm:w-[500px] p-4 bg-gradient-to-r from-purple-200 to-fuchsia-100"'>
                    <div className='flex items-center justify-center w-full h-ful'> 
                        {image && (
                            <div className='relative flex flex-col items-center w-full h-full max-w-full max-h-full'>
                                     <img src={image} alt={name} className='object-contain w-full h-auto max-h-full mb-4 sm:w-1/2 md:w-3/4 lg:w-[400px] xl:w-[400px] xl:mt-4 lg:mt-[20px] md:mt-[60px]' />      
                                     {/* box-content  p-6 border-2 border-blue-600 */}
                            </div>
                        )}    
                    </div>
                </div>

                <div className=' w-full md:w-[420px] sm:w-[400px] h-[652px] border-2 border-[#F8F8FF] backdrop-blur-lg rounded-[40px] p-4'>
                    <div>
                        


                    </div>

                    <div>

                    </div>

                    <div>
                        <h2 className='text-white text-[17px] font-medium'>{name}</h2>
                        <p className='text-white text-[17px] font-medium'>{price}</p>
                    </div>



                </div>

            </div>

        </div>
    </div>
  );
}

export default Payment