import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background: #262627;
  color: #e8e8e8;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: left;
    padding-left: 16px;
  }
`;

export default () => <Header>What's for lunch?</Header>;
