/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import LazyLoader from '../LazyLoader';
import Spinner from '../Spinner';
import './loompaList.css';

const LoompaList = ({
  getAllLoompas,
  loompas,
  pagination,
  status,
}) => {
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
            {/* {console.log('page', pagination)} */}
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

LoompaList.propTypes = {
  getAllLoompas: PropTypes.func,
  loompas: PropTypes.arrayOf(PropTypes.object),
  pagination: PropTypes.shape({
    current: PropTypes.number,
    total: PropTypes.number,
    hasMore: PropTypes.bool,
  }),
  status: PropTypes.bool,
};
LoompaList.defaultProps = {
  getAllLoompas: 'must pass the api calling function',
  loompas: 'must pass the list of loompas (array of objects)',
  pagination: 'must pass the pagination object',
  status: 'must pass the loading status boolean',
};

export default LoompaList;
