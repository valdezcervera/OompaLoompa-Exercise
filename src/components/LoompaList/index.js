import React, { useState, useEffect } from 'react';
import Get from '../ApiService';
import Spinner from '../Spinner';

export default () => {
  const [loompas, setLoompas] = useState([]);
  const [status, setStatus] = useState(true);
  const [pagination, setPagination] = useState({
    current: null,
    total: null,
  });

  const getAllLoompas = (page) => {
    Get.allLoompas(page)
      .then((res) => {
        setLoompas(res.data.results);
        setPagination({ current: res.data.current, total: res.data.total });
      })
      .then(() => setStatus(false));
  };
  const findOneLoompa = (id) => {
    Get.oneLoompa(id)
      .then((res) => {
        // do some stuff with this loompa guy here
      });
  };

  useEffect(() => {
    getAllLoompas();
  }, []);

  return (
    <div>
      LoompaService works
      {!status
        ? (
          <div>
            {
              loompas.map((loompa) => (
                <div>
                  {loompa.first_name}
                </div>
              ))
            }
            {console.log('FetchedLoompas', loompas)}
            {console.log('page', pagination)}
          </div>
        )
        : (
          <div>
            <Spinner />
          Loading, please wait...
          </div>
        )}
    </div>
  );
};
