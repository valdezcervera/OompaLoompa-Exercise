import React from 'react';
import './navBar.css';

const logo = 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png';

const NavBar = () => (
  <div className="navbar">
    <div className="navbar_logo_container">
      <img className="navbar_logo" src={logo} alt="logo-umpa-loompa" />
      <h2>Oompa Loompa&apos;s Crew</h2>
    </div>
  </div>
);

export default NavBar;
