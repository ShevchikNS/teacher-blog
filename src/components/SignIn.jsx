import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import AlertComponent from "./Alert-component";
import {setCurrentUserAction} from "../store/userReducer";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";
import '../style/SignIn.css'


const theme = createTheme();

export default function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    // const currentUser = useSelector(state => state.currentUser.user)

    const checkAuth = () => {
        // store.getState().auth.authState = true
        let path = '/';
        navigate(path);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const authUser = {
            email: data.get('email'),
            password: data.get('password'),
        }
        let user = ""
        const checkUser = await getDocs(collection(db, "users"))

        checkUser.forEach((doc) => {
                if (`${doc.data().email}` === `${authUser.email}` && `${doc.data().password}` === `${authUser.password}`) {
                    user = doc.data()
                }
            }
        );

        if (user !== null) {
            if (user.length === 0) {
                setOpen(true)
            } else {
                dispatch(setCurrentUserAction(user))
                checkAuth()
            }
        } else {
            setOpen(false)
        }

    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: '#AC3B61'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <AlertComponent open={open} text="Account not found" setOpen={() => setOpen(false)}/>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"

                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2, bgcolor: '#AC3B61' }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link sx={{mt: 3, mb: 2, display: "none"}} href="" onClick={() => navigate("/signup")} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}