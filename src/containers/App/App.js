import React, { Component } from 'react';
import logo from '../../logo.svg';
import styled, {keyframes, ThemeProvider } from 'styled-components';

import primaryTheme from '../../theme/primaryTheme';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import Button from '../../components/Button/Button';


const AppWrapper = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
`;

const AppTitle = styled.h1`
    font-size: 1.5em;
`;

const AppIntro = styled.p`
    font-size: large;
`;

const rotate360 = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const AppLogo = styled.img.attrs({
    src: logo,
    alt: 'logo'
})`
      animation: ${rotate360} infinite 20s linear;
      height: 80px;
`;

const THEME = createMuiTheme({
    typography: {
        "fontFamily":"Lato",
        "fontWeight": "400",
        "fontSize": "16px",
        "lineHeight": "1.7"
    }
});

class App extends Component {

    state = {
      theme: primaryTheme
    };

  render() {
    return (
        <CssBaseline>
            <MuiThemeProvider theme={THEME}>
                <ThemeProvider theme={this.state.theme}>
                    <AppWrapper>
                        <AppHeader>
                            <AppLogo />
                            <AppTitle>Welcome to React</AppTitle>
                        </AppHeader>
                        <AppIntro>
                            To get started, edit <code>src/App.js</code> and save to reload.
                        </AppIntro>
                        <Button>primary button</Button>
                    </AppWrapper>
                </ThemeProvider>
            </MuiThemeProvider>
        </CssBaseline>
        

    );
  }
}

export default App;
