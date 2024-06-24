import './App.css';
import Home from './components/main-pages/Home';
import Account from './components/main-pages/Account';
import Template from './components/main-pages/Template';
import Register from './components/login-pages/Register';
import Login from './components/login-pages/Login';
import{ BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
  
   <div> 
      <BrowserRouter>
        <Routes>
          <Route path = "/home" element={<Home/>}></Route>
          <Route path = "/account" element={<Account/>}></Route>
          <Route path = "/template" element={<Template/>}></Route>
          <Route path = "/register" element={<Register/>}></Route>
          <Route path = "/login" element={<Login/>}></Route>

        </Routes>

      </BrowserRouter>

   </div>
  );
}


export default App;

