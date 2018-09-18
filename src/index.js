import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCQLSa1un6HOlaJKMqVbX4vukNs5zGmD38';

const App = () => {
  return (
    <div>
      <h1>Hi!</h1>
      <SearchBar />
    </div>
  );
};



ReactDOM.render(<App />, document.querySelector('.container'));