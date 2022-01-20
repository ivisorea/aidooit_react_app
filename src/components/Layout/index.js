import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Toolbar } from '../Toolbar'




export const Layout = () => {
   
    
    return (
        <>
        <Toolbar/>
        <Outlet/>
        <Footer/>
        
        
        </>
    )
}


