import axios from "axios";
import * as constants from "./actionTypes";

export const restaurantFilterRequest = () => {
  return {
    type: constants.RESTAURANT_FILTER_REQUEST,
    isLoading: true,
  };
};

export const restaurantFilterSuccess = (restaurants) => {
  return {
    type: constants.RESTAURANT_FILTER_SUCCESS,
    isLoading: false,
    error: false,
    restaurants: restaurants,
  };
};

export const restaurantFilterFailure = (errorPayload) => {
  return {
    type: constants.RESTAURANT_FILTER_SUCCESS,
    isLoading: false,
    error: true,
    message: errorPayload,
  };
};

export const getFilterRestaurant = (filters, sort, city_id = 2) => {
  return (dispatch) => {
    dispatch(restaurantFilterRequest());
    return axios({
      method: "post",
      url: `http://localhost:5000/api/restaurant/filterd`,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      data: {
        filters: [
          {
            ...filters,
            "location.city_id": city_id,
          },
        ],
        sort: [sort],
      },
    })
      .then((response) => {
        return dispatch(restaurantFilterSuccess(response.data.restaurant));
      })
      .catch((error) => dispatch(restaurantFilterFailure(error.response)));
  };
};
