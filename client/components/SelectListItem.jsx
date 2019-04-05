import React from 'react';

const SelectListItem = (props) => {
  const { where, id, choose } = props;

  return (
    <div>
      <button type="button" value={id} onClick={choose}>
        {`Get Weather for ${where}`}
      </button>
    </div>
  );
};

export default SelectListItem;
