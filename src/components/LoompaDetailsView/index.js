/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Get from '../ApiService';

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
      <h1>{oompaLoompa.first_name}</h1>
      <button type="button" onClick={() => goback()}>back</button>
    </div>
  );
};

export default LoompaDetailsView;
