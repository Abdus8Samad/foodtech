import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Profile from './components/Profile'
import Orders from './components/Orders';
import Axios from 'axios';

export default class App extends Component{
  state = {
    data:""
  }
  componentDidMount = () =>{
    Axios.get("https://indapi.kumba.io/webdev/assignment")
    .then(response => {
      this.setState({data:response.data});
    })
    .catch(err => console.log(err));
  }
  render(){
    return(
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/profile" />
            </Route>
            <Route path="/profile" exact>
              <Profile data={this.state.data} /> 
            </Route>
            <Route path="/orders" exact>
              <Orders data={this.state.data} />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}