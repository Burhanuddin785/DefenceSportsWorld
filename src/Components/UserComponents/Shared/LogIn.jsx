import React, { useState } from 'react'
import DSWRemovebgPreview1 from '../../../Assets/Header/DSWLogo.png'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const LogIn = () => {
    let [userData, setUserData] = useState({})
  return (
     <div className="logInForm">
          <img className="image" src={DSWRemovebgPreview1} alt="logo" />
          <label>Log in to get the best of Defence Sports World</label>
          <GoogleLogin
            onSuccess={credentialResponse => {
                setUserData(jwtDecode(credentialResponse.credential));
                // console.log(userData);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            />
        </div>
  )
}

export default LogIn
