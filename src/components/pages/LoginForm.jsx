import React from 'react';
import './LoginForm.css'
import './LandingPage.jsx';
import { FaCircleUser, FaLock } from 'react-icons/fa6';

const LoginForm = () => {
    return(
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="username"/>
                    <FaCircleUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password"/>
                    <FaLock className='icon' />
                </div>

                <div className="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>

                <a href="/Homepage">
                    <button type="submit" >Login</button>
                    </a>

                <div className="register-link">
                    <p>Dont have an account?<a href=" ">Sign up</a></p>
                </div>
            </form>
        </div>
    );
};
export default LoginForm;