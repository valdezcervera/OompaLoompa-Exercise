import React from 'react';
import Navbar from './components/NavBar';
import LoompaList from './components/LoompaList';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        Find your Oompa Loompa
      </header>
      <LoompaList className="App-list" />
    </div>
  );
}

export default App;
