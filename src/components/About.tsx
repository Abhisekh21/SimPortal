import { Box, Button, Stack, Typography } from '@mui/material';
import react from 'react';
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <Box style={{ marginLeft: '20%', marginTop: '5%', padding: '20px' }}>
                <h1 style={{ color: 'blue' }}>ABOUT US</h1>
                <Box sx={{ backgroundColor: '#E8E6F5', padding: '10px' }}>
                    <Typography style={{ color: 'red' }}>Service Description</Typography>
                    <Typography align='left'> "SIM activation service" is a comprehensive solution designed to streamline the process of activating SIM cards, accessing available offers, and validating customer details. By leveraging this service, customers can efficiently activate their SIM cards while gaining access to a wide range of offers tailored to their needs. At its core, the SIM activation service offers a user-friendly platform that quides customers through the activation process step-by-step, ensuring a seamless experience. From initial setup to final confirmation, the service provides intuitive interfaces and prompts to ensure smooth activation without unnecessary complexities. Moreover, the service acts as a centralized hub for customers to explore and capitalize on various offers available for their SIM cards. Whether it's discounted plans, promotional packages, or exclusive deals, customers can easily browse and select offers that best suit their preferences and requirements.
                    </Typography><br></br>
                    <Typography variant='h5' align='center'>Our Services</Typography>
                    <Stack style={{ display: 'flex', flexDirection: 'row', flexGrow: '1', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '10px   ' }}>
                        <Link style={{ textDecoration: 'none', color: '#BC30F5' }} to={'/'}>All Customers</Link>
                        <Link style={{ textDecoration: 'none', color: '#BC30F5' }} to={'/validate-sim'}>Validate Sim</Link>
                        <Link style={{ textDecoration: 'none', color: '#BC30F5' }} to={'/validate-customer'}>Validate Customer</Link>
                        <Link style={{ textDecoration: 'none', color: '#BC30F5' }} to={'/validate-customer-details'}>Customer Details</Link>
                        <Link style={{ textDecoration: 'none', color: '#BC30F5' }} to={'/validate-customer-details'}>Validate ID</Link>
                        <Link style={{ textDecoration: 'none', color: '#BC30F5' }} to={'/special-offer'}>Special Offer</Link>



                    </Stack>

                </Box>

            </Box>
        </>
    )
}

export default About