export const actions = {
  setCoordinates: "setCoordinates",
  setError: "setError",
  setRestaurants: "setRestaurants",
  setRestaurant: "setRestaurant"
};

export default (state, { payload, type }) => {
  switch (type) {
    case actions.setCoordinates: {
      return {
        ...state,
        coordinates: payload
      };
    }
    case actions.setRestaurants: {
      return {
        ...state,
        restaurants: payload
      };
    }
    case actions.setRestaurant: {
      return {
        ...state,
        restaurant: payload
      };
    }
    case actions.setError: {
      return {
        ...state,
        errorMessage: payload
      };
    }
    default:
      return state;
  }
};
