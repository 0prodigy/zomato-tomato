import * as constants from "./actionTypes";
import axios from "axios";

export const getAllRestaurantsRequest = () => {
  return {
    type: constants.GET_ALL_RESTAURANTS_REQUEST,
    isLoading: true,
  };
};

export const getAllRestaurantsSuccess = (payload) => {
  return {
    type: constants.GET_ALL_RESTAURANTS_SUCCESS,
    isLoading: false,
    error: false,
    payload,
  };
};

export const getAllRestaurantsFailure = (error) => {
  return {
    type: constants.GET_ALL_RESTAURANTS_SUCCESS,
    isLoading: false,
    error: true,
    message: error,
  };
};

export const getAllRestaurants = (cityId) => {
  return (dispatch) => {
    dispatch(getAllRestaurantsRequest());
    return axios({
      method: "get",
      url: "http://localhost:5000/api/restaurant/all",
      params: {
        city_id: cityId,
      },
    })
      .then((response) => {
        return dispatch(getAllRestaurantsSuccess(response.data));
      })
      .catch((error) => {
        return dispatch(getAllRestaurantsFailure(error.response));
      });
  };
};
