import React from 'react';
import SelectListItem from './SelectListItem';

const SelectList = (props) => {
  const { options, choose } = props;

  return (
    <div>
      <div className="selectList-instructions">Did you mean...</div>
      <ul>
        {options[0].map(e => (
          <SelectListItem id={e.woeid} key={e.woeid} where={e.title} choose={choose} />
        ))}
      </ul>
    </div>
  );
};

export default SelectList;
