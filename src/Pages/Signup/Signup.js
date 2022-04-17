import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    return (
        <div>
           <div className='auth-form-container '>
            <div className='auth-form'>
                <h1 className='py-2'>Sign up Here</h1>
                <form>
                    <div className='input-field'>
                        <div className='input-wrapper'>
                        <input type='text' name='name' id='name' placeholder='Enter your Name' />
                        </div>
                    </div>
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
                    <div className='input-field'>
                        <div className='input-wrapper'>
                            <input type='password' name='confirm-password' id='confirm-password' placeholder='Confirm your password'/>
                        </div>
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Register
                    </button>
                </form>
                <p className='redirect'>
                    Already have an account ? 
                    <Link to="/login" className='account-link'> Sign in</Link>
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

export default Signup;