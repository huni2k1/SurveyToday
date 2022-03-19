import React from 'react'
import GoogleLogin from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import './login.css'
export const Login = () => {
    const responseGoogle= (response)=> {
        console.log("Response Google")
    }
  return (
    <div className="container">
    <div className='icon'>Survey Today Icon</div>
    <GoogleLogin
              clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
              render={(renderProps) => (
                <button
                  type="button"
                  className="google-button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="google-icon" /> 
                  <p className='button-text'>Sign in with google</p>
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
    </div>
  )
}
export default Login;