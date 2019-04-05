import React from 'react';

const Search = (props) => {
  const { update, initiate, term } = props;

  return (
    <div className="search-wrapper">
      <div className="search-instructions">
        Enter the name of the city:
      </div>
      <input
        className="search-input"
        id="cityInput"
        value={term}
        onChange={update}
      />
      <button
        className={term.length ? 'search-button-ready' : 'search-button'}
        type="button"
        onClick={initiate}
      >
        Get Weather
      </button>
    </div>
  );
};

export default Search;
