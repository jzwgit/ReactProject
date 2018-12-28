import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Login from './my/login.js';
import Register from './my/register.js';
import LearnMore from './my/unfinished.js';
import Todo from './my/todo.js';

class App extends Component {
  render() {
    return (
      <Router>
	<div className="App">
	  <Route exact path="/" component={Todo} />
	  <Route path="/login" component={Login}/>
	  <Route path="/register" component={Register} />
	  <Route path="/unfinished" component={LearnMore} />
	  <Route path="/todo" component={Todo}/>
	</div>
      </Router>
    );
  }
}

export default App;
