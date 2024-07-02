import React, { useState } from 'react';
import Header from "../main-pages/Header";
import Sidebar from "../main-pages/Sidebar";
import "./../../css/home.css";
import { FcGoogle } from "react-icons/fc"; 
import Validation from "../../script/loginvalidation";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import Bgimage from '../common/Homebg'
function Login() {

  const [Inputvalues,setInputvalues] = useState({
    email:"",
    password:""
  });

  const [loading,setloading] = useState(false);
  const [errors,seterrors] = useState({});
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  //google login
  /*const login = useGoogleLogin({
    onSuccess: credentialResponse => console.log(credentialResponse),
    onError: console.log("Login Failed")
  });*/

  //custom login
  const handelsubmit =(e)=>{
    e.preventDefault();
    seterrors(Validation(Inputvalues));

    if(errors.email === "" && errors.password === ""){
      setloading(true);
      console.log(loading);
      axios.post('http://localhost:5000/user/login',Inputvalues)
        .then(res =>{
          navigate('/');
        })
        .catch(err => {
          if(err.response){
            if(err.response.data.message === 'User not found'){
              alert("User not found");
            }
            if(err.response.data.message === 'Verify email first'){
              alert("Verify your email first");
            }
            if(err.response.data.message === 'Invalid credentials'){
              alert("Invalid credentials");
            }
            
          }
          console.log(err);
            
        })
        .finally(()=>{setloading(false)});
    }
  }
  return (

    <div className=" overflow-hidden bg-center bg-cover bg-login-bg min-h-[720px] w-screen">

      <div><Bgimage/></div>
      <div><Sidebar></Sidebar></div>
      <div><Header></Header></div>
      
      <div className='w-1/4 h-[492px] rounded-[33px] border-[2px] border-white backdrop-blur-xl mt-[160px] block absolute left-2/3'>
        <form onSubmit={handelsubmit}>
            <p className=' text-white text-[48px] text-center mt-[15px]'>Welcome!</p>
            <input onChange={e => setInputvalues({...Inputvalues,email:e.target.value})} className='w-5/6 h-[45px] bg-transparent border-[1px] border-white rounded-[14px] mt-[15px]   text-white placeholder-white focus:outline-0  p-4 lg:ml-[25px] md:ml-[15px]'placeholder='Email' type='Email' name='Email'></input>
            <span className=' text-red-700 text-[10px] '><p className='text-center'>{errors.email}</p></span>
            <input  onChange={e => setInputvalues({...Inputvalues,password:e.target.value})} className='w-5/6 h-[45px] bg-transparent border-[1px] border-white rounded-[14px] mt-[15px]  text-white  placeholder-white focus:outline-0 p-4 lg:ml-[25px] md:ml-[15px]'placeholder='Password' type='Password' name='Password'></input>
            <span className=' text-red-700 text-[10px] '><p className='text-center'>{errors.password}</p></span>
            <button className='w-5/6 h-[45px] bg-#9573A9 border-[1px] rounded-[14px] mt-[30px] ml-[24px] text-white bg-custom-purple font-bold text-[20px] border-none  hover:bg-blue-700 ' type='submit' >
            {loading ? <span className=''><div class="w-8 h-8 border-2 border-dashed rounded-full animate-spin border-white ml-[17px] mt-[-3px]"></div><p  className='ml-[1px] mt-[-34px]'>loading...</p></span> :<p className='pb-[4px] '>Continue</p>}
            </button>
            <p className='ml-6 text-white text-[15px]'>forgot Password?</p>
            <p className='text-center text-white text-[15px]'>or</p>
            <button /*onClick={()=>{login()}} */className='w-5/6 h-[45px] bg-#9573A9 border-[1px] rounded-[14px] mt-[30px] ml-[24px] text-white font-bold text-[15px]  hover:bg-blue-700  border-white flex justify-center' ><FcGoogle size={20} className=' ml-[2px] mt-[12px]' /><p className='mt-[10px] ml-[2px]'>Continue With Google</p></button>
        </form>
      </div>

    </div>
  )
}
export default Login