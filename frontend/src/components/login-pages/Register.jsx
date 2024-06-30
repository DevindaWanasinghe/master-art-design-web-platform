import React, { useState } from 'react';
import Sidebar from "../main-pages/Sidebar";
import Header from "../main-pages/Header";
import Validation from '../../script/registervalidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc"; 
import { useGoogleLogin } from '@react-oauth/google';

function Login() {
    const [InputValue,setInputValue] = useState({
      userName:"",
      email:"",
      phone:"",
      password:"",

    });

    const [loading,setloading] = useState(false);
    const [errors,seterrors] =useState({});
    const navigate = useNavigate();

    const login = useGoogleLogin({
      onSuccess: credentialResponse => console.log(credentialResponse),
      onError: console.log("Login Failed")
    });

    const handelSubmit=(e)=>{
      e.preventDefault();
      seterrors(Validation(InputValue));
     
      if(errors.userName === "" && errors.email === "" && errors.password ==="" && errors.phone === ""){
        setloading(true);
        axios.post('http://localhost:8081/user/register',InputValue)
          .then(res =>{
            navigate('/login');
          })
          .catch(err => {
            if(err.response.data.message  === 'User already exists'){
              alert("User already exists");
            }
            console.log(err);
          })
          .finally(()=>{setloading(false)})
      }

    }

  return (
    <div className="overflow-hidden bg-center bg-cover bg-login-bg min-h-[720px] w-screen">
      <div><Sidebar></Sidebar></div>
      <div><Header></Header></div>
      
      <div className='w-1/4 h-auto rounded-[33px] border-[2px] border-white backdrop-blur-xl mt-[77px] block absolute left-2/3'>
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
            <button className='w-5/6 h-[45px] bg-#9573A9 border-[1px] rounded-[14px] mt-[20px] ml-[24px] text-white bg-custom-purple font-bold text-[20px] border-none  hover:bg-blue-700 mb-[18px]' type='submit' >
            {loading ? <span className=''><div class="w-8 h-8 border-2 border-dashed rounded-full animate-spin border-white ml-[17px] mt-[-3px]"></div><p  className='ml-[1px] mt-[-34px]'>loading...</p></span> :<p className='pb-[4px] '>Continue</p>}
            </button>
            <p className='text-center text-white text-[15px] mt-[-18px]'>or</p>
            <button onClick={()=>{login()}} className='w-5/6 h-[45px] bg-#9573A9 border-[1px] rounded-[14px] mt-[5px] ml-[24px] text-white font-bold text-[15px]  hover:bg-blue-700  border-white flex justify-center mb-[23px]'><FcGoogle size={20} className=' ml-[2px] mt-[12px]' /><p className='mt-[10px] ml-[2px]'>Continue With Google</p></button>
        </form>
            
      </div>

    </div>
  )
}
export default Login