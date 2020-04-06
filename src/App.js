// import logo from './logo.svg';
import React from "react";
import { createGlobalStyle } from "styled-components";
import { Route, BrowserRouter, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ErrorMessageTokenStyled from "./style/ErrorMessageTokenStyled.style";
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

  function ErrorMessage({errorTitle, errorContent, redirectLink, errorAdvice}) {
    return (
      <ErrorMessageTokenStyled>
        <h2>{errorTitle}</h2>
        <p>{errorContent} <Link to={`${redirectLink}`}>{errorAdvice}</Link></p>
      </ErrorMessageTokenStyled>
    )
  }

  function availableToken(Component, propsFromRoute) {
    return sessionStorage.UserToken ? <Component  {...propsFromRoute} /> : <ErrorMessage errorTitle="You need to be connected." errorContent="To access to this page, please" redirectLink="/" errorAdvice="use your account." />
  }

  function unavailableToken(Component) {
    return !sessionStorage.UserToken ? <Component /> : <ErrorMessage errorTitle="You are already connected." errorContent="You need to log out if you want to do" redirectLink="/feed" errorAdvice="something else." />
  }

  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={{ ...variables }}>
          <GlobalStyle></GlobalStyle>
          <Route exact path="/" render={() => unavailableToken(Home)}></Route>
          <Route exact path="/forgotPasswordForm" render={() => unavailableToken(ForgotPasswordForm)}></Route>
          <Route exact path="/reset_pswd_form" component={ResetPswd}/>
          <Route exact path="/feed" render={() => availableToken(Feed)}/>
          <Route exact path="/user_profile" render={() => availableToken(UserProfile)}/>
          <Route exact path="/createYourCard/:icon" render={(routeProps) => availableToken(ShareYourMood, routeProps)}/>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
