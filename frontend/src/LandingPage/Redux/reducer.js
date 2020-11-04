import * as constants from "./actionTypes";

const initialState = {
  searchCity: "",
  locationSearchResults: [],
  error: false,
  errorMessage: "",
  isLoading: false,
  userCoordinates: {},
  currentRegisteredEmail: "",
  activeUserDetails: localStorage.getItem("activeUser") || {},
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

    case constants.USER_SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case constants.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        currentRegisteredEmail: action.payload.data.email,
      };

    case constants.USER_SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        errorMessage: action.message,
      };

    case constants.USER_SIGNUP_VERIFY_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case constants.USER_SIGNUP_VERIFY_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
      };

    case constants.USER_SIGNUP_VERIFY_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        errorMessage: action.message,
      };

    case constants.USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case constants.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
      };

    case constants.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        errorMessage: action.message,
      };

    case constants.USER_LOGIN_VERIFY_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case constants.USER_LOGIN_VERIFY_SUCCESS:
      let payload = {
        name: action.payload.user.name,
        email: action.payload.user.email,
        _id: action.payload.user._id,
        image: action.payload.user.image,
        id: action.payload.user.id,
      };
      localStorage.setItem("activeUser", JSON.stringify(payload));
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        activeUserDetails: payload,
      };

    case constants.USER_LOGIN_VERIFY_FAILURE:
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
