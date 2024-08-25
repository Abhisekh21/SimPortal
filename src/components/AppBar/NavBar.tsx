import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate =  useNavigate()
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} style={{ backgroundColor: 'rgb(2,32,60)' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Hitachi Sim Activation Portal
                    </Typography>
                    <Box sx={{display:'flex',gap:'5px'}}>
                    <Button color="inherit" style={{border:'1px solid #FEA900'}} onClick={()=>{
                      navigate('/About')
                      
                    }}>About Us</Button>
                    <Button color="inherit" style={{border:'1px solid #FEA900'}} onClick={()=>{
                      navigate('/Contact')
                    }}>Contact Us</Button>
                    </Box>
                </Toolbar>
            </AppBar>
    </Box>
    <Outlet/>
    </>
  );
}
