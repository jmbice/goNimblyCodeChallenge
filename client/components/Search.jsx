import React from 'react';

const Search = (props) => {
  const { update, initiate, term } = props;

  return (
    <div>
      <h4>
        Look up weather near you...
      </h4>
        Enter a city:
      <input
        id="cityInput"
        value={term}
        onChange={update}
      />
      <button type="button" onClick={initiate}>
        Get Weather
      </button>
    </div>
  );
};

export default Search;
