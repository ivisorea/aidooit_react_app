import React from 'react'
import { Link } from 'react-router-dom'
import aidooit_logo from './aidooit_logo.png'
// import { Logo } from '../Logo'
import { Button, TextBtn } from './styles'
import { NavDropdown } from 'react-bootstrap'
import './styles.css'
import { useAuth } from '../../context/AuthContext'

export const Toolbar = () => {
    const { isAuthenticated, user, signout } = useAuth();

    return (
        <nav className="navbar navbar-light bg-light fixed-top rounded-bottom">
                <a className="nav-link" href="/">
                    {/* <Logo/> */}
                    <img 
                    src={aidooit_logo} 
                    width="190" 
                    className="d-inline-block align-top" 
                    alt="Aidooit_logo"/>
                </a>
            
                <div className=" d-flex justify-content-end">
                {isAuthenticated ? (
                    <>
                    <NavDropdown  
                            id='collasible-nav-dropdown navbar-menu' 
                            title={
                            <div className="icon-container">
                            <i class="fas fa-bars menu-icon"></i>
                            </div>
                            }>
                        <NavDropdown.Item href="#action/3.1">Welcome {user.first_name}</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="protected/create-post">Add Post</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Edit Post</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Delete Post</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.5">Log Out</NavDropdown.Item>
                    </NavDropdown>
                    </>
                ) : (
                    <>
                    <Link to={`/login`} >
                        <Button className='btn'>
                            <TextBtn>Login</TextBtn> 
                        </Button>
                    </Link>
                    <Link to={`/singup`}>
                        <Button className='btn'>
                        <TextBtn>SignUp</TextBtn>
                        </Button>
                    </Link>
                    </> 
                )}  
                    
                </div>
            </nav>
       
    )
}


