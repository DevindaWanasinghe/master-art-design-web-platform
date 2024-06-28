import React, { useState } from 'react';
import Sidebar from "../main-pages/Sidebar";
import Header from "../main-pages/Header";
import "./../../css/home.css"; 
import Validation from '../../script/registervalidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [InputValue,setInputValue] = useState({
      userName:"",
      email:"",
      phone:"",
      password:"",
      repeatePassword:""

    });

    const [errors,seterrors] =useState({});
    const navigate = useNavigate();

    const handelSubmit=(e)=>{
      e.preventDefault();
      seterrors(Validation(InputValue));
      if(errors.name === "" && errors.email === "" && errors.password ==="" && errors.phone === "" && errors.repeatePassword === ""){
        axios.post('http://localhost:8081/register',InputValue)
          .then(res =>{
            navigate('/login');
          })
          .catch(err => console.log(err));
      }

    }

  return (
    <div className="relative min-h-screen overflow-hidden bg-center bg-cover bg-login-bg">
      <div><Sidebar></Sidebar></div>
      <div><Header></Header></div>
      
      <div className='w-1/4 h-[500px] rounded-[33px] border-[2px] border-white backdrop-blur-xl mt-[77px] block absolute left-2/3'>
        <form onSubmit={handelSubmit}>
            <p className=' text-white text-[48px] text-center mt-[15px]'>Welcome!</p>
            <input onChange={e => setInputValue({...InputValue,userName:e.target.value})} className='w-5/6 h-[45px] bg-transparent border-[1px] border-white rounded-[14px] mt-[15px]   text-white placeholder-white focus:outline-0  p-4 lg:ml-[25px] md:ml-[15px]'placeholder='User Name' type='text' name='UserName'></input>
            <span className=' text-red-700 text-[10px] '><p className='text-center'>{errors.userName}</p></span>
            <input onChange={e => setInputValue({...InputValue,email:e.target.value})} className='w-5/6 h-[45px] bg-transparent border-[1px] border-white rounded-[14px] mt-[15px]  text-white  placeholder-white focus:outline-0 p-4 lg:ml-[25px] md:ml-[15px]'placeholder='Email' type='email' name='Email'></input>
            <span className=' text-red-700 text-[10px] '><p className='text-center'>{errors.email}</p></span>
            <input onChange={e => setInputValue({...InputValue,phone:e.target.value})} className='w-5/6 h-[45px] bg-transparent border-[1px] border-white rounded-[14px] mt-[15px]  text-white  placeholder-white focus:outline-0 p-4 lg:ml-[25px] md:ml-[15px]'placeholder='Contact No' type='text' name='Phone'></input>
            <span className=' text-red-700 text-[10px] '><p className='text-center'>{errors.phone}</p></span>
            <input onChange={e => setInputValue({...InputValue,password:e.target.value})} className='w-5/6 h-[45px] bg-transparent border-[1px] border-white rounded-[14px] mt-[15px]  text-white  placeholder-white focus:outline-0 p-4 lg:ml-[25px] md:ml-[15px]'placeholder='Password' type='password' name='Password'></input>
            <span className=' text-red-700 text-[10px] '><p className='text-center'>{errors.password}</p></span>
            <input onChange={e => setInputValue({...InputValue,repeatePassword:e.target.value})} className='w-5/6 h-[45px] bg-transparent border-[1px] border-white rounded-[14px] mt-[15px]  text-white  placeholder-white focus:outline-0 p-4 lg:ml-[25px] md:ml-[15px]'placeholder='Password' type='password' name='repeatePassword'></input>
            <span className=' text-red-700 text-[10px] '><p className='text-center'>{errors.repeatePassword}</p></span>
            <button className='w-5/6 h-[45px] bg-#9573A9 border-[1px] rounded-[14px] mt-[30px] ml-[24px] text-white bg-custom-purple font-bold text-[24px] border-none  hover:bg-blue-700 ' type='submit' ><p className='pb-2 '>Continue</p></button>
        </form>
            
      </div>

    </div>
  )
}
export default Login