import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: left;
  margin: 16px;
`;

const Label = styled.div`
  font-style: italic;
  color: white;
`;

export default ({ label, value }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <div>{value}</div>
    </Container>
  );
};
