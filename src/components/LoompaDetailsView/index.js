/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Get from '../ApiService';
import NavBar from '../NavBar';
import './loompaDetails.css';

const LoompaDetailsView = React.memo(() => {
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
      <div className="detail-view-container">
        <div className="loompa-container">
          <img className="loompa-image" src={oompaLoompa.image} alt="" />
          <div className="loompa-details">
            <h2 className="loompa-name">
              {oompaLoompa.first_name}
              {oompaLoompa.last_name}
            </h2>
            <p className="loompa-gender-profession">{oompaLoompa.gender}</p>
            <p className="loompa-gender-profession">{oompaLoompa.profession}</p>
            <h6 className="loompa-description">{oompaLoompa.description}</h6>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LoompaDetailsView;
