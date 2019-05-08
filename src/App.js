import Header from './Header/header'
import './App.css';
import SearchBar from './SearchBar/searchBar'

import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        
    </div>
    )
  }
}

export default App