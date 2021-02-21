import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import Grid from '@material-ui/core/Grid';
import styles from './Signup.module.css';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Button } from '@material-ui/core';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  username: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short! You need a secure password.')
    .max(50, 'Too Long!')
    .required('Required'),
  confirmPassword: Yup.string()
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

function SignupForm({ updateStore, nextStep }) {
  return (
    <Grid container direction={'column'} alignItems='center' spacing={2}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          updateStore(values);
          console.log("HERE");
          nextStep();
        }}
      >
        {({ errors, touched, submitForm }) => (
          <>
            <Field
              component={TextField}
              name="firstName"
              label="First Name"
              fullWidth
            />

            <Field
              component={TextField}
              name="lastName"
              label="Last Name"
              fullWidth
            />  
            
            <Field
              component={TextField}
              name="username"
              label="Username"
              fullWidth
            />

            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
              fullWidth
            />

            <Field
              component={TextField}
              name="password"
              type="password"
              label="Password"
              fullWidth
            />

            <Field
              component={TextField}
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              fullWidth
            />

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={submitForm}
              >
                Next
              </Button>
            </Grid>
          </>
        )}
      </Formik>
    </Grid>
  );
}

export default function BasicInfo(props) {
  return (
    <>
      <div className={styles.wrapper}>
        <SignupForm {...props} />

        <div className={styles.login}>
          Or <Link component={RouterLink} to='/login' color="inherit">
              Login Here
            </Link>
        </div>
      </div>
    </>
  )
}