import { Component } from 'react';
import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import {Books, Day, Details, Header,Home} from "./components/index"
import "./App.css"


class App extends Component{
  render(){
    return(
      <>
      
          <Router>
            <Header/>
        
          <Switch>
            <Route path="/books" component={Books} exact/>
            <Route path="/books/:id" component={Details}/>
            <Route path="/day" component={Day}/>
            <Route path="/" component={Home}/>
          </Switch> 
          </Router>
      </>
    )
  }
}

export default App;
