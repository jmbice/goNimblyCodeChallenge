import React from 'react';
import SearchListItem from './SearchListItem';

const SearchList = (props) => {
  const { results } = props;
  return (
    <ul>
      {results.map(e => <SearchListItem
        location={e.title}
        key={e.woeid}
        parent={e.parent.title}
        date={e.time}
      />)}
    </ul>
  );
};

export default SearchList;
