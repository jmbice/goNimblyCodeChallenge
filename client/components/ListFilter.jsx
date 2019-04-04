import React from 'react';
import SearchList from './SearchList';
import SelectList from './SelectList';

const FilterList = (props) => {
  const { results, select, choose } = props;
  return (
    <div>
      {select
        ? <SelectList options={results} choose={choose} />
        : <SearchList results={results} />
      }
    </div>
  );
};

export default FilterList;
