import { Box, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import { useSelector } from 'react-redux'

function Layout() {
  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  
  const userId = useSelector((state)=> state.global.userId);


  return (
    <Box display={isNonMobile ? "flex":"block"} height="100%" width="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth ="250px"
        isSidebarOpen = {isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <Navbar
          isSidebarOpen = {isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet/>
      </Box>
    </Box>
  )
}

export default Layout