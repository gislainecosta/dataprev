import React, { useState, useEffect } from "react";
import './pages.css';
import { useHistory } from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/VpnKey';
import PhoneIcon from '@material-ui/icons/Phone';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '90%',
  },
}));

const MyTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#24c123",
            dark: "#16340c",
            contrastText: "#ffffff"
        },
    }
})

const Register = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return(
    <div id="tela-toda">
      <MuiThemeProvider theme={MyTheme}>  
        <h1>Criar conta</h1> 

        <form id="inputs" className={classes.root}>
            <TextField
              required
              label="Nome Completo"
              type="text"
              id="outlined-start-adornment"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start"><AccountCircle size="small" color="primary"/></InputAdornment>,
              }}
              variant="outlined"
              size="small"
            />
            <TextField
              required
              label="E-mail"
              type="text"
              id="outlined-start-adornment"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start"><EmailIcon size="small" color="primary"/></InputAdornment>,
              }}
              variant="outlined"
              size="small"
            />
            <TextField
              required
              label="Senha"
              type="text"
              id="outlined-start-adornment"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start"><LockIcon size="small" color="primary"/></InputAdornment>,
              }}
              variant="outlined"
              size="small"
            />
            <TextField
              required
              label="Confirme a Senha"
              type="text"
              id="outlined-start-adornment"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start"><LockIcon size="small" color="primary"/></InputAdornment>,
              }}
              variant="outlined"
              size="small"
            />
        </form>

        <button className="botao-entrar">Cadastre-se</button>
          
      </MuiThemeProvider>
    </div> 
  )
}

export default Register;