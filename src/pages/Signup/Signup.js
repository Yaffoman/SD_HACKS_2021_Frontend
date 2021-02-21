import React, { useState } from 'react';
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
      return <Results updateStore={updateStore} nextStep={nextStep}  />;
  }
}


export default function Signup() {
  const [activeStep, setActiveStep] = useState(0);
  const [store, setStore] = useState({});
  const steps = ["Basic Info", "Transportation", "Food", "Home", "Results"];

  const submit = () => {
    console.log("waddup dude");
    console.log()
  }

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
