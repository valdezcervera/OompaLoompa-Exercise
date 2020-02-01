/* eslint-disable react/jsx-fragments */
import React, { useState, useEffect, Fragment } from 'react';
import Get from './components/ApiService';
import Search from './components/Search';
import LoompaListView from './components/LoompaListView';
import './App.css';

export const AppContext = React.createContext(null);

const App = () => {
  const [loompas, setLoompas] = useState([]);
  const [status, setStatus] = useState(false);
  const [pagination, setPagination] = useState({
    current: null,
    total: null,
    hasMore: true,
  });
  const [filterName, setFilterName] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [error, setError] = useState();

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
      .then(() => setStatus(true))
      .catch((err) => setError(err));
  };
  if (error) alert('No conection!');
  useEffect(() => {
    getAllLoompas();
  }, []);

  const handleChange = (e) => {
    setFilterName(e.target.value);
  };
  const handleList = (filteredData) => {
    setFilteredList(filteredData);
  };
  return (
    <Fragment>
      <AppContext.Provider value={{ loompas, filterName, handleList }}>
        <div className="App">
          <Search
            handleChange={handleChange}
          />
          <header className="App-header">
            Find your Oompa Loompa
          </header>
          <LoompaListView
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
};

export default App;
