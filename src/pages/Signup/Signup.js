import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Stepper, Step, StepButton, Typography } from '@material-ui/core';
import BasicInfo from './BasicInfo';
import Transportation from './Transportation';
import Food from './Food';
import House from './House';
import Results from './Results';
import useAuth from "../../components/Auth/Auth";
import { useHistory } from "react-router-dom";
import background from "../../assets/images/homepage.png";

function getStepContent(step, setActiveStep, store, setStore){
  const nextStep = () => setActiveStep(step + 1);
  const updateStore = (updates) => {
    console.log('calling update store');
    console.log(updates);
    setStore({ ...store, ...updates});
  };

  switch(step) {
    case 0:
      return <BasicInfo updateStore={updateStore} nextStep={nextStep} />;
    case 1:
      return <Transportation updateStore={updateStore} nextStep={nextStep}  />;
    case 2:
      return <Food updateStore={updateStore} nextStep={nextStep}  />;
    case 3:
      return <House updateStore={updateStore} nextStep={nextStep} />
    case 4:
      // return <Results updateStore={updateStore} nextStep={nextStep}  />;
        return <Results states={store} />
  }
}


export default function Signup() {
  const [activeStep, setActiveStep] = useState(0);
  const [store, setStore] = useState({});
  const steps = ["Basic Info", "Transportation", "Food", "House", "Results"];
  const { setUser } = useAuth();
  const history = useHistory();

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

    setUser({
      firstName: "John",
      lastName: "Doe",
    });

    // history.push("/");
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
    <div style={{backgroundImage: `url(${background})`,
      height: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}>
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
    </div>
  );
}
