import React, { useContext } from 'react';
import styled from 'styled-components';
import context from '../context';
import nsfwImg from '../img/nsfw.png';
import { actions } from '../reducer';

const Header = styled.header`
  background: #262627;
  color: #e8e8e8;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const Button = styled.button`
  background: none;
  color: white;
  border: none;
  outline: none;
  opacity: 0.05;
`;

export default () => {
  const {
    dispatch,
    state: { nsfw },
  } = useContext(context);

  return (
    <Header>
      <div>{nsfw ? 'What the fuck is for lunch?' : "What's for lunch?"}</div>
      <Button
        onClick={() => {
          dispatch({
            type: actions.toggleNsfw,
            payload: !nsfw,
          });
        }}
      >
        <img style={{ height: 24 }} src={nsfwImg} alt="nsfw" />
      </Button>
    </Header>
  );
};
