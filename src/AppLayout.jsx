import { Box } from '@mui/material'
import React from 'react'
import SideNav from './components/SideNav'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <Box height={70} />
            <Box sx={{ display: "flex", p: 3 }} className='bgcolor'>
                <SideNav />
                <Outlet />
            </Box >
        </>

    )
}

export default AppLayout