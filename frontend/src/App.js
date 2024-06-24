import './App.css';
import Home from './components/main-pages/Home';
import Account from './components/main-pages/Account';
import Template from './components/main-pages/Template';
import Selfdesign from './components/sub-pages/Selfdesign';
import Facebook from './components/sub-pages/Facebook';
import Handbill from './components/sub-pages/Handbill';

import Terms from'./components/main-pages/Terms';
import Register from'./components/login-pages/Register';
import{ BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
  
   <div> 
      <BrowserRouter>
        <Routes>
          <Route path = "/home" element={<Home/>}></Route>
          <Route path = "/account" element={<Account/>}></Route>
          <Route path = "/template" element={<Template/>}></Route>
          <Route path = "/terms" element={<Terms/>}></Route>
          <Route path = "/register" element={<Register/>}></Route>
          <Route path='/template/selfdesign' element={<Selfdesign/>}></Route>
          <Route path='/template/facebook' element={<Facebook/>}></Route>
          <Route path='/template/handbill' element={<Handbill/>}></Route>

        </Routes>

      </BrowserRouter>

   </div>
  );
}


export default App;

