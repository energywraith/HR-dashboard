import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../../layouts/landingPage';
import LandingPageHome from '../../views/LandingPageHome';
import Login from '../../views/Login';
import Register from '../../views/Register';
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
          <LandingPageHome />
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