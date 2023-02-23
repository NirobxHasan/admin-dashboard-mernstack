import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Dashboard from 'scenes/dashborad'
function Layout() {
  return (
    <Box height="100%" width="100%">
      <Box>
        <Navbar/>
        <Outlet/>
      </Box>
    </Box>
  )
}

export default Layout