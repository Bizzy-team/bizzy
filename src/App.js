// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Route, BrowserRouter} from "react-router-dom";
import LogginSpace from './components/LogginSpace/LogginSpace';
import SigninSpace from './components/SigninSpace/SigninSpace';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Route exact path="/" component={LogginSpace}></Route>
      <Route exact path="/subscription" component={SigninSpace}></Route>
      <Route exact path="/feed" component={Feed}></Route>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
