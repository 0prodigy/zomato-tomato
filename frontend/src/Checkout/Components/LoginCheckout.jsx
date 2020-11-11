import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  changeItemQuantityInCart,
  setTotalCartValue,
} from "../../RestroPage/Redux/action";
import Navbar from "./Navbar";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { Wrapper } from "../Styles/LoginCheckoutStyle";
import { Modal, Container } from "@material-ui/core";
import Axios from "axios";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
}));

function LoginCheckout() {
  const classes = useStyles();
  const location = useLocation();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const cartValue = useSelector((state) => state.restaurantReducer.cartValue);
  const reduxCart = useSelector((state) => state.restaurantReducer.cart);
  const dispatch = useDispatch();
  const activeUserDetails = JSON.parse(localStorage.getItem("activeUser"));
  const [getUserDetails, setUserDetails] = useState();

  const handleUserLocation = () => {};

  const paymentHandler = async (e) => {
    e.preventDefault();

    const API_URL = "http://localhost:5000/api/users/";
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
            userId: activeUserDetails.id,
          });
          const successObj = captureResponse.data;
          const captured = successObj.captured;
          if (captured) {
            console.log("success");
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
    </div>
  );

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

  if (reduxCart.length === 0) {
    return emptyCartPage;
  } else {
    return (
      <>
        <Wrapper>
          <Navbar />
          <Container maxWidth="md" style={{ padding: "0px" }}>
            <h2 className="mt-4 ml-4 pl-2">Secure Checkout</h2>
            <div className="d-flex">
              <div className="col-8">
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
                <div className="p-3 shadow m-3 mb-5 bg-white rounded">
                  <div className="card card-border">
                    <h4>Delivery Address</h4>

                    <div className="card card-outline">
                      <div
                        className="card-body text-danger"
                        onClick={handleOpen}
                      >
                        <AddIcon />
                        Add New address
                      </div>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                      >
                        {body}
                      </Modal>
                    </div>
                  </div>
                </div>
                <div className="card m-3 rounded">
                  <div className="card-body">
                    <h4>Select Payment Method</h4>
                    <p className="card-text">
                      select delivery address to select payment method
                    </p>
                  </div>
                </div>
              </div>

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
                      {reduxCart.map((item) => {
                        return (
                          <div className="d-flex justify-content-around">
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

                    <li className="list-group-item bg-light">
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
                      <button
                        onClick={paymentHandler}
                        type="button"
                        className="btn btn-secondary btn-lg btn-block"
                      >
                        Place Order
                      </button>
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
