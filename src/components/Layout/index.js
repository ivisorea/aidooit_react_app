import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import aidooit_logo from './aidooit_logo.png'
import './Layout.css'
import { Logo } from '../Logo'
import { Search } from '../Search'


export const Layout = () => {
    return (
        <>
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        {/* <Logo/> */}
                        <img 
                        src={aidooit_logo} 
                        width="150" 
                        className="d-inline-block align-top" 
                        alt="Aidooit_logo"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">SignUp</a>
                </li>
                
            </ul>
        </nav>
        <Search/>
        <Outlet/>
        <Footer/>
        
        </>
    )
}


