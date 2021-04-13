import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/layout/Navbar';
import Home from './Components/pages/Home';
import NotFound from './Components/pages/NotFound';
import User from './Components/users/User';
import Alert from './Components/layout/Alert';
import About from './Components/pages/About';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () =>{
  // componentDidMount() {
  //   axios.get('https://api.github.com/users').then(res => console.log(res.data));
  // }

  // async componentDidMount() {
  //   // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   this.setState({loading : true});
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({loading : false, users : res.data});
  // }  

    return (
      <GithubState>
        <AlertState>
          <Router>
            <div className="App">
              <Navbar/>
              <div className='container'>
                <Alert />
                <Switch>
                  <Route exact path ='/' component = {Home}/>
                  <Route exact path ="/about" component = {About}/>
                  <Route exact path ="/user/:login" component = {User}/>
                  <Route component = {NotFound}/>
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    );
}       

export default App;
 