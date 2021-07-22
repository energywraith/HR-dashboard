import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import './App.scss'

const App = () => {
  return (
    <div className='app-container'>
      <Nav />
    </div>
  );
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}