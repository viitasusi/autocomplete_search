import React, { Component } from 'react';
import './App.css';
import AutocompleteSearch from './components/autocomplete_search/autocomplete_search';

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
