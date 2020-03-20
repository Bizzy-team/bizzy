// import logo from './logo.svg';
import React from "react";
import { createGlobalStyle } from "styled-components";
import { Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Feed from "./components/Feed/Feed";
import UserProfile from "./components/UserProfile/UserProfile";
import ShareYourMood from "./components/YourMood/ShareYourMood";
import variables from "./variables";
import Home from "./components/Home/Home";

function App() {
  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColor};
  };
  `;

  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={{ ...variables }}>
          <GlobalStyle></GlobalStyle>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/feed" component={Feed}></Route>
          <Route exact path="/user_profile" component={UserProfile}></Route>
          <Route exact path="/createYourCard/:icon" component={ShareYourMood}></Route>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
