import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter';
import './navBar.css';

const logo = 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png';
const search = 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png';

const NavBar = ({ handleChange }) => (
  <div className="navbar">
    <div className="navbar_logo_container">
      <img className="navbar_logo" src={logo} alt="logo-umpa-loompa" />
    </div>
    <div className="navbar_search_container">
      <div className="navbar_search">
        <input
          className="navbar_search_input"
          type="text"
          onChange={handleChange}
        />
        <Filter />
        <img className="navbar_search_icon" src={search} alt="ic_search" />
      </div>
    </div>
  </div>
);

NavBar.propTypes = {
  handleChange: PropTypes.func,
};
NavBar.defaultProps = {
  handleChange: 'must have the handleChange function for input',
};
export default NavBar;
