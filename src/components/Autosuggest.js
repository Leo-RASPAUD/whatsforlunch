import React, { useState } from 'react';
import Select from 'react-select';
import foodTypes from '../constants/foodTypes';

const CustomClearText = () => 'clear all';
const ClearIndicator = props => {
  const {
    children,
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div {...restInnerProps} ref={ref} style={getStyles('clearIndicator', props)}>
      <div style={{ padding: '0px 5px' }}>{children}</div>
    </div>
  );
};

const ClearIndicatorStyles = (base, state) => ({
  ...base,
  cursor: 'pointer',
  color: state.isFocused ? 'blue' : 'black',
  //   width: '200px',
});

export default () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = item => {
    setSelectedOption(item);
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        styles={{ input: ClearIndicatorStyles }}
        options={foodTypes.map(item => ({ label: item, value: item }))}
      />
    </div>
  );
};
