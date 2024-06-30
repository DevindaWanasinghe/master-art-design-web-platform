import React,{useEffect,useState} from 'react'
import axios from 'axios';
//import sampleImage from '../../images/TemplateImg/hb1.jpg';
import '../../../src/index.css';
import Navigatebar from '../common/Navigatebar';
import Bgimage from '../common/Bgimage';
import Card from '../common/Card';
//import { Link } from 'react-router-dom';

function Handbill() {

  const [templates, setTemplates] = useState([]);
  const [heartCount, setHeartCount] = useState(0);
  const [anyHeartRed, setAnyHeartRed] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/templates?section=Hand Bill')
      .then(response => {
        setTemplates(response.data);
      })
      .catch(error => {
        console.error('error fetching the templates!', error);

        //sample image
        //setTemplates(generateDummyTemplates(20));
        
      });
  }, []);

  /*for sample image
  const generateDummyTemplates = (count) => {
    return Array.from({ length: count }, (_, index) => ({
      name: `Template ${index + 1}`,
      price: `Rs ${(0 + 500)}`,
      image: sampleImage, 
    }));
  };
  */

  const incrementHeartCount = () => {
    setHeartCount(heartCount + 1);
  };

  const decrementHeartCount = () => {
    setHeartCount(heartCount - 1);
  };

  
 // Update the state to track if any card's heart icon is red
  const updateHeartStatus = (isRed) => {
    if (isRed) {
      setAnyHeartRed(true);
    } else {
      // Recheck all cards to see if any heart is red
      const anyRed = templates.some(template => template.isRed);
      setAnyHeartRed(anyRed);
    }
  };

  return (

    <div>
      {/* Background images */}
      <div className='relative min-h-screen '>
        <Bgimage/>
        <Navigatebar heartCount={heartCount} anyHeartRed={anyHeartRed} /> {/*Pass heartCount and anyHeartRed to Navigatebar */}

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
                        image_url={template.image_url}
                        incrementHeartCount={incrementHeartCount}
                        decrementHeartCount={decrementHeartCount}
                        updateHeartStatus={updateHeartStatus}
                      />
                      ))}   
                  </div>
                </div>  
          </div>
      </div>  
    </div>
    
  );
}


export default Handbill