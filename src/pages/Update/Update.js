import React from 'react';
import {Router} from 'react-router-dom'

import styles from './Update.css';
import {Button, Card, CardContent, CardActions, Typography, createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import teal from "@material-ui/core/colors/teal";
import amber from "@material-ui/core/colors/amber";
import {NativeSelect} from "@material-ui/core";

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
          <Typography variant={'h2'} color={"primary"}>Update Your Daily Carbon Footprint</Typography>
        </>
    )
  }
}

class EmissionSource extends React.Component {
    render(){
        return(
            <>
                <Card variant={'outlined'} className='sourcebox'>
                    <CardContent>
                        <Typography variant={'h5'} color={'textPrimary'}>
                            {this.props.title}
                        </Typography>
                        <InputLabel htmlFor={`select${this.props.title}`}>Select Type</InputLabel>
                        <NativeSelect>
                            <option value='Car'>Car</option>
                            <option value='Bus'>Bus</option>
                            <option value='Train'>Train</option>
                            <option value='Rideshare'>Rideshare</option>
                            <option value='E-Scooter'>E-Scooter</option>
                            <option value='Motorcycle'>Motorcycle</option>
                        </NativeSelect>
                    </CardContent>
                    <CardActions>
                        <Button size={'small'} color={"primary"}>Learn More</Button>
                    </CardActions>
                </Card>
            </>
        )
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
            <EmissionSource title={"Transportation"} />
            <EmissionSource title={"Food"} />
            <EmissionSource title={"Appliances"} />
            <EmissionSource title={"Misc"} />
        </div>
    );
  }
}

class Update extends React.Component {
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


export default Update;
