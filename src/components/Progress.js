import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
 0% {
    transform: rotate(360deg);
  }
  100% {
    transfomr: rotate(0deg);
  }
`;

const Container = styled.span`
  position: relative;
  display: inline-block;
  height: 16px;
  width: 16px;
  margin: 16px;
`;

const Spinner = styled.span`
  animation: ${rotate} 1s linear infinite;
  border-radius: 10%;
  border: 2px solid coral;
  box-sizing: border-box;
  display: block;
  height: 24px;
  position: absolute;
  top: 0;
  width: 24px;
`;

export default () => {
  return (
    <div>
      <Container>
        <Spinner />
      </Container>
    </div>
  );
};
