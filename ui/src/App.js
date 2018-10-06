import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from './BooksComponent/Books';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <Route exact path="/" component={Books} />
        </Router>
      </div>
      
    );
  }
}

export default App;
