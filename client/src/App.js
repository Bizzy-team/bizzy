// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import LogginSpace from './components/LogginSpace/LogginSpace';
import SigninSpace from './components/SigninSpace/SigninSpace';
import Feed from './components/Feed/Feed';
import UserProfile from "./components/UserProfile/UserProfile";
import { ThemeProvider } from "styled-components";
import variables from "./variables";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={{...variables}}>
          <Route exact path="/" component={LogginSpace}></Route>
          <Route exact path="/subscription" component={SigninSpace}></Route>
          <Route exact path="/feed" component={Feed}></Route>
          <Route exact path="/user_profile" component={UserProfile}></Route>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
