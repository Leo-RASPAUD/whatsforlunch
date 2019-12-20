import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  position: relative;
  margin-right: 16px;
  cursor: pointer;
  opacity: ${props => (props.maxPrice >= props.value ? 1 : 0.5)};

  &:before {
    font-size: 24px;
    content: '$';
    position: absolute;
  }
`;

const Radio = ({ onChange, value, maxPrice, disabled, name }) => (
  <>
    <Input type="radio" name={name} value={value} onChange={onChange} id={`${name}-${value}`} disabled={disabled} />
    <Label htmlFor={`${name}-${value}`} maxPrice={maxPrice} value={value} />
  </>
);

export default ({ setMaxPrice, maxPrice, disabled, value, name }) => {
  const setPrice = event => {
    setMaxPrice(event.target.value);
  };

  return (
    <div>
      <div>Max price</div>
      <Radio value="1" onChange={setPrice} maxPrice={maxPrice} disabled={disabled} name={name} />
      <Radio value="2" onChange={setPrice} maxPrice={maxPrice} disabled={disabled} name={name} />
      <Radio value="3" onChange={setPrice} maxPrice={maxPrice} disabled={disabled} name={name} />
      <Radio value="4" onChange={setPrice} maxPrice={maxPrice} disabled={disabled} name={name} />
    </div>
  );
};
