/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import Navbar from './components/NavBar';
import LoompaList from './components/LoompaList';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="App">
        <header className="App-header">
          Find your Oompa Loompa
        </header>
        <LoompaList className="App-list" />
      </div>
    </Fragment>
  );
}

export default App;
