import React from 'react';
import SelectListItem from './SelectListItem';

const SelectList = (props) => {
  const { options } = props;

  return (
    <div>
      {options[0].map(e => (
        <SelectListItem key={e.woeid} where={e.title} />
      ))}
    </div>
  );
};

export default SelectList;
