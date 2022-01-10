import React from 'react'
import { Outlet } from 'react-router-dom'
import Search from '../Search/Search'
import aidooit_logo from './aidooit_logo.png'
import './Layout.css'

const Layout = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">
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
                    <a className="nav-link" href="/">Sign Up</a>
                </li>
                
            </ul>
        </nav>
        <Search/>
        <Outlet/>
        </>
    )
}

export default Layout
