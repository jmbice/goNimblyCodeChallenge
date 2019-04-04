import React from 'react';
import SelectListItem from './SelectListItem';

const SelectList = (props) => {
  const { options, choose } = props;

  return (
    <div>
      {options[0].map(e => (
        <SelectListItem id={e.woeid} key={e.woeid} where={e.title} choose={choose} />
      ))}
    </div>
  );
};

export default SelectList;
