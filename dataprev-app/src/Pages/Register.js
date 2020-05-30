import React, { useState, useEffect } from "react";
import './pages.css';
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Logo from '../img/logo.png'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'


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
            main: "#1EAC1D",
            dark: "#16340c",
            contrastText: "#ffffff"
        },
    }
})

const Register = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        password: '',
        user: '',
        showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    
    return(
        <div id="tela-toda">
            <MuiThemeProvider theme={MyTheme}>
                
    
                <h1>Criar conta</h1> 
              
                <form id="inputs" className={classes.root}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-user">CPF</InputLabel>
                      <OutlinedInput
                        required
                        id="outlined-adornment-user"
                        type={"text"}
                        value={values.user}
                        onChange={handleChange('user')}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton edge="end" >
                              <AccountCircle color="primary" />
                            </IconButton>
                          </InputAdornment>
                        }
                        labelWidth={30}
                      />
                    </FormControl>
    
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                      <OutlinedInput
                        required
                        fullwidth
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {values.showPassword ? <Visibility color="primary"/> : <VisibilityOff color="primary"/>}
                            </IconButton>
                          </InputAdornment>
                        }
                        labelWidth={50}
                        
                      />
                    </FormControl>
                </form>
                <a href="#">Esqueceu a senha?</a>
                <button className="botao-entrar">ENTRAR</button>
                <a href="#"><h3 className="conta">Não tem conta? <span className="criar">Criar Agora</span></h3></a>
            </MuiThemeProvider>
        </div> 
    )
}

export default Register;