import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
    return (
        <div>
           <div className='auth-form-container '>
            <div className='auth-form'>
                <h1 className='py-2'>Sign in Here</h1>
                <form>
                    <div className='input-field'>
                        <div className='input-wrapper'>
                        <input type='text' name='email' id='email' placeholder='Enter your email' />
                        </div>
                    </div>
                    <div className='input-field'>
                        <div className='input-wrapper'>
                            <input type='password' name='password' id='password' placeholder='Enter your password'/>
                        </div>
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Login
                    </button>
                </form>
                <p className='redirect'>
                    New to this website ? 
                    <Link to="/register" className='account-link'> Create New Account</Link>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>OR</p>
                    <div className='line-right' />
                </div>
                <div className='input-wrapper'>
                    <button className='google-auth'>
                        <p>Continue with Google</p>
                    </button>
                </div>
            </div>
        </div> 
        </div>
    );
};

export default Signin;