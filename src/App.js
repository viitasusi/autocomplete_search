import React, { Component } from 'react';
import AutocompleteSearch from './components/autocomplete_search/autocomplete_search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AutocompleteSearch />
      </div>
    );
  }
}

export default App;
