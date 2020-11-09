import axios from "axios";
import * as constants from "./actionTypes";

export const restaurantFetchRequest = () => {
  return {
    type: constants.RESTAURANT_FETCH_REQUEST,
    isLoading: true,
  };
};

export const restaurantFetchSuccess = (restaurant) => {
  return {
    type: constants.RESTAURANT_FETCH_SUCCESS,
    isLoading: false,
    error: false,
    restaurant: restaurant,
  };
};

export const restaurantFetchFailure = (errorPayload) => {
  return {
    type: constants.RESTAURANT_FETCH_SUCCESS,
    isLoading: false,
    error: true,
    message: errorPayload,
  };
};

export const getRestaurant = (payload) => {
  return (dispatch) => {
    dispatch(restaurantFetchRequest());
    return axios({
      method: "get",
      url: `http://localhost:5000/api/restaurant/${payload}`,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return dispatch(restaurantFetchSuccess(response.data.restaurant));
      })
      .catch((error) => dispatch(restaurantFetchFailure(error.response)));
  };
};
