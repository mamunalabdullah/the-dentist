import React from 'react';
import './Checkout.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {

    const handleCheckout = event => {
        event.preventDefault();
        toast("It's Done");
    }

    return (
        <div>
           <div className='auth-form-container '>
                <div className='auth-form'>
                    <h1 className='py-2'>Give Your Details</h1>
                    <form onSubmit={handleCheckout}>
                        <div className='input-field'>
                            <div className='input-wrapper'>
                                <input type='text' name='name' id='name' placeholder='Enter your Name' required/>
                            </div>
                        </div>
                        <div className='input-field'>
                            <div className='input-wrapper'>
                                <input type='text' name='address' id='address' placeholder='Enter your Address' required/>
                            </div>
                        </div>
                        <div className='input-field'>
                            <div className='input-wrapper'>
                                <input type='email' name='email' id='email' placeholder='Enter your email' required/>
                            </div>
                        </div>
                        <div className='input-field'>
                            <div className='input-wrapper'>
                                <input type='text' name='contact' id='contact' placeholder='Enter Mobile Number' required/>
                            </div>
                        </div>
                        <button type='submit' className='auth-form-submit'>
                            Take Appointment
                        </button>
                </form>
                <ToastContainer />
            </div>
        </div> 
        </div>
    );
};

export default Checkout;