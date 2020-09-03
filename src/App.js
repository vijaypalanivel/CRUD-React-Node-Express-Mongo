import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './component/createUser';
import Edit from './component/eidtUser';
import Users from './component/users';


function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={'/'} className="navbar-brand">Employee</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={'/create'} className="nav-link">Create</Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
    <Switch>
      <Route exact path='/' component={Users} />
      <Route exact path='/create' component={Create} />
      <Route path='/edit/:id' component={Edit} />
    </Switch>
  </Router>
  );
}

export default App;
