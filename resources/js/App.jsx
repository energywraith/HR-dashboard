import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import './App.scss'

const App = () => {
  return (
    <div className='app-container'>
      <Nav />

      <Switch>
        <Route path='/dashboard/company'>
          company
        </Route>
        <Route path='/dashboard/applications'>
          applications
        </Route>
        <Route path='/dashboard/'>
          home
        </Route>
      </Switch>
    </div>
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