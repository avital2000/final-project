import React from 'react';
import { useHistory } from 'react-router';
import Button from '@mui/material/Button';

import newLogo from '../images/LogoNoBack.png';
import './css/NavBar.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import TemporaryDrawer from './Drawer';
import Divider from '@mui/material/Divider';

const NavBar = () => {
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openSignUp, setOpenSignUp] = React.useState(false);
    const handleOpenSignUp = () => setOpenSignUp(true);
    const handleCloseSignUp = () => setOpenSignUp(false);

    const [openSignIn, setOpenSignIn] = React.useState(false);
    const handleOpenSignIn = () => setOpenSignIn(true);
    const handleCloseSignIn = () => setOpenSignIn(false);

    const goHome = () => {
        history.push('./');
    }

    return (
        <nav className="nav">
            <img src={newLogo} alt={newLogo} className="miniLogo" onClick={goHome} />
            <div className="container">
                <TemporaryDrawer />
            </div>
            <Button
                onClick={handleOpenSignUp}
                style={{ color: '#dd0045' }}
                className="sign_button">Sign Up
            </Button>
            <Button
                onClick={handleOpenSignIn}
                style={{ backgroundColor: '#dd0045' }}
                variant="contained"
                size="small"
                className="sign_button">Log In
            </Button>
            <SignUp open={openSignUp} handleClose={handleCloseSignUp} />
            <SignIn open={openSignIn} handleClose={handleCloseSignIn} />
        </nav>
    )
}

export default NavBar;