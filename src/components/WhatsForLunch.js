import React, { useState, useContext } from 'react';
import context from '../context';
import Progress from './Progress';
import Input from './Input';
import Text from './Text';
import Button from './Button';
import Error from './Error';
import OpeningHours from './OpeningHours';
import Reviews from './Reviews';
import baseUrl from '../constants/url';
import getRandomItem from '../utils/getRandomItem';
import { actions } from '../reducer';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background-color: coral;
  text-align: center;
`;

const InputContainer = styled.div`
  padding: 16px;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export default () => {
  const {
    dispatch,
    state: { errorMessage, coordinates, restaurant },
  } = useContext(context);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [filter, setFilter] = useState('Mexican');
  const [radius, setRadius] = useState('1500');

  const getPlaceDetails = async placeId => {
    dispatch({ type: actions.setRestaurant, payload: null });
    const result = await fetch(`${baseUrl}/details?place_id=${placeId}`);
    const json = await result.json();
    dispatch({ type: actions.setRestaurant, payload: json.result });
    setLoading(false);
  };

  const getRestaurants = async () => {
    setNoResults(false);
    setLoading(true);
    dispatch({ type: actions.setRestaurants, payload: [] });

    const result = await fetch(
      `${baseUrl}?location=${coordinates.latitude},${coordinates.longitude}&type=restaurant&keyword=${filter}&radius=${radius}`,
    );
    const json = await result.json();
    const results = json.results;
    dispatch({ type: actions.setRestaurants, payload: results });

    const item = getRandomItem(results);
    if (item) {
      getPlaceDetails(item.place_id);
    } else {
      setLoading(false);
      setNoResults(true);
      dispatch({ type: actions.setRestaurant, payload: null });
    }
  };

  return (
    <Container>
      <InputContainer>
        <Input label="Type" onChange={event => setFilter(event.target.value)} defaultValue={filter} />
        <Input label="Radius (in meters)" onChange={event => setRadius(event.target.value)} defaultValue={radius} />
      </InputContainer>
      <Button variant="contained" color="primary" onClick={getRestaurants} disabled={!coordinates}>
        What's for lunch?
      </Button>
      {loading && <Progress />}
      {!loading && noResults && <div>No restaurants found</div>}
      {!loading && restaurant && (
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text label="Name" value={restaurant.name} />
            <a href={restaurant.url} target="_blank" rel="noopener noreferrer">
              Details
            </a>
          </div>
          <Text label="Address" value={restaurant.formatted_address} />
          <Text label="Phone number" value={restaurant.formatted_phone_number} />
          <Text label="Rating" value={restaurant.rating} />
          <Text label="Number of ratings" value={restaurant.user_ratings_total} />
          <OpeningHours openingHours={restaurant.opening_hours} />
          {restaurant.price_level && <Text label="Price level" value={restaurant.price_level} />}

          <div style={{ color: 'coral', marginTop: 16 }}>Reviews</div>
          <Reviews reviews={restaurant.reviews} />
        </div>
      )}
      {errorMessage && <Error message={errorMessage} />}
    </Container>
  );
};
