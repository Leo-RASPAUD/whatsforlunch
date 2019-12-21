import React, { useState, useContext, useEffect, useCallback } from 'react';
import context from '../context';
import Progress from './Progress';
import Input from './Input';
import SearchContainer from './SearchContainer';
import Text from './Text';
import Button from './Button';
import Error from './Error';
import OpeningHours from './OpeningHours';
import Reviews from './Reviews';
import Price from './Price';
import ShowPrice from './ShowPrice';
import baseUrl from '../constants/url';
import getRandomItem from '../utils/getRandomItem';
import { actions } from '../reducer';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background-color: transparent;
  text-align: left;
  padding: 16px;
`;

const InputContainer = styled.div`
  padding: 16px;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const Link = styled.a`
  color: currentColor;
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
  const [maxPrice, setMaxPrice] = useState('3');
  const [searchExpanded, setSearchExpanded] = useState(true);

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

  const getPlaceDetails = useCallback(
    async placeId => {
      dispatch({ type: actions.setRestaurant, payload: null });
      const result = await fetch(`${baseUrl}/details?place_id=${placeId}`);
      const json = await result.json();
      dispatch({ type: actions.setRestaurant, payload: json.result });
      setLoading(false);
      setSearchExpanded(false);
    },
    [dispatch],
  );

  const getRestaurants = useCallback(async () => {
    setNoResults(false);
    setLoading(true);
    dispatch({ type: actions.setRestaurants, payload: [] });

    const result = await fetch(
      `${baseUrl}?location=${coordinates.latitude},${coordinates.longitude}&type=restaurant&keyword=${filter}&radius=${radius}&maxprice=${maxPrice}`,
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
  }, [coordinates, dispatch, getPlaceDetails, filter, radius, maxPrice]);

  useEffect(() => {
    if (coordinates) {
      getRestaurants();
    }
  }, [coordinates]); // eslint-disable-line

  return (
    <Container>
      <SearchContainer expanded={searchExpanded} setSearchExpanded={setSearchExpanded}>
        <InputContainer>
          <Input label="Type" onChange={event => setFilter(event.target.value)} defaultValue={filter} />
          <Input label="Radius (in meters)" onChange={event => setRadius(event.target.value)} defaultValue={radius} />
          <Price setMaxPrice={setMaxPrice} maxPrice={maxPrice} name="maxPrice" />
        </InputContainer>
        <Button
          variant="contained"
          color="primary"
          onClick={coordinates ? getRestaurants : getLocation}
          disabled={!coordinates}
        >
          What's for lunch?
        </Button>
      </SearchContainer>
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
            <Link href={restaurant.url} target="_blank" rel="noopener noreferrer">
              Details
            </Link>
          </div>
          <Text label="Address" value={restaurant.formatted_address} />
          <Text label="Phone number" value={restaurant.formatted_phone_number} />
          <Text label="Rating" value={restaurant.rating} />
          <Text label="Number of ratings" value={restaurant.user_ratings_total} />
          <OpeningHours openingHours={restaurant.opening_hours} />
          <div>
            <div>Price</div>
            {[1, 2, 3, 4].map(item => (
              <ShowPrice key={item} price={restaurant.price_level} item={item} />
            ))}
          </div>
          <div style={{ marginTop: 16 }}>Reviews</div>
          <Reviews reviews={restaurant.reviews} />
        </div>
      )}
      {errorMessage && <Error message={errorMessage} />}
    </Container>
  );
};
