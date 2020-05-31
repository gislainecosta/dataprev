import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Welcome1 from "../comnponents/Welcome1"
import Welcome2 from "../comnponents/Welcome2"
import Welcome3 from "../comnponents/Welcome3"
import Welcome4 from "../comnponents/Welcome4"
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
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
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
        <MuiThemeProvider theme={MyTheme}>

           {paginaMostrada}

            <MobileStepper
                variant="dots"
                steps={4}
                size="large"
                position="static"
                activeStep={activeStep}
                className={classes.root}
                nextButton={
                  <Button onClick={handleNext} disabled={activeStep === 3}>
                    Próximo
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                  </Button>
                }
                backButton={
                  <Button onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Anterior
                  </Button>
                }
            />

        </MuiThemeProvider>
    )
}

export default Welcome;
