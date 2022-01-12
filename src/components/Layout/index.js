import React from 'react'
import { Outlet } from 'react-router-dom'

import { Search } from '../Search'
import { Toolbar } from '../Toolbar'




export const Layout = () => {
    
    return (
        <>
        <Toolbar/>
        <Search/>
        <Outlet/>
        
        
        </>
    )
}


