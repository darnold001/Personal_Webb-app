import React, {Component} from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'

class App extends Component{
  constructor(){
    super()
    this.state = {
      gneral: {}
    }
  }


About (){
  return <h2> About/</h2>
}

Redner(){
  return (
    <Router>
      <div className = 'nav'>
          <link className = 'link'> Home</link>
          <link className = 'link'> About </link>
      </div>
      <Switch>
        <Route path ='/' exact Component={Home}/>
        <Route path = '/about' Component={About}/>
      </Switch>
    </Router>
    )
  }
}