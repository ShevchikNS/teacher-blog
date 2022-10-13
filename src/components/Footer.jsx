import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import '../style/Footer.css'

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://shevchik-resume.netlify.app/">
                Web-page of Developer
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function StickyFooter() {
    return (
        <Box
            component="footer"
            className="Footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: "#AC3B61",

            }}
        >
            <Container maxWidth="sm">
                {/*<Typography variant="body1">*/}
                {/*    Сделано по специальному заказу для Юодайтис Ларисы Анатольевны*/}
                {/*</Typography>*/}
                <Copyright />
            </Container>
        </Box>
    );
}