// STRING FILTERING MODULE
/* eslint-disable arrow-body-style */
import { useEffect, useContext } from 'react';
import { AppContext } from '../../../App';

export default () => {
  const { loompas, filterName, handleList } = useContext(AppContext);
  const filter = filterName.toLowerCase();

  const filteredList = loompas.filter((loompa) => {
    return loompa.first_name.toLowerCase().includes(filter)
        || loompa.last_name.toLowerCase().includes(filter)
        || loompa.profession.toLowerCase().includes(filter);
  });

  useEffect(() => {
    handleList(filteredList);
  }, [filterName, loompas]);

  return null;
};
