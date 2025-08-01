
import DSWRemovebgPreview1 from '../../../Assets/Header/DSWLogo.png'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/slices/userSlice';

const LogIn = () => {
  const dispatch = useDispatch();
  return (
     <div className="logInForm">
          <img className="image" src={DSWRemovebgPreview1} alt="logo" />
          <label>Log in to get the best of Defence Sports World</label>
          <GoogleLogin
            onSuccess={credentialResponse => {
              const decoded = jwtDecode(credentialResponse.credential);
              dispatch(setUser({
                name: decoded.name,
                email: decoded.email,
                picture: decoded.picture,
                sub: decoded.sub, // Google's unique user ID
              }));
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            />
        </div>
  )
}

export default LogIn
