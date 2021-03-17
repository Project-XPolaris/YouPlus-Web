import React from 'react';
import './App.css';
import {SnackbarProvider} from "notistack";
import BlankLayout from "./layout/Blank";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={3}>
                    <BlankLayout/>
                </SnackbarProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
