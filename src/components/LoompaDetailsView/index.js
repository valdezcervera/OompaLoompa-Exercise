/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Get from '../ApiService';
import NavBar from '../NavBar';

const LoompaDetailsView = () => {
  const [oompaLoompa, setOompaLoompa] = useState({});
  const history = useHistory();
  const goback = () => {
    history.push({
      pathname: '/',
    });
  };
  const { id } = useParams();
  // get(loompasURL/id)
  useEffect(() => {
    Get.oneLoompa(id)
      .then((res) => {
        setOompaLoompa(res.data);
      });
  }, []);

  return (
    <div>
      <div
        role="button"
        tabIndex="0"
        onClick={() => goback()}
        onKeyPress={() => goback()}
      >
        <NavBar />
      </div>
      <div className="image-container">
        <img src={oompaLoompa.image} alt="" />
      </div>
      <div className="loompa-details">
        <h3>
          {oompaLoompa.first_name}
          {oompaLoompa.last_name}
        </h3>
        <p>{oompaLoompa.gender}</p>
        <p>{oompaLoompa.profession}</p>
        <h6>{oompaLoompa.description}</h6>
      </div>
    </div>
  );
};

export default LoompaDetailsView;
