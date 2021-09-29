import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import NotFound404 from './app/views/NotFound404.view';
import HomeView from './app/views/Home.view';
import ContactView from './app/views/Contact.view';
import UserView from './app/views/User.view';
import CalcView from './app/views/Calc.view';
import NavBar from './app/components/NavBar';


ReactDOM.render(
  <React.StrictMode>
    <div>
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route path={'/'} exact  component={HomeView}/>
        <Route path={'/contato'} exact component={ContactView} />
        <Route path={'/usuarios/:userId'} component={UserView} />
        <Route path={'/calc/:a/:b'} component={CalcView}/>
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();