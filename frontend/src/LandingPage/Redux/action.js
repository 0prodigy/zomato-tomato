import * as constants from "./actionTypes";
import axios from "axios";

export const queryCityRequest = () => {
  return {
    type: constants.QUERY_CITY_REQUEST,
    isLoading: true,
  };
};

export const queryCitySucceess = (payload) => {
  return {
    type: constants.QUERY_CITY_SUCCESS,
    isLoading: false,
    error: false,
    payload,
  };
};

export const queryCityFailure = (payload) => {
  return {
    type: constants.QUERY_CITY_FAILURE,
    isLoading: false,
    error: true,
    message: payload,
  };
};

export const getUserLocationRequest = () => {
  return {
    type: constants.GET_USER_LOCATION_REQUEST,
    isLoading: true,
  };
};

export const getUserLocationSuccess = (payload, longitude, latitude) => {
  return {
    type: constants.GET_USER_LOCATION_SUCCESS,
    isLoading: false,
    error: false,
    payload,
    userCoordinates: {
      longitude: longitude,
      latitude: latitude,
    },
  };
};

export const getUserLocationFailure = (payload) => {
  return {
    type: constants.GET_USER_LOCATION_FAILURE,
    isLoading: false,
    error: true,
    message: payload,
  };
};

export const queryCity = (city) => {
  return (dispatch) => {
    dispatch(queryCityRequest());
    console.log("The city to be searched is", city);
    return axios({
      method: "get",
      url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`,
      params: {
        access_token:
          "pk.eyJ1IjoibWFuaXNoLWt1bWFyLWRldiIsImEiOiJja2gyOGw4b24wOWhwMnNtemVmeHA2djV0In0.IWI4BNamZ8XXAawc2fuk8w",
        country: "IN",
      },
    })
      .then((response) => {
        return dispatch(queryCitySucceess(response.data.features));
      })
      .catch((error) => dispatch(queryCityFailure(error.data)));
  };
};

export const getUserLocation = (longitude, latitude) => {
  return (dispatch) => {
    dispatch(getUserLocationRequest());
    console.log("The longitude and latitude are", longitude, latitude);
    return axios({
      method: "get",
      url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json`,
      params: {
        access_token:
          "pk.eyJ1IjoibWFuaXNoLWt1bWFyLWRldiIsImEiOiJja2gyOGw4b24wOWhwMnNtemVmeHA2djV0In0.IWI4BNamZ8XXAawc2fuk8w",
        country: "IN",
      },
    })
      .then((response) => {
        console.log("the response is", response.data);
        return dispatch(
          getUserLocationSuccess(response.data.features, longitude, latitude)
        );
      })
      .catch((error) => dispatch(getUserLocationFailure(error.data)));
  };
};
