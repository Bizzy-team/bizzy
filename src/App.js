import React from "react";
import { createGlobalStyle } from "styled-components";
import { Route, BrowserRouter, Link, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { connect } from 'react-redux';

import http from './utlis/http';
import { populateUser } from './store/actions/creator';
import ForgotPasswordForm from "./components/ForgotPasswordForm/ForgotPasswordForm";
import Home from "./components/Home/Home";
import UserProfile from "./components/UserProfile/UserProfile";
// import ShareYourMood from "./components/YourMood/ShareYourMood";
import variables from "./variables";
import ResetPswd from "./components/ResetPswd/ResetPswd";
import ForgotPasswordConfirm from "./components/ForgotPasswordForm/ForgotPasswordConfirm";
// import NotAvailable from "./components/NotAvailable/NotAvailable";
import StartPage from "./components/StartPage/StartPage";
import ConfirmMail from "./components/ConfirmMail/ConfirmMail";
import SignUpSpace from "./components/SignUpSpace/SignUpSpace";
import Support from "./components/Support/Support";
import LogginSpace from "./components/LogginSpace/LogginSpace";
import HomeAboutCard from "./components/Home/HomeAboutCard";

function App(props) {
  React.useEffect(function () {
    if (localStorage.getItem('token')) {
      (async function () {
        try {
          const { data } = await http.get('auth/refresh');
          props.populateUser(data.user);
        } catch (error) {
          throw error;
        }
      })()
    };

  }, []);

  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColor};
  };
  #root {
    overflow-x: hidden;
  };
  `;

  function tokenCheck(Component, checkToken, redirectPath, propsFromRoute) {
    if (checkToken && localStorage.getItem('token')) return <Component {...propsFromRoute} />
    if (!checkToken && !localStorage.getItem('token')) return <Component {...propsFromRoute} />

    return <Redirect to={redirectPath}></Redirect>
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={{ ...variables }}>
        <GlobalStyle></GlobalStyle>
        <Switch>
          <Route exact path="/" component={StartPage}></Route>
          <Route exact path="/inscription" component={SignUpSpace}></Route>
          <Route exact path="/connexion" render={(props) => tokenCheck(LogginSpace, false, '/home', props)}></Route>
          <Route exact path="/confirm_mail" component={ConfirmMail}></Route>
          <Route exact path="/support" component={Support}></Route>
          <Route
            exact
            path="/forgot_password_form"
            component={ForgotPasswordForm}
          ></Route>
          <Route
            exact
            path="/forgot_password_confirmation"
            component={ForgotPasswordConfirm}
          ></Route>
          <Route exact path="/reset_pswd_form" component={ResetPswd} />
          <Route exact path="/home" render={(props) => tokenCheck(Home, true, '/connexion', props)} />
          <Route strict path="/aboutCard/:cardId" component={HomeAboutCard} />
          <Route strict path="/user/:name" component={UserProfile} />
        </Switch>
        {/* <Route
              exact
              path="/createYourCard/:icon"
              render={routeProps => availableToken(ShareYourMood, routeProps)}
            /> */}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default connect(null, { populateUser })(App);
