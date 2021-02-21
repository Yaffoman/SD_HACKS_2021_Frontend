import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import styles from './Login.module.css';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Grid container direction={'column'} spacing={4}>
      <Formik
        initialValues={{
          username: '',
          email: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          console.log("HERE")
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

            <Box mt={2}>
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

export default function Login() {
  return (
    <>
      <div className={styles.wrapper}>
        <LoginForm />

        <div className={styles.signUp}>
          Or <Link component={RouterLink} to='/signup' color="inherit">
              Signup Here
            </Link>
        </div>
      </div>
    </>
  )
}