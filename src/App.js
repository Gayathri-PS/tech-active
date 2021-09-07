import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import EmployList from './components/employList';


function App() {
  return (<Router>
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Switch>
            <Route path="/sign-in" component={Login} />
            <Route path="/employeeList"  exact component={EmployList} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
