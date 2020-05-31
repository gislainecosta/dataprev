import React, { useState, useEffect } from "react";
import './pages.css';
import { useHistory } from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/AttachMoney';
import PhoneIcon from '@material-ui/icons/Phone';
import CpfIcoin from "@material-ui/icons/Payment";
import CakeIcon from "@material-ui/icons/Cake";
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

const Calculadora = () => {
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
        <h1 id="titulo-registre">Entre suas Informações</h1> 

        <p>Entre sua idade atual</p>
        <form id="inputs" className={classes.root}>
            <TextField
              type="text"
              id="outlined-start-adornment"
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
              size="small"
            />
             <p>Entre a idade que voce planeja aposentar</p>
            <TextField
              required
              type="text"
              id="outlined-start-adornment"
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
              size="small"
            />
           <p>Quanto voce tem salvado para aposentadoria</p>
            <TextField
              required
              type="text"
              id="outlined-start-adornment"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start"><LockIcon size="small" color="primary"/></InputAdornment>,
              }}
              variant="outlined"
              size="small"
            />
             <p>Quanto voce ira contribuir mensalmente</p>
            <TextField
              required
              type="text"
              id="outlined-start-adornment"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: <InputAdornment position="start"><LockIcon size="small" color="primary"/></InputAdornment>,
              }}
              variant="outlined"
              size="small"
            />
              <p>Quanto você acha que será seu retorno anual?</p>
            <TextField
              type="text"
              id="outlined-start-adornment"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                endAdornment: <InputAdornment position="start"><CpfIcoin size="small" color="primary"/></InputAdornment>,
              }}
              variant="outlined"
              size="small"
            />
          
           
        </form>

        <button className="botao-cadastro">Calcular </button>
          
      </MuiThemeProvider>
    </div> 
  )
}

export default Calculadora;