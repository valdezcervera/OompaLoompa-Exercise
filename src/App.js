/* eslint-disable react/jsx-fragments */
import React, { useState, useEffect, Fragment } from 'react';
import Get from './components/ApiService';
import Navbar from './components/NavBar';
import LoompaList from './components/LoompaList';
import './App.css';

export const AppContext = React.createContext(null);

function App() {
  const [loompas, setLoompas] = useState([]);
  const [status, setStatus] = useState(true);
  const [pagination, setPagination] = useState({
    current: null,
    total: null,
    hasMore: true,
  });
  const [filterName, setFilterName] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  const getAllLoompas = (page) => {
    Get.allLoompas(page)
      .then((res) => {
        setLoompas([...loompas, ...res.data.results]);
        setPagination({
          current: res.data.current,
          total: res.data.total,
          hasMore: res.data.current < res.data.total,
        });
      })
      .then(() => setStatus(false));
  };

  const findOneLoompa = (id) => {
    Get.oneLoompa(id)
      .then((res) => {
        // do some stuff with this loompa guy here
      });
  };

  useEffect(() => {
    getAllLoompas();
  }, []);

  const handleChange = (e) => {
    setFilterName(e.target.value);
  };
  const handleList = (filteredData) => {
    setFilteredList(filteredData);
  };
  console.log('fromFilter', filteredList);
  return (
    <Fragment>
      <AppContext.Provider value={{ loompas, filterName, handleList }}>
        <div className="App">
          <Navbar
            handleChange={handleChange}
          />
          <header className="App-header">
            Find your Oompa Loompa
          </header>
          <LoompaList
            className="App-list"
            getAllLoompas={getAllLoompas}
            loompas={filteredList}
            pagination={pagination}
            status={status}
          />
        </div>
      </AppContext.Provider>
    </Fragment>
  );
}

export default App;
