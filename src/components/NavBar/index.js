/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import './navBar.css';

const logo = 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png';
const search = 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png';

export default () => (
  <div className="navbar">
    <div className="navbar_logo_container">
      <img className="navbar_logo" src={logo} alt="logo-umpa-loompa" />
    </div>
    <div className="navbar_search_container">
      <div className="navbar_search">
        <input className="navbar_search_input" type="text" />
        {/* filter goes here instead of input */}
        <img className="navbar_search_icon" src={search} alt="ic_search" />
      </div>
    </div>
  </div>
);