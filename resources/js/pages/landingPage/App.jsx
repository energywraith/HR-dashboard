import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../../layouts/landingPage';
import Home from '../../views/LandingPage/Home';
import Login from '../../views/LandingPage/Login';
import Register from '../../views/LandingPage/Register';
import './App.scss'

const App = () => {
  return (
    <LandingPage>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </LandingPage>
  );
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('app')
  );
}