import * as constants from "./actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  errorMessage: "",
  allRestaurants: [],
};

const collectionPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_ALL_RESTAURANTS_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case constants.GET_ALL_RESTAURANTS_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        allRestaurants: action.payload.resturants,
      };

    case constants.GET_ALL_RESTAURANTS_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        errorMessage: action.message,
      };

    default:
      return state;
  }
};

export { collectionPageReducer };
