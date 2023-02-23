import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux'
import FlexBetween from './FlexBetween';
import { DarkModeOutlined, LightModeOutlined, Menu as MenuIcon, Search, SettingsOutlined}  from '@mui/icons-material'
import { setMode } from 'state';
function Navbar() {
    const dispatch = useDispatch();
    const theme = useTheme();
  return (
    <AppBar sx={{
        position:"static",
        background:"none",
        boxShadow:"none"
    }}>
        <Toolbar sx={{ justifyContent:'space-between' }}>
             {/* LEFT SIDE */}
            <FlexBetween>
                <IconButton onClick={()=> console.log('Open/close appbar')}>
                    <MenuIcon/>
                </IconButton>
                <FlexBetween 
                    backgroundColor={theme.palette.background.alt}
                    borderRadius="9px"
                    gap="3rem"
                    p="0.1rem 1.5rem"
                    >
                    <InputBase placeholder="Search..."/>
                    <Search/>
                </FlexBetween>
            </FlexBetween>

            {/* RIGHT SIDE */}
            <FlexBetween gap="1.5rem">
                <IconButton  onClick={()=> dispatch(setMode())}>
                    { theme.palette.mode === 'dark' ? <DarkModeOutlined sx={{ fontSize:"25px"}} />
                        : <LightModeOutlined sx={{ fontSize:"25px"}} />}
                </IconButton>
                <IconButton>
                    <SettingsOutlined/>
                </IconButton>
            </FlexBetween>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar