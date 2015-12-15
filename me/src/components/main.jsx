"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router'
import createHistory from 'history/lib/createHashHistory';


class App  extends React.Component{
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class Inbox extends React.Component{
  render() {
    return (
        <div>
            Inbox
            <Link to="/">Index</Link>
        </div>
        )
    }
}
class Message extends React.Component{
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
}


class About extends React.Component{
    render(){
    return (
      <div>
        About
      </div>
    )
  }
}

var history = createHistory({
  queryKey: false
});





ReactDOM.render((
   <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
)  , document.getElementById('me-container'));