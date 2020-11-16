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

export const queryRestaurantRequest = () => {
  return {
    type: constants.QUERY_RESTAURANT_REQUEST,
    isLoading: true,
  };
};

export const queryRestaurantSuccess = (payload) => {
  return {
    type: constants.QUERY_RESTAURANT_SUCCESS,
    isLoading: false,
    error: false,
    payload,
  };
};

export const queryRestaurantFailure = (error) => {
  return {
    type: constants.QUERY_RESTAURANT_FAILURE,
    isLoading: false,
    error: true,
    message: error,
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

export const userSignupRequest = () => {
  return {
    type: constants.USER_SIGNUP_REQUEST,
    isLoading: true,
  };
};

export const userSignupSuccess = (payload) => {
  return {
    type: constants.USER_SIGNUP_SUCCESS,
    isLoading: false,
    error: false,
    payload,
  };
};

export const userSignupFailure = (payload) => {
  return {
    type: constants.USER_SIGNUP_FAILURE,
    isLoading: false,
    error: true,
    message: payload,
  };
};

export const userSignupVerifyRequest = () => {
  return {
    type: constants.USER_SIGNUP_VERIFY_REQUEST,
    isLoading: true,
  };
};

export const userSignupVerifySuccess = (payload) => {
  return {
    type: constants.USER_SIGNUP_VERIFY_SUCCESS,
    isLoading: false,
    error: false,
    payload,
  };
};

export const userSignupVerifyFailure = (payload) => {
  return {
    type: constants.USER_SIGNUP_VERIFY_FAILURE,
    isLoading: false,
    error: true,
    message: payload,
  };
};

export const userLoginRequest = () => {
  return {
    type: constants.USER_LOGIN_REQUEST,
    isLoading: true,
  };
};

export const userLoginSuccess = (payload) => {
  return {
    type: constants.USER_LOGIN_SUCCESS,
    isLoading: false,
    error: false,
    payload,
  };
};

export const userLoginFailure = (payload) => {
  return {
    type: constants.USER_LOGIN_FAILURE,
    isLoading: false,
    error: true,
    message: payload,
  };
};

export const userLoginVerifyRequest = () => {
  return {
    type: constants.USER_LOGIN_VERIFY_REQUEST,
    isLoading: true,
  };
};

export const userLoginVerifySuccess = (payload) => {
  return {
    type: constants.USER_LOGIN_VERIFY_SUCCESS,
    isLoading: false,
    error: false,
    payload,
  };
};

export const userLoginVerifyFailure = (payload) => {
  return {
    type: constants.USER_LOGIN_VERIFY_FAILURE,
    isLoading: false,
    error: true,
    message: payload,
  };
};

export const userLoginGoogleRequest = () => {
  return {
    type: constants.USER_LOGIN_GOOGLE_REQUEST,
    isLoading: true,
  };
};

export const userLoginGoogleSuccess = (payload) => {
  return {
    type: constants.USER_LOGIN_GOOGLE_SUCCESS,
    isLoading: false,
    error: false,
    payload,
  };
};

export const userLoginGoogleFailure = (payload) => {
  return {
    type: constants.USER_LOGIN_GOOGLE_FAILURE,
    isLoading: false,
    error: true,
    message: payload,
  };
};

export const setSearchCity = (cityName, coordinates) => {
  return {
    type: constants.SET_SEARCH_CITY,
    searchCity: cityName,
    userCoordinates: {
      longitude: coordinates[0],
      latitude: coordinates[1],
    },
  };
};

export const getCityIdRequest = () => {
  return {
    type: constants.GET_CITY_ID_REQUEST,
    isLoading: true,
  };
};

export const getCityIdSuccess = (cityId, title) => {
  return {
    type: constants.GET_CITY_ID_SUCCESS,
    isLoading: false,
    error: false,
    cityId: cityId,
    searchCity: title,
  };
};

export const getCityIdFailure = (errorPayload) => {
  return {
    type: constants.GET_CITY_ID_SUCCESS,
    isLoading: false,
    error: true,
    message: errorPayload,
  };
};

export const getCityCollectionRequest = () => {
  return {
    type: constants.GET_CITY_COLLECTION_REQUEST,
    isLoading: true,
  };
};

export const getCityCollectionSuccess = (payload) => {
  return {
    type: constants.GET_CITY_COLLECTION_SUCCESS,
    isLoading: false,
    error: false,
    payload,
  };
};

export const getCityCollectionFailure = (error) => {
  return {
    type: constants.GET_CITY_COLLECTION_FAILURE,
    isLoading: false,
    error: true,
    message: error,
  };
};

export const getCityLocalitiesRequest = () => {
  return {
    type: constants.GET_CITY_LOCALITIES_REQUEST,
    isLoading: true,
  };
};

export const getCityLocalitiesSuccess = (payload) => {
  return {
    type: constants.GET_CITY_LOCALITIES_SUCCESS,
    isLoading: false,
    error: false,
    payload,
  };
};

export const getCityLocalitiesFailure = (error) => {
  return {
    type: constants.GET_CITY_LOCALITIES_SUCCESS,
    isLoading: false,
    error: true,
    message: error,
  };
};

export const queryCity = (city) => {
  return (dispatch) => {
    dispatch(queryCityRequest());
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

export const queryRestaurant = (query, cityId) => {
  return (dispatch) => {
    dispatch(queryRestaurantRequest());
    return axios({
      method: "get",
      url: ` https://zomato-tomato.tk/api/api/search/restaurant`,
      params: {
        q: query,
        city_id: cityId,
      },
    })
      .then((response) => {
        dispatch(queryRestaurantSuccess(response.data.result));
      })
      .catch((error) => dispatch(queryRestaurantFailure(error.response)));
  };
};

export const getUserLocation = (longitude, latitude) => {
  return (dispatch) => {
    dispatch(getUserLocationRequest());

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
        return dispatch(
          getUserLocationSuccess(response.data.features, longitude, latitude)
        );
      })
      .catch((error) => dispatch(getUserLocationFailure(error.data)));
  };
};

//The payload contains the user name and email, needed for registration
export const userSignup = (payload) => {
  return (dispatch) => {
    dispatch(userSignupRequest());
    return axios({
      method: "post",
      url: "https://zomato-tomato.tk/api/api/auth/register",
      data: payload,
    })
      .then((response) => {
        return dispatch(userSignupSuccess(response.data));
      })
      .catch((error) => {
        return dispatch(userSignupFailure(error.response.data));
      });
  };
};

export const userLogin = (email) => {
  return (dispatch) => {
    dispatch(userLoginRequest());
    return axios({
      method: "post",
      url: "https://zomato-tomato.tk/api/api/auth/login",
      data: { email: email },
    })
      .then((response) => {
        return dispatch(userLoginSuccess(response.data));
      })
      .catch((error) => {
        return dispatch(userLoginFailure(error.response.data.message));
      });
  };
};

//the payload contains otp and email of user for verification
export const userSignupVerify = (payload) => {
  return (dispatch) => {
    dispatch(userSignupVerifyRequest());
    return axios({
      method: "post",
      url: "https://zomato-tomato.tk/api/api/auth/verifyRegister",
      data: payload,
    })
      .then((response) => {
        return dispatch(userSignupVerifySuccess(response.data));
      })
      .catch((error) => {
        return dispatch(userSignupVerifyFailure(error.response.data));
      });
  };
};

export const userLoginVerify = (payload) => {
  return (dispatch) => {
    dispatch(userLoginVerifyRequest());
    return axios({
      method: "post",
      url: "https://zomato-tomato.tk/api/api/auth/verifyLogin",
      data: payload,
    })
      .then((response) => {
        return dispatch(userLoginVerifySuccess(response.data));
      })
      .catch((error) => {
        return dispatch(userLoginVerifyFailure(error.response.data));
      });
  };
};

export const userLoginGoogle = (email) => {
  return (dispatch) => {
    dispatch(userLoginGoogleRequest());
    return axios({
      method: "post",
      url: "https://zomato-tomato.tk/api/api/auth/googleLogin",
      data: { email: email },
    })
      .then((response) => {
        return dispatch(userLoginGoogleSuccess(response.data));
      })
      .catch((error) => {
        console.log("the user login google failure error is", error);
        return dispatch(userLoginGoogleFailure(error.response));
      });
  };
};

export const setSearchCityRedux = (cityName, coordinates) => {
  return (dispatch) => {
    return dispatch(setSearchCity(cityName, coordinates));
  };
};

export const getCityId = (payload) => {
  return (dispatch) => {
    dispatch(getCityIdRequest());
    return axios({
      method: "post",
      url: "https://zomato-tomato.tk/api/api/search/cityId",
      data: payload,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return dispatch(
          getCityIdSuccess(response.data.city_id, response.data.title)
        );
      })
      .catch((error) => dispatch(getCityIdFailure(error.response)));
  };
};

export const getCityCollection = (cityId) => {
  return (dispatch) => {
    dispatch(getCityCollectionRequest());
    return axios({
      method: "post",
      url: "https://zomato-tomato.tk/api/api/search/collection",
      data: { city_id: cityId },
    })
      .then((response) => {
        return dispatch(getCityCollectionSuccess(response.data));
      })
      .catch((error) => {
        return dispatch(getCityCollectionFailure(error.response));
      });
  };
};

export const getCityLocalities = (cityId) => {
  return (dispatch) => {
    dispatch(getCityLocalitiesRequest());
    return axios({
      method: "post",
      url: "https://zomato-tomato.tk/api/api/search/localities",
      data: { city_id: cityId },
    })
      .then((response) => {
        return dispatch(getCityLocalitiesSuccess(response.data));
      })
      .catch((error) => {
        return dispatch(getCityLocalitiesFailure(error.response));
      });
  };
};

export const userLogout = () => {
  return {
    type: constants.USER_LOGOUT,
  };
};
