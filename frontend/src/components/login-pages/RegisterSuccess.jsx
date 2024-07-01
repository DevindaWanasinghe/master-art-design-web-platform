import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RegisterSuccess() {
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    phone: '',
    imageUrl:''
  });
  const [login, setLogin] = useState(false);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/Account', {
        });
        setUserData(response.data);
        setLogin(true);
      } catch (error) {
        console.error('Fetch user data error:', error);
        // Optionally, you can handle errors here, such as setting an error state
      }
    };

    fetchUserData();
  }, []);


  const handleDelete = () => {
    setLogin(false);
    axios.get('http://localhost:5000/user/logout')
    
      .then(res => {
        window.location.reload(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Name: {userData.userName}</h1>
      <h1>Email: {userData.email}</h1>
      <h1>Phone: {userData.phone}</h1>
      <h1>image:{userData.imageUrl}</h1>
      {login ? <button onClick={handleDelete}>Logout</button> : null}
    </div>
  );
}

export default RegisterSuccess;
