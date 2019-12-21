import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const Container = styled.div`
  text-align: left;
  margin: 16px;
`;

export default ({ label, value }) => {
  return (
    <Container>
      <Title>{label}</Title>
      <div>{value}</div>
    </Container>
  );
};
