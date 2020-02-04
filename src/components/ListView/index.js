/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-fragments */
import React, { Fragment, useContext } from 'react';
import LoompaListView from './LoompaListView';
import Search from './Search';
import { AppContext } from '../../App';

export default () => {
  const {
    handleChange,
    getAllLoompas,
    filteredList,
    pagination,
    status,
  } = useContext(AppContext);

  return (
    <Fragment>
      <Search
        handleChange={handleChange}
      />
      <header className="App-header">
        Find your Oompa Loompa
        <p className="header-subtitle">There are more than 100k</p>
      </header>
      <LoompaListView
        className="App-list"
        getAllLoompas={getAllLoompas}
        loompas={filteredList}
        pagination={pagination}
        status={status}
      />
    </Fragment>
  );
};

// export default ListView;
