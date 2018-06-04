import React, { Component } from 'react';
import '../css/Row.css';

class Row extends Component {
  render() {
    return (
      <div className="Row">
        <header className="Row-header">
          <img src={logo} className="Row-logo" alt="logo" />
          <h1 className="Row-title">Welcome to React</h1>
        </header>
        <p className="Row-intro">
          To get started, edit <code>src/Row.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Row;
