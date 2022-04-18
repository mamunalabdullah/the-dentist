import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignout = () =>{
        signOut(auth);
    }
    return (
        <div>
            <>
            <Navbar className='navbar py-4 bg-info'>
                <Container>
                    <Link className='logo' to="/home">--The Dantist--</Link>
                        <Nav>
                            <NavLink className={({isActive}) =>
                            isActive ? "active-link" : "link"} to="/home">Home</NavLink>
                            <NavLink className={({isActive}) =>
                            isActive ? "active-link" : "link"} to="/about">About</NavLink>
                            <NavLink className={({isActive}) =>
                            isActive ? "active-link" : "link"} to="/blog">Blog</NavLink>
                            {
                                user ?
                                <button className='out-btn' onClick={handleSignout}>Log out</button>
                                :
                                <>
                                    <NavLink className={({isActive}) =>
                                    isActive ? "active-link" : "link"} to="/login">Login</NavLink>
                                    <NavLink className={({isActive}) =>
                                    isActive ? "active-link" : "link"} to="/register">Sign up</NavLink>
                                </>
                            }
                            
                        </Nav>
                </Container>
            </Navbar>
            </>
        </div>
    );
};

export default Header;