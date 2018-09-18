import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const App = function() {
  return <div>Hi!</div>;
};

const root = document.querySelector('.container');
ReactDOM.render(<App />, root);