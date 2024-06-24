import React,{useEffect,useState} from 'react'
import axios from 'axios';
import sampleImage from '../../images/sampleimg.png';
import '../../../src/index.css';
//import '../../css/template.css';
import Navigatebar from '../sub-pages/Navigatebar';
import Bgimage from '../sub-pages/Bgimage';
//import { FaHeart } from "react-icons/fa";
//import { Link } from 'react-router-dom';


function Template() {

  const [templates, setTemplates] = useState([]);
  //const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/templates')
      .then(response => {
        setTemplates(response.data);
      })
      .catch(error => {
        console.error('error fetching the templates!', error);

        //sample image
        setTemplates(generateDummyTemplates(40));
        
      });
  }, []);

  //for sample image
  const generateDummyTemplates = (count) => {
    return Array.from({ length: count }, (_, index) => ({
      name: `Template ${index + 1}`,
      price: `Rs ${(0 + 500)}`,
      image: sampleImage, 
      //isFavorite: false,  Initial state for favorites
    }));
  };


  //  // Toggle favorite status of a template
  //  const toggleFavorite = (templateId) => {
  //   const updatedTemplates = templates.map(template => {
  //     if (template.id === templateId) {
  //       return { ...template, isFavorite: !template.isFavorite };
  //     }
  //     return template;
  //   });
  //   setTemplates(updatedTemplates);
  //   updateFavorites(updatedTemplates);
  // };

  // // Update favorites count for the navigation bar
  // const updateFavorites = (updatedTemplates) => {
  //   const newFavorites = updatedTemplates.filter(template => template.isFavorite);
  //   setFavorites(newFavorites);
  // };




  return (
    <div>
      {/* Background images */}
      <div className='relative min-h-screen '>
        <Bgimage/>
        <Navigatebar />

          <div className="relative z-10 pt-16">
                <div className='pb-28 '></div>
                  {/* Rendering  cards */}
                  <div className="p-4 mt-44 md:mt-0 sm:mt-0">
                    <div className="container grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-[56px] md:gap-y-[96px] sm:gap-y-[100px] sm:ml-[40px] ml-[150px] xl:ml-[180px] lg:ml-[-10px]"> 
                    {templates.map((template, index) => (
                      <Card
                        key={index}
                        name={template.name}
                        price={template.price}
                        image={template.image}
                        //toggleFavorite={toggleFavorite}
                      />
                      ))}   
                  </div>
                </div>  
          </div>
      </div>  
    </div>
  );
}

// Card styling
const Card = ({ name, price, image}) => (
  <div className='relative ml-[0px]  w-[230px] '>
  <div className='relative w-56 mb-[10px]  border-2 border-[#F8F8FF] rounded-[30px] bg-opacity-10 h-[345px] md:mt-[20px] md:ml-[0px] backdrop-blur-md mt-[0px]  lg:ml-0 sm:mb-[0px] '>
    <div className='w-56 h-[119px] mt-56 bg-opacity-70 bg-neutral-600 rounded-b-[30px] ml-[-2.0px] border-white border-2'>

    </div>
      <img src={image || sampleImage} className='object-contain w-[165px] h-[234px] mt-[-310px]  ml-[28px] border-blue-700 border'/>
      <div className=' ml-[-5px] text-center'>
          <div className='text-white text-[13px] font-light'>{name}</div>
          <div className='text-white text-[17px] font-medium '>{price}</div>
      </div>

          {/* <div
            className={`absolute top-0 right-0 mt-[11px] mr-[11px] cursor-pointer ${Template.isFavorite ? 'text-red-500' : 'text-white'}`}
            //onClick={() => toggleFavorite(Template.id)}
          >
           <FaHeart />
          </div>
       */}
      <div className='w-[99px] h-[31px] rounded-[100px]  border-2 ml-[59px] mt-[14px] bg-[#816492] bg-opacity-100  ca'><p className='pl-[16px] pt-[1px] text-white text-[15px] font-medium'>Buy Now</p></div>
  </div>
</div>
);


export default Template