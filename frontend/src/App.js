import './App.css';
import Home from './components/main-pages/Home';
import Account from './components/main-pages/Account';
import{ BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
<<<<<<< HEAD
    <div>
      

    </div>
  
=======
   <div> 
      <BrowserRouter>
        <Routes>
          <Route path = "/home" element={<Home/>}></Route>
          <Route path = "/account" element={<Account/>}></Route>

        </Routes>

      </BrowserRouter>

   </div>
>>>>>>> bf184c39ab5f7a7bf9d679caa93461034471a316
  );
}


export default App;
