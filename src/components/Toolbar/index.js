import React from 'react'
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
                    <div >
                        <Button className='btn '>
                            <TextBtn>Login</TextBtn> 
                        </Button>
                    </div>
                    <div>
                        <Button className='btn'>
                            SignUp
                        </Button>
                    </div>
                    
                </div>
            </nav>
       
    )
}


