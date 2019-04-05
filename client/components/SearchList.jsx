import React from 'react';
import SearchListItem from './SearchListItem';

const SearchList = (props) => {
  const { results, history } = props;
  return (
    <div className={history && results[0] ? 'searchList-history-wrapper' : 'searchList-wrapper'}>
      <h2> {history && results[0] ? 'Previous Searches' : ''} </h2>
      <ul>
        {results.map(e => (
          <div className={history ? 'searchList-history-item' : 'searchList-current-item'}>
            <SearchListItem
              location={e.title}
              key={e.woeid}
              parent={e.parent.title}
              date={e.time}
              data={e.consolidated_weather[0]}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
