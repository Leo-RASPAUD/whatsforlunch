import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 24px;
  margin: 16px;
  color: currentColor;
`;

export default ({ message }) => {
  return <Container>{message}</Container>;
};
