import useStyles from './styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from 'react';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { useState, useEffect } from 'react';

import './css/SignUp.css';

const validationSchema = yup.object({
    first_name: yup
        .string('הכנס שם פרטי')
        .max(15, 'מקסימום 15 תווים')
        .min(2, 'מינימום 2 תווים')
        .required('חובה להזין שם פרטי'),
    last_name: yup
        .string('הכנס שם משפחה')
        .max(15, 'מקסימום 15 תווים')
        .min(2, 'מינימום 2 תווים')
        .required('חובה להזין שם משפחה'),
    email: yup
        .string('הכנס כתובת מייל')
        .email('כתובת מייל לא חוקית')
        .required('חובה להזין כתובת מייל'),
    password: yup
        .string('הכנס סיסמא')
        .min(6, 'סיסמא חייבת להכיל מינימום 6 תווים')
        .required('חובה להזין סיסמא'),
});

const SignUp = (props) => {
    const history = useHistory();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [showError, setShowError] = React.useState(false);

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            handleSubmit(values);
        },
    });

    const handleSubmit = async (values) => {
        try {
            let response = await axios.post('http://localhost:3001/user/signUp', formik.values);
            if (response.data.ok) {
                toggleShowError();
                history.push({ pathname: "/userAccount", state: { user: response.data.user }, });
            }
            else {
                alert(response.data.message);
                toggleShowError();
            }
            console.log(response);
        }
        catch (e) {
            alert('catch');
            console.log(e);
        }
    }

    const toggleShowError = () => {
        showError ? setShowError(false) : setShowError(true);
    }

    return (
        <div className="wrap_sign_up">
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <div className="sign_up_form">
                    <div className="wrap_title">
                        <h2>Create an Account</h2>
                    </div>
                    <form dir="rtl" onSubmit={formik.handleSubmit}>
                        <Alert severity="error"
                            className={showError ? "error_elem_show" : "error_elem_hide"}>
                            משתמש זה קיים במערכת!
                            <label className="signIn_link"> לכניסה לחשבון קיים לחץ כאן</label>
                        </Alert>
                        <TextField
                            id="first_name"
                            name="first_name"
                            label="First Name"
                            variant="standard"
                            InputLabelProps={{
                                classes: { root: classes.root }
                            }}
                            error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                            helperText={formik.touched.first_name && formik.errors.first_name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.first_name}
                        />
                        <br />
                        <br />
                        <TextField
                            id="last_name"
                            name="last_name"
                            label="Last Name"
                            variant="standard"
                            InputLabelProps={{
                                classes: { root: classes.root }
                            }}
                            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                            helperText={formik.touched.last_name && formik.errors.last_name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.last_name}
                        />
                        <br />
                        <br />
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            variant="standard"
                            InputLabelProps={{
                                classes: { root: classes.root }
                            }}
                            helperText={formik.touched.email && formik.errors.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        <br />
                        <br />
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            InputLabelProps={{
                                classes: { root: classes.root }
                            }}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        <br />
                        <br />
                        <Button
                            style={{ backgroundColor: '#dd0045', color: '#000000' }}
                            color="primary"
                            variant="contained"
                            type="submit">Sign Up</Button>

                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default SignUp;