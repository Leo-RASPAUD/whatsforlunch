import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  font-size: 80px;
  font-weight: 800;
  position: relative;
  max-width: 240px;
  text-align: center;
  padding-left: 135px;
  padding-top: 32px;
  font-style: italic;
`;

const Fuck = keyframes`
  0% {
    left: 0px;
  }
  50% {
    left: -20px;
  }
  100% {
    left: 0px;
  }
`;

const Loading = styled.div`
  animation: ${Fuck} 1s infinite;
  left: -30px;
  position: absolute;
  transform: rotate(-30deg);
  top: 0px;
`;

export default () => {
  return (
    <Container>
      <Loading>FUCK</Loading>
      <div>FUCK</div>
    </Container>
  );
};
