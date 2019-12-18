import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import Error from './Error';
import Progress from './Progress';
import context from '../context';
import { actions } from '../reducer';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: coral;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  text-align: center;
`;

export default () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const {
    dispatch,
    state: { errorMessage },
  } = useContext(context);

  const getLocation = () => {
    setLoading(true);
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          dispatch({
            type: actions.setCoordinates,
            payload: { latitude, longitude },
          });
          setLoading(false);
          history.push('/lunch');
        },
        error => {
          console.log(error);
          dispatch({
            type: actions.setError,
            payload: 'Your browser is not compatible or you have blocked the geolocation',
          });
          setLoading(false);
        },
      );
    } else {
      dispatch({
        type: actions.setError,
        payload: 'Your browser is not compatible',
      });
      setLoading(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Button variant="contained" color="primary" onClick={getLocation}>
          Get location
        </Button>
        {loading && <Progress />}
        {errorMessage && <Error message={errorMessage} />}
      </Wrapper>
    </Container>
  );
};
