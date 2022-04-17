import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSignin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
    }

    return (
        <div>
           <div className='auth-form-container '>
            <div className='auth-form'>
                <h1 className='py-2'>Sign in Here</h1>
                <form onSubmit={handleSignin}>
                    <div className='input-field'>
                        <div className='input-wrapper'>
                        <input ref={emailRef} type='email' name='email' id='email' placeholder='Enter your email' required/>
                        </div>
                    </div>
                    <div className='input-field'>
                        <div className='input-wrapper'>
                            <input ref={passwordRef} type='password' name='password' id='password' placeholder='Enter your password' required/>
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