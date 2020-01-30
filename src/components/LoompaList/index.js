import React, { useState, useEffect } from 'react';
import Get from '../ApiService';
import LazyLoader from '../LazyLoader';
import Spinner from '../Spinner';
import './loompaList.css';

export default () => {
  const [loompas, setLoompas] = useState([]);
  const [status, setStatus] = useState(true);
  const [pagination, setPagination] = useState({
    current: null,
    total: null,
    hasMore: true,
  });

  // hasMore: true,
  // isLoading: false,

  const getAllLoompas = (page) => {
    Get.allLoompas(page)
      .then((res) => {
        setLoompas([...loompas, ...res.data.results]);
        setPagination({
          current: res.data.current,
          total: res.data.total,
          hasMore: res.data.current < res.data.total,
        });
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
    <div className="list-container">
      {!status
        ? (
          <LazyLoader
            currentPage={pagination.current}
            totalPages={pagination.total}
            hasMore={pagination.hasMore}
            loadLoompas={getAllLoompas}
            loompaItems={loompas}
          >
            {/* {console.log('FetchedLoompas', loompas)} */}
            {console.log('page', pagination)}
          </LazyLoader>
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
