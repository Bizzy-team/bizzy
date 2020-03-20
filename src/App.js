// import logo from './logo.svg';
import React from "react";
// import { createGlobalStyle } from "styled-components";
import { Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import LogginSpace from "./components/LogginSpace/LogginSpace";
import SigninSpace from "./components/SigninSpace/SigninSpace";
import Feed from "./components/Feed/Feed";
import UserProfile from "./components/UserProfile/UserProfile";
import ShareYourMood from "./components/YourMood/ShareYourMood";
import variables from "./variables";

function App() {
  // const GlobalStyle = createGlobalStyle`
  // body {
  //   background-color: ${props => props.theme.backgroundColor};
  //   overflow-x: hidden;
  // };
  // `;

  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={{ ...variables }}>
          {/* <GlobalStyle></GlobalStyle> */}
          <Route exact path="/" component={LogginSpace}></Route>
          <Route exact path="/subscription" component={SigninSpace}></Route>
          <Route exact path="/feed" component={Feed}></Route>
          <Route exact path="/user_profile" component={UserProfile}></Route>
          <Route exact path="/createYourCard/:icon" component={ShareYourMood}></Route>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
