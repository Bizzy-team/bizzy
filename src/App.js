// import logo from './logo.svg';
import React from "react";
import { createGlobalStyle } from "styled-components";
import { Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ForgotPasswordForm from "./components/ForgotPasswordForm/ForgotPasswordForm";
import Feed from "./components/Feed/Feed";
import UserProfile from "./components/UserProfile/UserProfile";
import ShareYourMood from "./components/YourMood/ShareYourMood";
import variables from "./variables";
import Home from "./components/Home/Home";
import ResetPswd from "./components/ResetPswd/ResetPswd";

function App() {
  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColor};
  };
  #root {
    overflow-x: hidden;
  };
  `;

  console.log(sessionStorage);
  

  return (
    <React.Fragment>
      <BrowserRouter forceRefresh={true}>
        <ThemeProvider theme={{ ...variables }}>
          <GlobalStyle></GlobalStyle>
          {
            sessionStorage.UserToken ?  (
              <>
                <Route exact path="/feed" component={Feed}></Route>
                <Route exact path="/user_profile" component={UserProfile}></Route>
                <Route exact path="/createYourCard/:icon" component={ShareYourMood}></Route>
              </>
              ) : (
                <>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/forgotPasswordForm" component={ForgotPasswordForm}></Route>
                  <Route exact path="/reset_pswd_form" component={ResetPswd}></Route>
                </>
                )
            }
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
