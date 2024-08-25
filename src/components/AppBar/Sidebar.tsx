import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, colors } from '@mui/material';
import SimCardIcon from '@mui/icons-material/SimCard';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HomeIcon from '@mui/icons-material/Home';
import VerifiedIcon from '@mui/icons-material/Verified';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import { Outlet, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function Sidebar() {
    const navigate = useNavigate()
    return (
        // <Box sx={{ display: 'flex' }}>
        //     <CssBaseline /> 
        // </Box>
        <>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }} style={{ backgroundColor: 'rgb(2,32,60)' }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto', height: '100%' }} style={{ backgroundColor: 'rgb(2,32,60)', color: 'white' }}>
                    <List>
                        {[
                            { text: 'All Customer', icon: <AccountCircleIcon />, action: '/' },
                            { text: 'validate Sim', icon: <SimCardIcon />, action: '/Validate-sim' },
                            { text: 'Validate Customer', icon: <HowToRegIcon /> ,action:'/validate-customer'},
                            { text: 'Validate Customer Details', icon: <UpdateOutlinedIcon /> ,action:'/validate-customer-details'},
                            { text: 'Validate ID Proof', icon: <HomeIcon />,action:'/validate-id' },
                            { text: 'Show Special Offers', icon: <VerifiedIcon /> ,action:'/special-offer'}
                        ].map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton onClick={() => {                            
                                    navigate(`${item.action}`)
                                }}>
                                    <ListItemIcon style={{ color: 'white' }}>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                </Box>
            </Drawer>
            {/* <Outlet/> */}
        </>
    );
}
