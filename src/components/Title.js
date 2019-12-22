import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-style: italic;
  color: #e91e63;
`;

export default ({ children }) => {
  return <Container>{children}</Container>;
};
