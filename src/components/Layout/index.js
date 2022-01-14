import React from 'react'
import { Outlet } from 'react-router-dom'

import { Toolbar } from '../Toolbar'




export const Layout = () => {
    
    return (
        <>
        <Toolbar/>
        <Outlet/>
        
        
        </>
    )
}


