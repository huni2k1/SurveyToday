import React from 'react'
import GoogleLogin from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import logo from '../logo.png';
import './login.css'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const responseGoogle = (response) => {
        navigate('/homepage', { replace: true });
        localStorage.setItem("user",response.profileObj.email)
        localStorage.setItem("userImage",response.profileObj.imageUrl)
        localStorage.setItem("userName",response.profileObj.name)
    }
    const failresponseGoogle = (response) => {
        console.log(response);
    }
    return (
        <div className="container">
            <div className='icon'>
                <img id="logo"src={logo} alt="Name" width="250" height="250"/>
            </div>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                render={(renderProps) => (
                    <button
                        type="button"
                        className="google-button"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    >
                        <FcGoogle className="google-icon" />
                        <p className='button-text'>Sign in with Google</p>
                    </button>
                )}
                onSuccess={responseGoogle}
                onFailure={failresponseGoogle}
                cookiePolicy="single_host_origin"
            />
        </div>
    )
}
export default Login;