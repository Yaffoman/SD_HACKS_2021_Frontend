import React from 'react';


import './Landing.css';
import {Button, Card, CardContent, CardActions, Typography, createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import background from "./homepage.png"
import teal from "@material-ui/core/colors/teal";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500]
    },
    secondary: {
      main: amber[300]
    }
  },
})


class Title extends React.Component {
  render() {
    return (
        <>
          <Typography variant={'h2'} color={"primary"}>Welcome to Carbon Counts</Typography>
        </>
    )
  }
}


class SignUp extends React.Component {
  render() {
    return (
        <>
          <Button color="secondary">
            Don't have an account?&ensp;
            <b>Sign Up</b>
          </Button>
        </>
    );
  }
}

class Login extends React.Component {
  render() {
    return (
        <>
          <Button color="primary" variant={"contained"}>
            <b>Login Here</b>
          </Button>
        </>
    );
  }
}

class InfoBoxes extends React.Component {
  render() {
    return (
        <div style={{display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly'}}>
          <Card variant={'outlined'} className='infobox'>
            <CardContent>
              <Typography variant={'h5'} color={'textPrimary'}>
                About Us
              </Typography>
              <Typography variant={'body'} color={'textSecondary'}>
                Here is some more information with details about carbon emission
              </Typography>
            </CardContent>
            <CardActions>
              <Button size={'small'} color={"primary"}>Learn More</Button>
            </CardActions>
          </Card>
          <Card variant={'outlined'} className={'infobox'}>
            <CardContent>
              <Typography variant={'h5'} color={'textPrimary'}>
                How can you help?
              </Typography>
              <Typography variant={'body'} color={'textSecondary'}>
                Here is some more information with details about carbon emission
              </Typography>
            </CardContent>
            <CardActions>
              <Button size={'small'} color={"primary"}>Learn More</Button>
            </CardActions>
          </Card>
        </div>
    );
  }
}


class Page extends React.Component {
  render() {

    return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          backgroundImage: `url(${background})`,
          height: '100vh'
        }}>
          <Title/>
          <span/>
          <span/>
          <InfoBoxes />
          <Login/>
          <SignUp/>
        </div>
    );
  }
}

class Landing extends React.Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
          <div>
            <Page/>
          </div>
        </MuiThemeProvider>
    );
  }
}


export default Landing;
