import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Landing from './Landing/Landing'
const App = () => {
  return (
      <Router>
      <Switch>
              <Route exact path="/resume" component={Landing}/>
      </Switch>           
      </Router>


  )
}

ReactDOM.render(
  <App/>, document.querySelector('#root')
)
