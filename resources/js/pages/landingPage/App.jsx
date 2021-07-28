import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LandingPage from '../../layouts/landingPage';
import Header from '../../components/Header';
import './App.scss'
import LoginSection from '../../views/LoginSection';

const App = () => {
  return (
    <LandingPage>
      <Switch>
        <Route path='/login'>
          <LoginSection />
        </Route>
        <Route path='/register'>

        </Route>
        <Route path='/'>
          <section className='d-flex flex-column w-100'>
            <Header headingLevel='h1'
              text='Managing job applications has become much easier.'
              className='p-5 display-4 text-light text-center align-self-center'
            />
            <div className='main-buttons d-flex align-self-center mt-1'>
              <button className='btn btn-lg get-started'> Get started </button>
              <button className='btn btn-lg user'> Im user </button>
            </div>
          </section>
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