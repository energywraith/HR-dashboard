import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Nav from './components/Nav';
import './App.scss'

const App = () => {
  const [xsrfToken, setXsrfToken] = useState(null)
  const [company, setCompany] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      const cookie = await axios.get('/sanctum/csrf-cookie')
      const token = cookie.config.headers['X-XSRF-TOKEN']
      setXsrfToken(token)

      const company = await axios.get('/api/user', {
        headers: {
          'X-XSRF-TOKEN': token
        }
      })
      setCompany(company.data)
    }

    fetch()
  }, [])

  return (
    <div className='app-container'>
      <Header companyName={company && company.name} />
      <Nav />

      <Switch>
        <Route path='/dashboard/company'>
          <h1>Company</h1>
        </Route>
        <Route path='/dashboard/application-form'>
          <h1>Application form</h1>
        </Route>
        <Route path='/dashboard/applications'>
          <h1>Received applications</h1>
        </Route>
        <Route path='/dashboard/' exact>
          <h1>Home</h1>
        </Route>
        <Route path='/dashboard/404'>
          <h1> Page does not exist </h1>
        </Route>
        <Route path='*'>
          <Redirect to="404" />
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