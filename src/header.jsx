import React, { Component } from 'react'
import './App.css';
export default class Header extends Component{
    constructor(props){
        super(props)
        this.state ={props}
    }
    
   
    openHeader =()=>{
        // this.setState({ HeaderToggle: !this.state})
         console.log("I was clicked")
      }

      render(){   
        return(
            <div className = 'nav'>
              <button className = 'menu' onClick ={this.openHeader()}>Menu</button>
            {/* <Link className = 'link' to='/'> Home</Link>
            <Link className = 'link'to='/about'> About </Link> */}
        </div>
    )
  }
}   