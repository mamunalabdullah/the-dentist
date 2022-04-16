import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container py-5'>
            <h1>Q1: Difference between authorization and authentication ?</h1>
            <p>Ans: Authentication is the process of verifying who someone is, whereas Authorization is the process of verifying what specific applications, files, and data a user has access to.Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.</p>
            <br /><br />
            <h1>Q2: Why are you using firebase? What other options do you have to implement authentication ?</h1>
            <p>Ans: Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to my app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more..
            <br />
            Alternatives of Firebase: Flutter, Kuzzle, NativeScript, RxDB etc.
            </p>
            <br /><br />
            <h1>Q3: What other services does firebase provide other than authentication ?</h1>
            <p>Ans: Cloud Firestore, Cloud Functions, Authentication, Hosting, Cloud Storage,Google Analytics,Predictions.
            </p>
        </div>
    );
};

export default Blog;