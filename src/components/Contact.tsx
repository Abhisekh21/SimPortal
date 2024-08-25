import { Box, Button, TextField, Typography } from '@mui/material';
import react from 'react';

const ContactUs = () => {
    return (
        <>
            <Box style={{ marginLeft: '20%', marginTop: '5%', padding: '20px' }}>
                <h1 style={{ color: 'blue' }}>CONTACT US</h1>
                <Box style={{ display: 'flex', flexDirection: 'column', padding: '10px', gap: '10px', justifyContent: 'center', alignItems: 'center',backgroundColor:'#E8E6F5' }}>

                    <TextField variant='outlined' placeholder='Enter name' ></TextField>
                    <TextField variant='outlined' placeholder='Email'></TextField>
                    <TextField variant='outlined' placeholder='Phone Number'></TextField>
                    <TextField multiline rows={4} defaultValue="Default Value"/>
                    <Button variant='contained' style={{ backgroundColor: '#ED6C02' }}>Submit</Button>


                </Box>

            </Box>
        </>
    )
}

export default ContactUs