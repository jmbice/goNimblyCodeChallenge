import React from 'react';

const SelectListItem = (props) => {
  const { where } = props;
  return (
    <div>
      {`Where: ${where}`}
    </div>
  );
};

export default SelectListItem;
