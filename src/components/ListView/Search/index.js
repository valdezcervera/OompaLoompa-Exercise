/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter';
import NavBar from '../../NavBar';
import './search.css';

const searchIcon = 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png';

const Search = ({ handleChange }) => (
  <Fragment>
    <NavBar />
    <div className="search_container">
      <div className="search">
        <input
          className="search_input"
          type="text"
          onChange={handleChange}
        />
        <Filter />
        <img className="search_icon" src={searchIcon} alt="ic_search" />
      </div>
    </div>
  </Fragment>
);

Search.propTypes = {
  handleChange: PropTypes.func,
};
Search.defaultProps = {
  handleChange: 'must have the handleChange function for input',
};
export default Search;
