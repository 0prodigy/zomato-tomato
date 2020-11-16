import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "mapbox-gl/dist/mapbox-gl.css";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoginPage from "../../LandingPage/Components/LoginPage";
import Signup from "../../LandingPage/Components/Signup";
import { getUserLocation } from "../../LandingPage/Redux/action";
import {
  changeItemQuantityInCart,
  setTotalCartValue,
} from "../../RestroPage/Redux/action";
import Navbar from "./Navbar";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { Wrapper } from "../Styles/LoginCheckoutStyle";
import {
  Modal,
  Container,
  Card,
  IconButton,
  CardContent,
  InputAdornment,
  TextField,
  Divider,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PaymentSuccessPage from "../../PaymentSuccessPage/PaymentSuccessPage";
import Axios from "axios";
import Mapbox from "./Mapbox";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  customizeButton: {
    border: "1px solid grey",
    height: "30px",
    display: "flex",
    borderRadius: "6px",
    cursor: "pointer",
    justifyContent: "center",
    alignContent: "center",
    width: "80px",

    "& div": {
      padding: "2px 0px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    "& div:nth-last-child(2)": {
      backgroundColor: "rgb(247, 235, 236)",
      "& :hover": {
        backgroundColor: "#f7d7da",
      },
    },
  },
  getLocationCard: {
    minHeight: "90vh",
    width: "600px",
    position: "absolute",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  getLocationTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "28px",
    padding: "10px",
    "& ~div": {
      padding: "5px 10px",
    },
  },
  currentUserLocationDiv: {
    margin: "10px",
    border: "1px solid grey",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
  },
}));

const ProceedAndContinueButton = styled.button`
  border: none;
  float: right;
  padding: 12px 32px;
  border-radius: 5px;
  color: white;
  fontweight: 300;
  background-color: ${(props) =>
    props.disabled ? `rgb(156, 156, 156)` : `rgb(237, 90, 107)`};
`;

const VerifyUserPhoneButton = styled.button`
  border: none;
  width: 95%;
  padding: 10px;
  margin: 15px 10px;
  border-radius: 5px;
  color: white;
  background-color: ${(props) =>
    props.disabled ? `rgb(156, 156, 156)` : `rgb(237, 90, 107)`};
`;

function LoginCheckout() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [userBackendDetails, setUserBackendDetails] = useState([]);
  const [addUserAddressDetails, setAddUserAddressDetails] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [userAddressType, setUserAddressType] = useState("home");
  const [paymentMethodSelected, setPaymentMethodSelected] = useState(false);
  const [verifyPhoneModal, setVerifyPhoneModal] = useState(false);
  const [userPhonenumber, setUserPhonenumber] = useState("");
  const [userPhonenumberError, setUserPhonenumberError] = useState(false);
  const cartValue = useSelector((state) => state.restaurantReducer.cartValue);
  const reduxCart = useSelector((state) => state.restaurantReducer.cart);
  const userCoordinates = useSelector(
    (state) => state.landingPageReducer.userCoordinates
  );
  const locationSearchResults = useSelector(
    (state) => state.landingPageReducer.locationSearchResults
  );

  const dispatch = useDispatch();
  const activeUserDetails =
    JSON.parse(localStorage.getItem("activeUser")) || {};

  const paymentHandler = async (e) => {
    e.preventDefault();

    const API_URL = "https://zomato-tomato.tk/api/api/users/";
    const orderUrl = `${API_URL}orderId?amount=${cartValue}`;
    const response = await Axios.get(orderUrl);
    const { data } = response;
    const options = {
      name: "Order Payment",
      description: "Payment of order",
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const url = `${API_URL}capture/${paymentId}`;
          const captureResponse = await Axios.post(url, {
            order: reduxCart,
            amount: cartValue,
            restaurantDetails: {
              restaurantName: location.state.restaurantName,
              restaurantLocation: location.state.restaurantLocation,
              restaurantImage: location.state.restaurantImage,
            },
            order_id: response.razorpay_order_id,
            userId: activeUserDetails.id,
          });
          const successObj = captureResponse.data;
          const captured = successObj.captured;
          if (captured) {
            history.push({
              pathname: `${location.pathname}/success`,
              state: {
                transactionSuccess: true,
                cart: reduxCart,
                amount: cartValue,
                restaurantDetails: {
                  restaurantName: location.state.restaurantName,
                  restaurantLocation: location.state.restaurantLocation,
                  restaurantImage: location.state.restaurantImage,
                },
                order_id: response.razorpay_order_id,
                userId: activeUserDetails.id,
              },
            });
            // <Redirect to={`${location.pathname}/success`} />;
          }
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#c6203d",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const getUserCoordinates = () => {
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      dispatch(getUserLocation(longitude, latitude));
    }

    function error() {
      console.log("Unable to retrieve your location");
    }

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      return navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  const handleOpen = () => {
    setOpen(true);
    if (userCoordinates.latitude === undefined) {
      getUserCoordinates();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getActiveUserDetails = () => {
    Axios({
      method: "get",
      url: `https://zomato-tomato.tk/api/api/users/findById/${activeUserDetails.id}`,
    })
      .then((response) => setUserBackendDetails(response.data.user))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (activeUserDetails.active !== false) {
      getActiveUserDetails();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigationClick = (e) => {
    const { name } = e.target;
    if (name === "login") {
      setOpenLogin(true);
      setOpenSignup(false);
    } else if (name === "signup") {
      setOpenSignup(true);
      setOpenLogin(false);
    }
  };

  const handleNavigationClose = (e) => {
    setOpenLogin(false);
    setOpen(false);
    setOpenSignup(false);
  };

  const addAddressDetails = () => {
    setAddUserAddressDetails(true);
  };

  const handleUserAddressChange = (e) => {
    let { name, value } = e.target;
    if (name === "addressType") {
      setUserAddressType(value);
    } else if (name === "userAddress") {
      setUserAddress(value);
    }
  };

  const saveUserAddress = () => {
    let address = `${userAddress}, ${
      locationSearchResults && locationSearchResults[0].place_name
    }`;
    Axios({
      method: "post",
      url: "https://zomato-tomato.tk/api/api/users/addAddress",
      data: {
        id: activeUserDetails.id,
        address: address,
        type: userAddressType,
      },
    })
      .then((response) => {
        getActiveUserDetails();
      })
      .catch((error) =>
        console.log("There was an error adding user address", error.resposne)
      );
  };

  const verifyNumber = () => {
    setVerifyPhoneModal(true);
  };

  const verifyUserPhoneDetails = () => {
    if (userPhonenumber.length !== 10) {
      setUserPhonenumberError(true);
    } else {
      Axios({
        method: "post",
        url: "https://zomato-tomato.tk/api/api/users/addPhonenumber",
        data: {
          id: activeUserDetails.id,
          phoneNumber: userPhonenumber,
        },
      })
        .then((response) => {
          getActiveUserDetails();
          setVerifyPhoneModal(false);
        })
        .catch((error) =>
          console.log("There was an error adding user address", error.resposne)
        );
    }
  };

  const emptyCartPage = (
    <>
      <Navbar />
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="
https://b.zmtcdn.com/web_assets/b69badeeb9ef00f59428b4c09ef4c1901575873261.png"
            alt="Oops, Your cart is empty"
          />
        </div>
        <h3>Oops! Your cart is empty</h3>
      </div>
    </>
  );

  const SelectAddress = (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Card className={classes.getLocationCard}>
        <Mapbox userCoordinates={userCoordinates} width="100%" height="400px" />
        <div className={classes.getLocationTitle}>
          <h2>Set your delivery location</h2>
          <IconButton onClick={handleNavigationClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div>DELIVERY AREA</div>
        <div className={classes.currentUserLocationDiv}>
          <CheckCircleIcon style={{ color: " rgb(39, 129, 231)" }} />
          <div
            style={{
              flex: "1",
              marginTop: "5px",
              marginLeft: "10px",
            }}
          >
            <div
              style={{
                width: "400px",
                textAlign: "center",
                display: "inline-block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {locationSearchResults.length > 0 &&
                locationSearchResults[0].place_name}
            </div>
          </div>

          <div
            style={{
              color: "red",
              display: "inline-block",
            }}
          >
            CHANGE
          </div>
        </div>
        <div>
          <button
            style={{
              border: "none",
              float: "right",
              padding: "12px 32px",
              borderRadius: "5px",
              backgroundColor: "rgb(237, 90, 107)",
              color: "white",
              fontWeight: 300,
            }}
            onClick={addAddressDetails}
          >
            Confirm and Proceed
          </button>
        </div>
      </Card>
    </Modal>
  );

  const addUserAddressDetailsDiv = (
    <Modal
      open={addUserAddressDetails}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Card className={classes.getLocationCard}>
        <Mapbox userCoordinates={userCoordinates} width="100%" height="270px" />
        <div className={classes.getLocationTitle}>
          <h2>Add address</h2>
          <IconButton onClick={() => setAddUserAddressDetails(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <div>DELIVERY AREA</div>
        <div className={classes.currentUserLocationDiv}>
          <CheckCircleIcon style={{ color: " rgb(39, 129, 231)" }} />
          <div
            style={{
              flex: "1",
              marginTop: "5px",
              marginLeft: "10px",
            }}
          >
            <div
              style={{
                width: "400px",
                textAlign: "center",
                display: "inline-block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {locationSearchResults && locationSearchResults[0].place_name}
            </div>
          </div>

          <div
            style={{
              color: "red",
              display: "inline-block",
            }}
          >
            CHANGE
          </div>
        </div>
        <div>
          <input
            type="text"
            name="userAddress"
            value={userAddress}
            placeholder="House no./Flat no./Floor/Building"
            style={{
              width: "100%",
              border: "1px solid grey",
              borderRadius: "5px",
              padding: "10px",
              outline: "none",
            }}
            onChange={handleUserAddressChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            margin: "15px 0px",
            fontSize: "18px",
            fontWeight: "300",
          }}
        >
          <div style={{ marginRight: "15px" }}>
            <input
              name="addressType"
              value="Work"
              type="radio"
              onChange={handleUserAddressChange}
              style={{ marginRight: "10px" }}
            />
            Work
          </div>
          <div style={{ marginRight: "15px" }}>
            <input
              name="addressType"
              value="Home"
              type="radio"
              onChange={handleUserAddressChange}
              style={{ marginRight: "10px" }}
            />
            Home
          </div>
          <div style={{ marginRight: "15px" }}>
            <input
              name="addressType"
              value="Hotel"
              type="radio"
              onChange={handleUserAddressChange}
              style={{ marginRight: "10px" }}
            />
            Hotel
          </div>
        </div>
        <div>
          <textarea
            style={{ width: "100%", padding: "8px", borderRadius: "6px" }}
            placeholder="Delivery instruction if any:"
          ></textarea>
        </div>
        <div>
          <ProceedAndContinueButton
            disabled={userAddress === ""}
            onClick={saveUserAddress}
          >
            Save and Proceed
          </ProceedAndContinueButton>
        </div>
      </Card>
    </Modal>
  );

  const verifyUserPhone = (
    <Modal
      open={verifyPhoneModal}
      onClose={() => setVerifyPhoneModal(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Card
        style={{
          width: "400px",
          height: "fit-content",
          position: "absolute",
          left: "50%",
          top: "10%",
          transform: "translateX(-50%)",
        }}
      >
        <CardContent>
          <div className={classes.getLocationTitle}>
            <h2>Add your Phone</h2>
            <IconButton onClick={() => setVerifyPhoneModal(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <div>
            <TextField
              fullWidth
              disabled
              id="outlined-disabled"
              label="Full Name"
              defaultValue={`${userBackendDetails.name}`}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              fullWidth
              type="number"
              value={userPhonenumber}
              error={userPhonenumberError}
              helperText={
                userPhonenumberError ? "Please enter a valid number" : ""
              }
              id="outlined-disabled"
              variant="outlined"
              onChange={(e) => {
                setUserPhonenumberError(false);
                setUserPhonenumber(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <>
                    <InputAdornment position="start">+91</InputAdornment>
                    <Divider
                      orientation="horizontal"
                      style={{
                        border: "1px solid #c2c2c2",
                        height: "30px",
                        marginRight: "10px",
                      }}
                    />
                  </>
                ),
              }}
            />
          </div>
          <VerifyUserPhoneButton onClick={verifyUserPhoneDetails}>
            Continue
          </VerifyUserPhoneButton>
        </CardContent>
      </Card>
    </Modal>
  );

  if (reduxCart.length === 0) {
    return emptyCartPage;
  } else if (location.pathname.includes("success")) {
    return <PaymentSuccessPage />;
  } else {
    return (
      <>
        <Wrapper>
          <Navbar />
          <LoginPage
            openLogin={openLogin}
            setOpenLogin={setOpenLogin}
            setOpenSignup={setOpenSignup}
            handleNavigationClose={handleNavigationClose}
          />
          <Signup
            openSignup={openSignup}
            setOpenLogin={setOpenLogin}
            setOpenSignup={setOpenSignup}
            handleNavigationClose={handleNavigationClose}
          />
          <Container maxWidth="md" style={{ padding: "0px" }}>
            <h2 className="mt-4 ml-4 pl-2">Secure Checkout</h2>
            <div className="d-flex">
              <div className="col-8">
                {/* Active User Name and Email Details */}
                {activeUserDetails && activeUserDetails.email ? (
                  <div className="card m-3 rounded">
                    <div className="card-body">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <h4 style={{ margin: "0px", marginRight: "5px" }}>
                          {activeUserDetails && activeUserDetails.name}
                        </h4>
                        <div style={{ fontWeight: "300" }}>
                          ({activeUserDetails && activeUserDetails.email})
                        </div>
                      </div>
                      <p className="card-text">You are securely logged in</p>
                    </div>
                  </div>
                ) : (
                  <div className="card shadow m-3 rounded">
                    <div className="card-body">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <h4 style={{ margin: "0px", marginRight: "5px" }}>
                          Account
                        </h4>
                        <p className="card-text">
                          It's easy to login or create an account with Zomato
                        </p>
                        <div style={{ display: "flex" }} className="mt-2 mb-3">
                          <button
                            name="login"
                            className="btn btn-outline-danger loginBtn"
                            onClick={handleNavigationClick}
                          >
                            Log in
                          </button>
                          <button
                            name="signup"
                            className="btn btn-outline-danger signupBtn"
                            onClick={handleNavigationClick}
                          >
                            Sign up
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Active User Address Details */}
                {activeUserDetails && activeUserDetails.email ? (
                  userBackendDetails &&
                  userBackendDetails.address &&
                  userBackendDetails.address.length === 0 ? (
                    <div className="p-3 shadow m-3 mb-5 bg-white rounded">
                      <div className="card card-border">
                        <h4>Delivery Address</h4>

                        <div className="card card-outline">
                          <div
                            className="card-body text-danger addNewAddress"
                            onClick={handleOpen}
                          >
                            <AddIcon />
                            Add New address
                          </div>
                          {addUserAddressDetails === true
                            ? addUserAddressDetailsDiv
                            : SelectAddress}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className=" m-3 mb-5 bg-white rounded">
                      <div className="card p-3">
                        <h4>Delivery Address</h4>

                        <div>
                          <div style={{ display: "flex", margin: "10px 0px" }}>
                            <div>
                              <CheckCircleIcon
                                style={{
                                  color: " rgb(39, 129, 231)",
                                  marginRight: "10px",
                                }}
                              />
                            </div>
                            <div style={{ width: "fit-content" }}>
                              {userBackendDetails &&
                                userBackendDetails.address &&
                                userBackendDetails.address[0] &&
                                userBackendDetails.address[0].address}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="card m-3 rounded">
                    <div className="card-body">
                      <h4 style={{ color: "grey" }}>Delivery Address</h4>
                      <p className="card-text">Login to choose address</p>
                    </div>
                  </div>
                )}

                {activeUserDetails && activeUserDetails.email !== false ? (
                  userBackendDetails &&
                  userBackendDetails.address &&
                  userBackendDetails.address[0] &&
                  userBackendDetails.address[0].address.length > 0 &&
                  userBackendDetails.phone ? (
                    <div className="card m-3 rounded">
                      <div className="card-body">
                        <h4 style={{ color: "black" }}>
                          Select Payment Method
                        </h4>

                        {paymentMethodSelected ? (
                          <>
                            <div
                              onClick={() =>
                                setPaymentMethodSelected((prev) => !prev)
                              }
                              style={{
                                border: "1px solid rgb(39, 129, 231)",
                                width: "150px",
                                height: "70px",
                                borderRadius: "5px",
                                padding: "5px",
                                backgroundColor: "#cae2fc",
                                cursor: "pointer",
                              }}
                            >
                              <div>
                                <div style={{ display: "flex" }}>
                                  <div style={{ flex: "1" }}>
                                    <img
                                      src="/razorpay.png"
                                      alt="Razorpay Payment"
                                      style={{ width: "90px" }}
                                    />
                                  </div>
                                  <CheckCircleIcon
                                    style={{ color: " rgb(39, 129, 231)" }}
                                  />
                                </div>
                                <div style={{ marginLeft: "5px" }}>
                                  Razorpay
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div
                              onClick={() =>
                                setPaymentMethodSelected((prev) => !prev)
                              }
                              style={{
                                border: "1px solid grey",
                                width: "150px",
                                height: "70px",
                                borderRadius: "5px",
                                padding: "5px",
                                cursor: "pointer",
                              }}
                            >
                              <div>
                                <div style={{ display: "flex" }}>
                                  <div style={{ flex: "1" }}>
                                    <img
                                      src="/razorpay.png"
                                      alt="Razorpay Payment"
                                      style={{ width: "90px" }}
                                    />
                                  </div>
                                  <CheckCircleIcon />
                                </div>
                                <div style={{ marginLeft: "5px" }}>
                                  Razorpay
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="card m-3 rounded">
                      <div className="card-body">
                        <h4 style={{ color: "grey" }}>Select Payment Method</h4>
                        <p className="card-text">
                          Please enter your mobile number to proceed to payment.
                        </p>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="card m-3 rounded">
                    <div className="card-body">
                      <h4 style={{ color: "grey" }}>Select Payment Method</h4>
                      <p className="card-text">
                        Login and select delivery address to select payment
                        methods
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {verifyUserPhone}

              {/* Summary Cart */}
              <div className="col-4">
                <div style={{ fontSize: "20px", margin: "10px 0px" }}>
                  Summary
                </div>
                <div className="card">
                  <div className="card-header">
                    <p className="order-text">ORDER FROM</p>
                    <p className="menu-text">{location.state.restaurantName}</p>
                    <p className="loc-text">
                      {location.state.restaurantLocation}
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      {reduxCart.map((item, index) => {
                        return (
                          <div
                            className="d-flex justify-content-around"
                            key={index}
                          >
                            <div style={{ display: "flex", flex: "1" }}>
                              <div>
                                {item.veg === false ? (
                                  <img
                                    src="/non-veg.png"
                                    alt="Non-Veg Item"
                                    style={{ width: "15px", margin: "0px 8px" }}
                                  />
                                ) : (
                                  <img
                                    src="/veg.png"
                                    alt="Veg Item"
                                    style={{ width: "15px", margin: "0px 8px" }}
                                  />
                                )}
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  fontSize: "14px",
                                }}
                              >
                                <div style={{ marginTop: "2px" }}>
                                  {item.dish}
                                </div>
                                <div style={{ fontWeight: "300" }}>
                                  {" "}
                                  ₹{item.cost}
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginTop: "5px",
                              }}
                            >
                              <div className={classes.customizeButton}>
                                <div
                                  style={{ color: "red", fontWeight: "300" }}
                                  className="bd-highlight"
                                  onClick={() => {
                                    dispatch(
                                      setTotalCartValue(
                                        cartValue - Number(item.cost)
                                      )
                                    );
                                    dispatch(
                                      changeItemQuantityInCart(
                                        item.dish,
                                        item.quantity - 1
                                      )
                                    );
                                  }}
                                >
                                  -
                                </div>
                                <div
                                  className="bd-highlight"
                                  style={{ fontSize: "16px" }}
                                >
                                  {item.quantity}
                                </div>
                                <div
                                  style={{ color: "red", fontWeight: "300" }}
                                  className="bd-highlight"
                                  onClick={() => {
                                    dispatch(
                                      setTotalCartValue(
                                        cartValue + Number(item.cost)
                                      )
                                    );
                                    dispatch(
                                      changeItemQuantityInCart(
                                        item.dish,
                                        item.quantity + 1
                                      )
                                    );
                                  }}
                                >
                                  +
                                </div>
                              </div>
                              <div style={{ fontSize: "14px" }}>
                                ₹{item.quantity * Number(item.cost)}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </li>

                    <li
                      className="bg-light pl-1"
                      style={{ listStyleType: "none" }}
                    >
                      <div className="d-flex justify-content-between pl-2 pr-2 pt-2">
                        <div>
                          <h5 className="heading-text">Subtotal</h5>
                        </div>
                        <div>
                          <p className="cost">₹{cartValue}</p>
                        </div>
                      </div>

                      <hr />
                      <div className="d-flex justify-content-between pl-2 pr-2">
                        <div>
                          <h5 className="heading-text">Grand Total</h5>
                        </div>
                        <div>
                          <p className="cost">₹{cartValue}</p>
                        </div>
                      </div>
                      <hr />
                      <p
                        className="text-danger"
                        style={{ fontSize: "13px", textAlign: "center" }}
                      >
                        Order once placed cannot be cancelled and are
                        non-refundable
                      </p>
                      <hr />

                      {!activeUserDetails &&
                      activeUserDetails.active === false ? (
                        <button
                          onClick={paymentHandler}
                          disabled={
                            activeUserDetails.active === undefined
                              ? false
                              : true
                          }
                          type="button"
                          className="btn btn-secondary btn-lg btn-block"
                        >
                          Place Order
                        </button>
                      ) : !userBackendDetails.phone ? (
                        <button
                          type="button"
                          className="shadow"
                          style={{
                            border: "none",
                            backgroundColor: "rgb(237, 90, 107)",
                            width: "280px",
                            borderRadius: "5px",
                            color: "white",
                            padding: "8px",
                            position: "sticky",
                            bottom: "20px",
                            left: "0px",
                          }}
                          onClick={verifyNumber}
                        >
                          Add your phone number
                        </button>
                      ) : paymentMethodSelected ? (
                        <button
                          onClick={paymentHandler}
                          disabled={false}
                          type="button"
                          className="btn btn-secondary btn-lg btn-block"
                          style={{
                            border: "none",
                            backgroundColor: "rgb(237, 90, 107)",
                            width: "280px",
                            borderRadius: "5px",
                            color: "white",
                            padding: "8px",
                            position: "sticky",
                            bottom: "20px",
                            left: "0px",
                          }}
                        >
                          Place Order
                        </button>
                      ) : (
                        <button
                          onClick={paymentHandler}
                          disabled={true}
                          type="button"
                          className="btn btn-secondary btn-lg btn-block"
                          style={{
                            border: "none",
                            width: "280px",
                            borderRadius: "5px",
                            color: "white",
                            padding: "8px",
                            position: "sticky",
                            bottom: "20px",
                            left: "0px",
                          }}
                        >
                          Place Order
                        </button>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Wrapper>
      </>
    );
  }
}

export default LoginCheckout;
