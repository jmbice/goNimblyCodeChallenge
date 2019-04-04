import React from 'react';
import SearchList from './SearchList';
import SelectList from './SelectList';

const FilterList = (props) => {
  const { searchResults, select } = props;
  return (
    <div>
      {select
        ? <SelectList options={searchResults} />
        : <SearchList searchResults={searchResults} />
      }
    </div>
  );
};

export default FilterList;
