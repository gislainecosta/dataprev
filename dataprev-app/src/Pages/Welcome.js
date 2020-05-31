import React from 'react';
import {useHistory}  from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Welcome1 from "../components/Welcome1"
import Welcome2 from "../components/Welcome2"
import Welcome3 from "../components/Welcome3"
import Welcome4 from "../components/Welcome4"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'


const MyTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#1EAC1D",
            dark: "#16340c",
            contrastText: "#ffffff"
        },
    }
})

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        flexGrow: 1,
    },
});

const Welcome = () =>{
    let history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);  
    
    const irProximo = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };  
    const irAnterior = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const pularIntro = () =>{
        history.replace("/login")
    }
    let paginaMostrada = ""
    switch (activeStep) {
        case 1:
           paginaMostrada =(<Welcome2/>) 
           break;
        case 2:
            paginaMostrada =(<Welcome3 />)
            break;
        case 3:
            paginaMostrada =(<Welcome4 />)
            break;
        default:
            paginaMostrada =(<Welcome1 />)   
        break;
    }
    
    return(
        <MuiThemeProvider id="tela-well" theme={MyTheme}>

           {paginaMostrada}

            <MobileStepper
                id="botoes-steps"
                variant="dots"
                steps={4}
                size="large"
                position="static"
                activeStep={activeStep}
                className={classes.root}
                nextButton={
                  <Button id="botao-proximo" onClick={activeStep === 3 ? pularIntro : irProximo}>
                    {activeStep === 3 ? "Começar" : "Próximo"}
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                  </Button>
                }
                backButton={
                  <Button id="botao-voltar" onClick={irAnterior} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Voltar
                  </Button>
                }
            />
            <Button onClick={pularIntro} id="botão-pular">Pular</Button>

        </MuiThemeProvider>
    )
}

export default Welcome;
