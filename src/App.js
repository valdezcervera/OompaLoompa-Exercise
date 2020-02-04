/* eslint-disable no-alert */
/* eslint-disable react/jsx-fragments */
import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Get from './components/ApiService';
import LoompaDetailsView from './components/LoompaDetailsView';
import './App.css';
import ListView from './components/ListView';

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
      <AppContext.Provider value={{
        loompas,
        filterName,
        handleList,
        handleChange,
        getAllLoompas,
        filteredList,
        pagination,
        status,
      }}
      >
        <div className="App">
          <Router>
            <Switch>
              <Route path="/" exact component={ListView} />
              <Route path="/details/:id" exact component={LoompaDetailsView} />
            </Switch>
          </Router>
        </div>
      </AppContext.Provider>
    </Fragment>
  );
};

export default App;
