// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Route, BrowserRouter} from "react-router-dom";
import LogginSpace from './components/LogginSpace/LogginSpace';
import Header from "./components/Header/Header";
import SigninSpace from './components/SigninSpace/SigninSpace';

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
      <main>
        <Route exact path="/" component={LogginSpace}></Route>
        <Route exact path="/subscription" component={SigninSpace}></Route>
      </main>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
