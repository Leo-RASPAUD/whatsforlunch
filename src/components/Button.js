import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: 2px solid white;
  padding: 8px;
  font-size: 24px;
  border-radius: 4px;
  outline: none;
  color: white;
`;

export default ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
