import React from 'react';
import SearchList from './SearchList';
import SelectList from './SelectList';

const ListFilter = (props) => {
  const { results, select, choose } = props;
  return (
    <div className={results.length ? 'listFilter-results-show' : 'listFilter-results'}>
      {select
        ? <SelectList options={results} choose={choose} />
        : <SearchList results={results} />
      }
    </div>
  );
};

export default ListFilter;
