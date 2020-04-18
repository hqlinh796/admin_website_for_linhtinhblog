import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Dashboard from './page/Dashboard/Dashboard';
import ManageBlog from './page/ManageBlog/ManageBlog';
import NewBlog from './page/NewBlog/NewBlog';


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/new-blog" component={NewBlog}/>
          <Route path="/manage-blog" component={ManageBlog}/>
          <Route path="/" component={Dashboard} />
        </Switch>
        
      </Router>
  );
}

export default App;
