/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

const LazyLoader = ({
  currentPage,
  hasMore,
  loadLoompas,
  loompaItems,
}) => {
  window.onscroll = debounce(() => {
    if (!hasMore) return;
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      loadLoompas(currentPage + 1);
    }
  }, 100);

  return (
    <Fragment>
      {
        loompaItems.map((loompa) => (
          <div
            className="thumbnail"
            key={loompa.id}
          >
            <img className="loompa_img" src={loompa.image} alt="loompa_img" />
            <h3>{loompa.first_name}</h3>
            <p>{loompa.gender}</p>
            <p>{loompa.profession}</p>
          </div>
        ))
      }
    </Fragment>
  );
};

LazyLoader.propTypes = {
  currentPage: PropTypes.number,
  hasMore: PropTypes.bool,
  loadLoompas: PropTypes.func,
  loompaItems: PropTypes.arrayOf(PropTypes.object),
};
LazyLoader.defaultProps = {
  currentPage: 'must pass the current page from pagination',
  hasMore: 'must pass the boolean flag from pagination',
  loadLoompas: 'must pass ApiService.allLoompas service',
  loompaItems: 'must pass the current loompas in hte state',
};

export default LazyLoader;