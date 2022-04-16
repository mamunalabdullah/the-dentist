import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <>
            <Navbar className='navbar py-4 bg-info'>
                <Container>
                    <Link className='logo' to="/home">Find The Dantist</Link>
                    <Nav>
                        <NavLink className={({isActive}) =>
                        isActive ? "active-link" : "link"} to="/home">Home</NavLink>
                        <NavLink className={({isActive}) =>
                        isActive ? "active-link" : "link"} to="/about">About</NavLink>
                        <NavLink className={({isActive}) =>
                        isActive ? "active-link" : "link"} to="/blog">Blog</NavLink>
                        <NavLink className={({isActive}) =>
                        isActive ? "active-link" : "link"} to="/login">Login</NavLink>
                        <NavLink className={({isActive}) =>
                        isActive ? "active-link" : "link"} to="/register">Sign up</NavLink>
                    </Nav>
                </Container>
            </Navbar>
            </>
        </div>
    );
};

export default Header;