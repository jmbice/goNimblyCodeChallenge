import React from 'react';

const SelectListItem = (props) => {
  const { where, id, choose } = props;

  return (
    <div>
      <button className="selectListItem-button" type="button" value={id} onClick={choose}>
        {where}
      </button>
    </div>
  );
};

export default SelectListItem;
