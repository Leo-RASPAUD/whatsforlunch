import { createContext } from 'react';

export const initialState = {
  restaurants: [],
  restaurant: null,
  coordinates: null,
  errorMessage: '',
};

const context = createContext(initialState);
export default context;
