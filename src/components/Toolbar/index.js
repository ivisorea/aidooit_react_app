import React from 'react'
import { Link } from 'react-router-dom'
import aidooit_logo from './aidooit_logo.png'
// import { Logo } from '../Logo'
import { Button, TextBtn } from './styles'

export const Toolbar = () => {

    
    return (
        
   
            <nav className="navbar navbar-light bg-light fixed-top">
                <a className="nav-link" href="/">
                    {/* <Logo/> */}
                    <img 
                    src={aidooit_logo} 
                    width="150" 
                    className="d-inline-block align-top" 
                    alt="Aidooit_logo"/>
                </a>
                <div className=" d-flex justify-content-end">
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
                    
                </div>
            </nav>
       
    )
}


