import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: 2px solid currentColor;
  padding: 16px;
  font-size: 24px;
  border-radius: 4px;
  outline: none;
  margin: 16px;
  color: currentColor;
`;

export default ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
