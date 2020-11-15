import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

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
  },
}));

const Wrapper = styled.div`
  .payment-success {
    border: 1px solid #e1e1d0;
    position: relative;
    top: 0;
    left: 0;
    height: 260px;
    background-color: #e6f2ff;
    border-radius: 10px;
  }
  .card-top {
    position: absolute;
    top: 170px;
    border-radius: 10px;
    width: 585px;
  }
  .summary {
    letter-spacing: 3px;
  }
  .restro-img {
    height: 60px;
    width: 60px;
  }
  .veg-border {
    border: 1px solid green;
    height: 12px;
    width: 12px;
    margin-left: 0px;
    padding: 1px;
  }
  .veg-color {
    background-color: green;
    border-radius: 50%;
    height: 8px;
    width: 8px;
  }
  .order-div {
    margin-bottom: 1rem;
  }

  .order-text {
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.15rem;
    margin: 0px;
    font-weight: 500;
    color: rgb(105, 105, 105);
  }
  .order-id {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 500;
    margin: 0px;
    font-size: 0.8rem;
  }
  .btn-view {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    color: red;
  }
`;

function SuccessMessage() {
  const classes = useStyles();
  const location = useLocation();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [openSuccessMessage, setOpenSuccessMessage] = React.useState(false);

  const handleOpenSuccessMessage = () => {
    setOpenSuccessMessage(true);
  };

  const handleCloseSuccessMessage = () => {
    setOpenSuccessMessage(false);
  };

  const getTotalAmount = (item) => {
    let totalValue = item.reduce((a, c) => {
      let itemCost1 = c.cost === undefined ? 0 : Number(c.cost);
      return a + itemCost1;
    }, 0);
    return totalValue;
  };

  return (
    <>
      <Wrapper>
        <div className="container">
          <h2 className="mt-5">
            {location.state.restaurantDetails.restaurantName}
          </h2>
          <div className="d-flex">
            <div className="col-7 mt-3 ">
              <div className="payment-success p-5">
                <img
                  src="https://livemap.info/images/check.svg"
                  alt="successful"
                  style={{ height: "80px", marginLeft: "190px" }}
                />
              </div>
              <div class="card card-top ml-3">
                <div class="card-body d-flex">
                  <div>
                    {" "}
                    <h4>Your order has been accepted</h4>
                  </div>

                  <div style={{ marginLeft: "120px" }}>
                    <img
                      src="/like.png"
                      alt="thumbs up"
                      style={{ width: "30px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 mt-3">
              <div class="card">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <p className="summary">ORDER SUMMARY</p>
                    <div className="d-flex">
                      <img
                        src={location.state.restaurantDetails.restaurantImage}
                        alt="pizza"
                        className="restro-img"
                      />
                      <div className="ml-2">
                        {location.state.restaurantDetails.restaurantName}
                        <br />{" "}
                        {location.state.restaurantDetails.restaurantLocation}
                      </div>
                    </div>
                  </li>
                  {location.state.cart.map((item, index) => {
                    return (
                      <li className="list-group-item d-flex" key={index}>
                        <div
                          style={{
                            display: "flex",
                            width: "100%",
                            padding: "4px 0px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flex: "1",
                            }}
                          >
                            <div>{item.quantity} x</div>
                            <div>
                              {item.veg === false ? (
                                <img
                                  src="/non-veg.png"
                                  alt="Non-Veg Item"
                                  style={{
                                    width: "15px",
                                    margin: "0px 8px",
                                  }}
                                />
                              ) : (
                                <img
                                  src="/veg.png"
                                  alt="Veg Item"
                                  style={{
                                    width: "15px",
                                    margin: "0px 8px",
                                  }}
                                />
                              )}
                            </div>
                            <div
                              style={{
                                fontSize: "16px",
                                marginTop: "2px",
                              }}
                            >
                              <div>{item.dish}</div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                  <li
                    class="list-group-item"
                    style={{ fontSize: "15px", color: "red" }}
                  >
                    <button
                      type="button"
                      onClick={handleOpenSuccessMessage}
                      className="btn-view"
                    >
                      View Complete Order Details <ArrowRightIcon />
                    </button>
                    <Modal
                      open={openSuccessMessage}
                      onClose={handleCloseSuccessMessage}
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                    >
                      <div style={modalStyle} className={classes.paper}>
                        <div
                          class="card"
                          style={{
                            width: "100%",
                            border: "none",
                            outline: "none",
                          }}
                        >
                          <ul class="list-group list-group-flush">
                            <li
                              class="list-group-item"
                              style={{ padding: "4px" }}
                            >
                              <div class="d-flex bd-highlight">
                                <div class="p-2 bd-highlight ml-0">
                                  <img
                                    src={
                                      location.state.restaurantDetails
                                        .restaurantImage
                                    }
                                    alt="card1"
                                    style={{
                                      height: "60px",
                                      width: "60px",
                                      borderRadius: "10px",
                                    }}
                                  />
                                </div>
                                <div class="p-2 bd-highlight">
                                  <p>
                                    {
                                      location.state.restaurantDetails
                                        .restaurantName
                                    }
                                    <p
                                      className="text-muted"
                                      style={{ fontSize: "12px" }}
                                    >
                                      {
                                        location.state.restaurantDetails
                                          .restaurantLocation
                                      }
                                    </p>
                                  </p>
                                </div>
                                <div class="ml-auto p-2 bd-highlight">
                                  In Transit
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item">
                              <div class="order-div">
                                <p class="order-text">Your Order</p>
                                {location.state.cart.map((dish) => {
                                  return (
                                    <div
                                      style={{
                                        display: "flex",
                                        width: "100%",
                                        padding: "4px 0px",
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          flex: "1",
                                        }}
                                      >
                                        <div>
                                          {dish.veg === false ? (
                                            <img
                                              src="/non-veg.png"
                                              alt="Non-Veg Item"
                                              style={{
                                                width: "15px",
                                                margin: "0px 8px",
                                              }}
                                            />
                                          ) : (
                                            <img
                                              src="/veg.png"
                                              alt="Veg Item"
                                              style={{
                                                width: "15px",
                                                margin: "0px 8px",
                                              }}
                                            />
                                          )}
                                        </div>
                                        <div
                                          style={{
                                            fontSize: "16px",
                                            marginTop: "2px",
                                            display: "flex",
                                            flexDirection: "column",
                                          }}
                                        >
                                          <div>{dish.dish}</div>
                                          <div>
                                            {dish.quantity} x {dish.cost}
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        ₹
                                        {Number(dish.quantity) *
                                          Number(dish.cost)}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                              <li
                                className="bg-light pl-1"
                                style={{ listStyleType: "none" }}
                              >
                                <div className="d-flex justify-content-between align-items-center pl-2 pr-2 pt-2">
                                  <div className="heading-text">Subtotal</div>

                                  <div>
                                    <p className="cost m-0">
                                      ₹{getTotalAmount(location.state.cart)}
                                    </p>
                                  </div>
                                </div>

                                <hr style={{ margin: "2px 0px" }} />
                                <div className="d-flex justify-content-between align-items-center pl-2 pr-2">
                                  <div className="heading-text">
                                    Grand Total
                                  </div>

                                  <div>
                                    <p className="cost m-0">
                                      ₹{getTotalAmount(location.state.cart)}
                                    </p>
                                  </div>
                                </div>
                              </li>

                              <hr />
                              <div style={{ fontSize: "18px" }}>
                                Order Details
                              </div>
                              <div class="order-div">
                                <p
                                  class="order-text"
                                  style={{
                                    margin: "0px",
                                    fontWeight: "300",
                                    color: "grey",
                                  }}
                                >
                                  ORDER ID
                                </p>
                                <p class="order-id">2029441541</p>
                              </div>
                              <div class="order-div">
                                <p
                                  class="order-text"
                                  style={{
                                    margin: "0px",
                                    fontWeight: "300",
                                    color: "grey",
                                  }}
                                >
                                  PAYMENT
                                </p>
                                <p class="order-id">Razorpay</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Modal>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default SuccessMessage;
