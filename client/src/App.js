import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

//----------------------Component Imports--------------------------------------

import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
// import About from './components/About';

import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <header className='App-header'>
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/Register' component={Register} />
            <Route path='/Login' component={Login} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
