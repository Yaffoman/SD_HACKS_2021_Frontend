import React from "react";
import { TextField, InputAdornment, Grid, Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";

export default function House({ updateStore, nextStep }) {
  return (
    <Grid container direction={"column"} alignItems="center" spacing={2}
      style={{
        marginTop: "20px",
        marginBottom: "20px",
        textAlign: "center",
        maxWidth: "500px",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
      <Formik
        initialValues={{
          occupants: 0,
          electricity: 0,
          naturalGas: 0,
          fuelOil: 0,
          propane: 0,
        }}
        onSubmit={values => {
          updateStore(values);

          nextStep();
        }}
      >
        {({ submitForm }) => (
          <>
            <Field
              component={TextField}
              name="occupants"
              type="number"
              label="Occupants"


              fullWidth
            />

            <Field
              component={TextField}
              name="electricity"
              type="number"
              label="Electricity Bill in Dollars"
              InputProps={{startAdornment:
                      <InputAdornment position="start">$</InputAdornment>
              }}
              fullWidth
            />

            <Field
              component={TextField}
              name="naturalGas"
              type="number"
              label="Natural Gas"
              InputProps={{startAdornment:
                      <InputAdornment position="start">$</InputAdornment>
              }}
              fullWidth
            />

            <Field
              component={TextField}
              name="fuelOil"
              type="number"
              label="Fuel Oil"
              InputProps={{startAdornment:
                      <InputAdornment position="start">$</InputAdornment>
              }}
              fullWidth
            />

            <Field
              component={TextField}
              name="propane"
              type="number"
              label="Propane"
              InputProps={{startAdornment:
                      <InputAdornment position="start">$</InputAdornment>
              }}
              fullWidth
            />

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={submitForm}
              >
                Create Account
              </Button>
            </Grid>
          </>
        )}
      </Formik>
    </Grid>
  );
}
