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
