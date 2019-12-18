import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 24px;
  color: white;
  margin: 16px;
`;

export default ({ message }) => {
  return <Container>{message}</Container>;
};
