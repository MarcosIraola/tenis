import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar.view';
import CreateMatch from './pages/createMatch/createMatch.view';
import Home from './pages/home/home.view';
import Landing from './pages/landing/landing.view';
import Login from './pages/login/login.view';
import Register from './pages/register/register.view';
import { CREATEMATCH, HOME, LANDING, LOGIN, REGISTER } from './routes/routes';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path={LANDING}>
            <Landing/>
          </Route>
          <Route path={LOGIN}>
            <Login/>
          </Route>
          <Route path={REGISTER}>
            <Register/>
          </Route>
          <Route exact path={HOME}>
            <Home/>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
