import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Stepper, Step, StepButton, Typography } from '@material-ui/core';
import BasicInfo from './BasicInfo';
import Transportation from './Transportation';
import Food from './Food';
import Home from './House';
import Results from './Results';

function getStepContent(step, setActiveStep, store, setStore){
  const nextStep = () => setActiveStep(step + 1);
  const updateStore = (updates) => setStore({ ...store, ...updates});

  switch(step) {
    case 0:
      return <BasicInfo updateStore={updateStore} nextStep={nextStep} />;
    case 1:
      return <Transportation updateStore={updateStore} nextStep={nextStep}  />;
    case 2:
      return <Food updateStore={updateStore} nextStep={nextStep}  />;
    case 3:
      return <Home updateStore={updateStore} nextStep={nextStep} />
    case 4:
      // return <Results updateStore={updateStore} nextStep={nextStep}  />;
        console.log(store)
        return <Results states={store} />
  }
}


export default function Signup() {
  const [activeStep, setActiveStep] = useState(0);
  const [store, setStore] = useState({});
  const steps = ["Basic Info", "Transportation", "Food", "Home", "Results"];

  const submit = async () => {
    const data = await fetch('http://127.0.0.1:5000/signup', { // TODO replace url here
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(store),
    }).then((response) => response.json());
  }

  useEffect(() => {
    if (activeStep === steps.length - 1) {
      console.log(store);
      try {
        submit();
      } catch (err) {
        console.log(err);
      }
    }
  }, [activeStep]);

  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={() => setActiveStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
      </Stepper>

      {getStepContent(activeStep, setActiveStep, store, setStore)}
    </>
  );
}
