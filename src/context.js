import { createContext } from 'react';

export const initialState = {
  restaurants: [],
  restaurant: null,
  coordinates: null,
  errorMessage: '',
  nsfw: false,
  initialSearch: 'Burgers',
};

const context = createContext(initialState);
export default context;
