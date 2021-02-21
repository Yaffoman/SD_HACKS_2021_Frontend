import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import styles from "./Login.module.css";
import { Link as RouterLink, useHistory } from "react-router-dom";
import Link from "@material-ui/core/Link";
import useAuth from "../../components/Auth/Auth";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Too Short! You need a secure password.')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email("Invalid email").required("Required"),
});

function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setUser } = useAuth();
  const history = useHistory();

  return (
    <Grid container direction={"column"} spacing={4}>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          setIsSubmitting(true);

          try {
            const data = await fetch('http://127.0.0.1:5000/login', { // TODO put URL here
              method: "POST",
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              headers: {
                "Content-Type": "application/json",
              },
              redirect: "follow",
              referrerPolicy: "no-referrer",
              body: JSON.stringify(values),
            }).then((response) => response.json());

            console.log(data);
            const { password, email } = values;
            setUser({
              password,
              email,
              firstName: "John",
              lastName: "Doe",
            });

            history.push("/home");
          } catch (err) {
            console.log(err);
          }

          setIsSubmitting(false);
        }}
      >
        {({ errors, touched, submitForm }) => (
          <>
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

            <Box mt={2}>{isSubmitting && <LinearProgress />}</Box>

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
          Or{" "}
          <Link component={RouterLink} to="/signup" color="inherit">
            Signup Here
          </Link>
        </div>
      </div>
    </>
  );
}
