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
import ResetPswd from "./components/ResetPswd/ResetPswd";
import ForgotPasswordConfirm from "./components/ForgotPasswordForm/ForgotPasswordConfirm";
// import NotAvailable from "./components/NotAvailable/NotAvailable";
import StartPage from "./components/StartPage/StartPage";
import ConfirmMail from "./components/ConfirmMail/ConfirmMail";
import SignUpSpace from "./components/SignUpSpace/SignUpSpace";
import Support from "./components/Support/Support";
import LogginSpace from "./components/LogginSpace/LogginSpace";

function App() {
  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColor};
  };
  #root {
    overflow-x: hidden;
  };
  `;

  function ErrorMessage({ errorTitle, errorContent, redirectLink, errorAdvice }) {
    return (
      <ErrorMessageTokenStyled>
        <h2>{errorTitle}</h2>
        <p>
          {errorContent} <Link to={`${redirectLink}`}>{errorAdvice}</Link>
        </p>
      </ErrorMessageTokenStyled>
    );
  }

  function availableToken(Component, propsFromRoute) {
    return sessionStorage.UserToken ? (
      <Component {...propsFromRoute} />
    ) : (
      <ErrorMessage
        errorTitle="You need to be connected."
        errorContent="To access to this page, please"
        redirectLink="/"
        errorAdvice="use your account."
      />
    );
  }

  function unavailableToken(Component) {
    return !sessionStorage.UserToken ? (
      <Component />
    ) : (
      <ErrorMessage
        errorTitle="You are already connected."
        errorContent="You need to log out if you want to do"
        redirectLink="/feed"
        errorAdvice="something else."
      />
    );
  }

  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={{ ...variables }}>
          <GlobalStyle></GlobalStyle>
          <>
            <Route exact path="/" render={() => unavailableToken(StartPage)}></Route>
            <Route exact path="/inscription" component={SignUpSpace}></Route>
            <Route exact path="/connexion" component={LogginSpace}></Route>
            <Route exact path="/confirm_mail" component={ConfirmMail}></Route>
            <Route exact path="/support" component={Support}></Route>
            <Route
              exact
              path="/forgot_password_form"
              render={() => unavailableToken(ForgotPasswordForm)}
            ></Route>
            <Route
              exact
              path="/forgot_password_confirmation"
              render={() => unavailableToken(ForgotPasswordConfirm)}
            ></Route>
            <Route exact path="/reset_pswd_form" component={ResetPswd} />
            <Route exact path="/feed" render={() => availableToken(Feed)} />
            <Route exact path="/user_profile" component={UserProfile} />
            <Route
              exact
              path="/createYourCard/:icon"
              render={routeProps => availableToken(ShareYourMood, routeProps)}
            />
          </>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
