import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import styles from './Signup.module.css';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const SignupSchema = Yup.object().shape({
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

function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Grid container direction={'column'} alignItems='center' spacing={2}>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          setIsSubmitting(true);

          // TODO here query backend

          setIsSubmitting(false);
        }}
      >
        {({ errors, touched, submitForm }) => (
          <>
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

            <Box mt={2} style={{ width: "100%" }}>
              {isSubmitting && <LinearProgress />}
            </Box>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Submit
              </Button>
            </Grid>
          </>
        )}
      </Formik>
    </Grid>
  );
}

export default function Signup() {
  return (
    <>
      <div className={styles.wrapper}>
        <SignupForm />

        <div className={styles.login}>
          Or <Link component={RouterLink} to='/login' color="inherit">
              Login Here
            </Link>
        </div>
      </div>
    </>
  )
}