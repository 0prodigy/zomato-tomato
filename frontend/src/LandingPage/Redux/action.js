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

//The payload contains the user name and email, needed for registration
export const userSignup = (payload) => {
  console.log("The user signup", payload);
  return (dispatch) => {
    dispatch(userSignupRequest());
    return axios({
      method: "post",
      url: "http://localhost:5000/api/auth/register",
      data: payload,
    })
      .then((response) => {
        console.log("The response is", response.data);
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
      url: "http://localhost:5000/api/auth/login",
      data: { email: email },
    })
      .then((response) => {
        console.log("The response is", response.data);
        return dispatch(userLoginSuccess(response.data));
      })
      .catch((error) => {
        console.log("The login error is", error);
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
      url: "http://localhost:5000/api/auth/verifyRegister",
      data: payload,
    })
      .then((response) => {
        console.log(
          "The response verification of user registration is",
          response.data
        );
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
      url: "http://localhost:5000/api/auth/verifyLogin",
      data: payload,
    })
      .then((response) => {
        console.log("The response while login verification is", response.data);
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
      url: "http://localhost:5000/api/auth/googleLogin",
      data: { email: email },
    })
      .then((response) => {
        console.log("The user login google success response is", response.data);
        return dispatch(userLoginGoogleSuccess(response.data));
      })
      .catch((error) => {
        console.log("the user login google failure error is", error);
        return dispatch(userLoginGoogleFailure(error.response));
      });
  };
};
