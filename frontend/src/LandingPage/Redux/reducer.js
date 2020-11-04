import * as constants from "./actionTypes";

const initialState = {
  searchCity: "",
  locationSearchResults: [],
  error: "",
  errorMessage: "",
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.QUERY_CITY_REQUEST:
      console.log("User registration request", action);
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case constants.QUERY_CITY_SUCCESS:
      return {
        ...state,
        error: action.error,
        isLoading: action.isLoading,
        locationSearchResults: action.payload,
      };

    case constants.QUERY_CITY_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: action.isLoading,
        errorMessage: action.message,
      };

    default:
      return state;
  }
};

export { reducer };
