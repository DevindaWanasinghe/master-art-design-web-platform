import './App.css';

import Home from './components/main-pages/Home';
import Account from './components/main-pages/Account';
import Template from './components/main-pages/Template';
import Selfdesign from './components/sub-pages/Selfdesign';
import Facebook from './components/sub-pages/Facebook';
import Handbill from './components/sub-pages/Handbill';
import Payment from './components/sub-pages/Payment';
import Login from './components/login-pages/Login';

import Terms from'./components/main-pages/Terms';
import Register from'./components/login-pages/Register';

import AdminPanel from './components/admin/AdminPanel';
import{ BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterSuccess from './components/login-pages/RegisterSuccess';


function App() {
  return (
  
   <div> 
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path = "/account" element={<Account/>}></Route>
          <Route path = "/template" element={<Template/>}></Route>
          <Route path = "/terms" element={<Terms/>}></Route>
          <Route path = "/register" element={<Register/>}></Route>
          <Route path = "/registersuccess" element={<RegisterSuccess/>}></Route>
          <Route path = "/login" element={<Login/>}></Route>
          <Route path='/template/selfdesign' element={<Selfdesign/>}></Route>
          <Route path='/template/facebook' element={<Facebook/>}></Route>
          <Route path='/template/handbill' element={<Handbill/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
          <Route path='/admin' element={<AdminPanel/>}></Route>


        </Routes>

      </BrowserRouter>

   </div>
  );
}


export default App;

