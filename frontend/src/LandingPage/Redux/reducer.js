import * as constants from "./actionTypes";

const initialState = {
  searchCity: "",
  locationSearchResults: [],
  error: "",
  errorMessage: "",
  isLoading: false,
  userCoordinates: {},
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

    case constants.GET_USER_LOCATION_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case constants.GET_USER_LOCATION_SUCCESS:
      return {
        ...state,
        error: action.error,
        isLoading: action.isLoading,
        locationSearchResults: action.payload,
        userCoordinates: action.userCoordinates,
      };

    case constants.GET_USER_LOCATION_FAILURE:
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

export { reducer };
