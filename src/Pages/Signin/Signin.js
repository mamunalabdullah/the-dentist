import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import './Signin.css';

const Signin = () => {

    // google authentication///////////////////////////////////////
    const provider = new GoogleAuthProvider();
    const handleGoogle = () => {
        console.log("working");
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
          }).catch((error) => {
            console.error('error', error);
          });
    }
    /////////////////////////////////////////////////////////////////////////
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, {replace: true});
    }

    const handleSignin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

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
                    <button className='google-auth' onClick={handleGoogle}>
                        <p>Continue with Google</p>
                    </button>
                </div>
            </div>
        </div> 
        </div>
    );
};

export default Signin;