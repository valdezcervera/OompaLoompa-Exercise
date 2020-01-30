import React from 'react';

const logo = 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png';
const search = 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png';

export default () => (
  <div className="navbar">
    <img className="navbar_logo" src={logo} alt="logo-umpa-loompa" />
    <div className="navbar_search">
      <img className="navbar_search_icon" src={search} alt="ic_search" />
      Search
    </div>
  </div>
);
