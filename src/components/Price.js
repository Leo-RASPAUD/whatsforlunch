import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  position: relative;
  margin-right: ${props => (props.nsfw ? '64px' : '16px')};
  cursor: pointer;
  opacity: ${props => (props.maxPrice >= props.value ? 1 : 0.5)};

  &:before {
    font-size: 24px;
    content: ${props => (props.nsfw ? "'FUCK'" : "'$'")};
    position: absolute;
  }
`;

const Radio = ({ onChange, value, maxPrice, disabled, name, nsfw }) => (
  <>
    <Input type="radio" name={name} value={value} onChange={onChange} id={`${name}-${value}`} disabled={disabled} />
    <Label htmlFor={`${name}-${value}`} maxPrice={maxPrice} value={value} nsfw={nsfw} />
  </>
);

export default ({ setMaxPrice, maxPrice, disabled, value, name, nsfw }) => {
  const setPrice = event => {
    setMaxPrice(event.target.value);
  };

  return (
    <div>
      <Title>{nsfw ? 'FUCK' : 'Max price'}</Title>
      <Radio value="1" onChange={setPrice} maxPrice={maxPrice} disabled={disabled} name={name} nsfw={nsfw} />
      <Radio value="2" onChange={setPrice} maxPrice={maxPrice} disabled={disabled} name={name} nsfw={nsfw} />
      <Radio value="3" onChange={setPrice} maxPrice={maxPrice} disabled={disabled} name={name} nsfw={nsfw} />
      <Radio value="4" onChange={setPrice} maxPrice={maxPrice} disabled={disabled} name={name} nsfw={nsfw} />
    </div>
  );
};
