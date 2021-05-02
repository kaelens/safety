import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Form from './pages/Form';
import Nav from './components/Nav';

class App extends Component {
  getRoutes = () => {
  return (
    <Switch>
      <Route exact path = "/">
        <Home />
      </Route>
      <Route exact path = "/About">
        <About />
      </Route>
      <Route exact path = "/Contact">
        <Contact />
      </Route>
      <Route exact path = "/Form">
        <Form />
      </Route>
      <Route path = "*">
        <div>
          <h1> Error 404 </h1>
          <h1>This page does not exist.</h1>
        </div>
      </Route>
    </Switch>
  );
  }

  render() { 
    return (
      <div>
        <Router>
          <Nav />
          <div>
            {this.getRoutes()}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
