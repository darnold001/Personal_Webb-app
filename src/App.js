import React, {Component} from 'react';
import './App.css';
import bckgrndImage from './Images/BlnkNtbk.jpg'
import SocialFollow from './SocialFollow'
import Header from './Header'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

class App extends Component{
  constructor(){
    super()
    this.state = {
      HeaderToggle: false
    }
  }


About (){
  return <h2> About/</h2>
}

render(){
  return (
    
    <Router>
      <Header></Header>
      {/* <div className = 'nav'>
          <Link className = 'link' to='/'> Home</Link>
          <Link className = 'link'to='/about'> About </Link>
      </div> */}

      <div className = 'BackGroundImage' style = {{ backgroundImage: "url("+bckgrndImage+")"}} >
      <h1 className = 'HomeBanner'>Welcome to my landing page</h1>
      </div>
    
      <SocialFollow></SocialFollow>


      <Switch>
        <Route path ='/' exact Component={Home}/>
        <Route path = '/about' Component={About}/>
      </Switch>
    </Router>
    )
  }
}

export default App;