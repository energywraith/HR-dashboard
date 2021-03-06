import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from '../../layouts/Dashboard';
import Home from '../../views/Dashboard/Home';
import CompanyDetails from '../../views/Dashboard/CompanyDetails';
import ApplicationForm from '../../views/Dashboard/ApplicationForm';
import Positions from '../../views/Dashboard/Positions';
import Applications from '../../views/Dashboard/Applications';

const App = () => {
  const [company, setCompany] = useState(null)
  const [positions, setPositions] = useState([])
  const [formFields, setFormFields] = useState([])
  const [applications, setApplications] = useState([])

  useEffect(() => {
    const fetchInitData = async () => {
      const companyResponse = await axios.get('/api/user')
      setCompany(companyResponse.data)
      setFormFields(companyResponse.data.application_form)

      const positionsResponse = await axios.get(`/api/positions/${companyResponse.data.id}`)
      setPositions(positionsResponse.data)

      const applicationsResponse = await axios.get(`/api/applications/${companyResponse.data.id}`,)
      setApplications(applicationsResponse.data)
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
          <ApplicationForm company={company} fields={formFields} setFields={setFormFields} />
        </Route>
        <Route path='/dashboard/positions'>
          <Positions company={company} positions={positions} setPositions={setPositions} />
        </Route>
        <Route path='/dashboard/applications'>
          <Applications applications={applications} setApplications={setApplications} positions={positions} />
        </Route>
        <Route path='/dashboard/' exact>
          <Home company={company} applications={applications} />
        </Route>
        <Route path='*'>
          <h1> Page does not exist </h1>
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