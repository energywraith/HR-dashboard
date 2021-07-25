import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import './App.scss'

import Dashboard from './layouts/Dashboard';
import CompanyDetails from './views/CompanyDetails';
import Positions from './views/Positions';

const App = () => {
  const [company, setCompany] = useState(null)
  const [positions, setPositions] = useState([])

  useEffect(() => {
    const fetchInitData = async () => {
      const companyResponse = await axios.get('/api/user')
      setCompany(companyResponse.data)

      const positionsResponse = await axios.get(`/api/positions/${companyResponse.data.id}`)
      setPositions(positionsResponse.data)
    }

    fetchInitData()
  }, [])

  return (
    <Dashboard>
      <Switch>
        <Route path='/dashboard/company-details'>
          <CompanyDetails company={company} setCompany={setCompany} />
        </Route>
        <Route path='/dashboard/application-form'>
          <h1>Application form</h1>
        </Route>
        <Route path='/dashboard/positions'>
          <Positions company={company} positions={positions} setPositions={setPositions} />
        </Route>
        <Route path='/dashboard/applications'>
          <h1>Received applications</h1>
        </Route>
        <Route path='/dashboard/' exact>
          <h1> Hello {company && company.name} </h1>
        </Route>
        <Route path='/dashboard/404'>
          <h1> Page does not exist </h1>
        </Route>
        <Route path='*'>
          <Redirect to="404" />
        </Route>
      </Switch>
    </Dashboard>
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