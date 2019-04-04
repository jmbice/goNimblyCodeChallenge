import React from 'react';


const SearchListItem = (props) => {
  const { location, parent, date } = props;
  return (
    <div>
      {`Where: ${location}, ${parent}`}
      <br />
      {`When: ${date}`}
      <br />
    </div>
  );
};

export default SearchListItem;
