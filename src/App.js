import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/common/Header';
import JoinForm from './components/homePage/JoinForm';
import Footer from './components/common/Footer';
import HomeContent from './components/homePage/HomeContent';


export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
        </div>
        <div className="container">
           <br/>
          <Switch>
              <Route exact path='/' component={ HomeContent } />
              {/* <Route path='/startInvesting' component={ StartInvestingContent } /> */}
              {/* <Route path='/raiseCapital' component={ RaiseCapitalContent } /> */}
          </Switch>
        </div>
        <div>
        <JoinForm />
        <Footer />
        </div>
      </Router>
    )
  }
}
export default App
