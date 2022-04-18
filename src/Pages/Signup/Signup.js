import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import './Signup.css';

const Signup = () => {

    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const handleSignup = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
        
    }
    if(user){
        navigate("/login");
    }
    return (
        <div>
           <div className='auth-form-container '>
            <div className='auth-form'>
                <h1 className='py-2'>Sign up Here</h1>
                <form onSubmit={handleSignup}>
                    <div className='input-field'>
                        <div className='input-wrapper'>
                        <input type='text' name='name' id='name' placeholder='Enter your Name' required/>
                        </div>
                    </div>
                    <div className='input-field'>
                        <div className='input-wrapper'>
                        <input type='email' name='email' id='email' placeholder='Enter your email' required/>
                        </div>
                    </div>
                    <div className='input-field'>
                        <div className='input-wrapper'>
                            <input type='password' name='password' id='password' placeholder='Enter your password' required/>
                        </div>
                    </div>
                    <div className='input-field'>
                        <div className='input-wrapper'>
                            <input type='password' name='confirm-password' id='confirm-password' placeholder='Confirm your password' required/>
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