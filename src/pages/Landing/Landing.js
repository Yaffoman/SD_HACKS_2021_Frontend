import React from 'react';
import './Landing.css';
import {Button, Card, CardContent, CardActions, Typography} from '@material-ui/core'
import background from "../../assets/images/homepage.png"
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';


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
            <Link component={RouterLink} to='/signup' color="inherit">
              <b>Signup</b>
            </Link>
          </Button>
        </>
    );
  }
}


class Login extends React.Component {
  render() {
    return (
      <Button color="primary" variant={"contained"}>
        <Link component={RouterLink} to='/login' color="inherit">
          <b>Login Here</b>
        </Link>
      </Button>
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
              <Typography variant={'body1'} color={'textSecondary'}>
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
              <Typography variant={'body1'} color={'textSecondary'}>
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
      <div>
        <Page/>
      </div>
    );
  }
}


export default Landing;
