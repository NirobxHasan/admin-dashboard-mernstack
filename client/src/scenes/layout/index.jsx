import { Box, useMediaQuery } from '@mui/material'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { useGetUserQuery } from 'state/api'

function Layout() {
  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  
  const userId = useSelector((state)=> state.global.userId);
  const {data} = useGetUserQuery(userId)
 // console.log("🚀 ~ file: index.jsx:15 ~ Layout ~ data:", data) //Ctrl + alt + L


  return (
    <Box display={isNonMobile ? "flex":"block"} height="100%" width="100%">
      <Sidebar
        user =  {data || {}}
        isNonMobile={isNonMobile}
        drawerWidth ="250px"
        isSidebarOpen = {isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user =  {data || {}}
          isSidebarOpen = {isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet/>
      </Box>
    </Box>
  )
}

export default Layout