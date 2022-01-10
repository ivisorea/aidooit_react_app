import React from 'react'
import aidooit_logo from './aidooit_logo.png'
import './Layout.css'

const Layout = () => {
    return (
        <>
      <Toolbar />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img 
                    src={aidooit_logo} 
                    width="100" 
                    className="d-inline-block align-top" 
                    alt="Aidooit_logo"/>
            </a>
            
        </nav>
        <div className="container">
            
        </div>


        
        </>
    )
}

export default Layout
