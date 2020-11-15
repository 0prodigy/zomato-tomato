import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  emptyCartItems,
  changeItemQuantityInCart,
  setTotalCartValue,
} from "../Redux/action";
import { Link } from "react-router-dom";
import clsx from "clsx";
import DishComponent from "./DishComponent";
import MainFooter from "../../LandingPage/Components/MainFooter";
import { Wrapper } from "../Style/OrderOnlineStyle";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Backdrop from "@material-ui/core/Backdrop";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

const CartWrapper = styled.div`
  position: fixed;
  z-index: 1400;
  width: 100%;
  height: 65px;
  bottom: 0;
  background-color: white;
  .cartFooter {
    margin: 0px auto;
    height: 65px;
    width: 73%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .showMoreItems {
    border: 1px solid grey;
    border-radius: 4px;
    padding: 0;
    width: fit-content;
    margin-right: 20px;
  }

  .customizeButton {
    border: 1px solid grey;
    display: flex;
    border-radius: 6px;
    cursor: pointer;
    justify-content: center;
    align-content: center;
    width: 80px;

    div {
      padding: 2px 0px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div:nth-last-child(2) {
      background-color: rgb(247, 235, 236);
      :hover {
        background-color: #f7d7da;
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "4px",
  },
  expand: {
    transform: "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(0deg)",
  },
  goToCart: {
    background: "rgb(237, 90, 107)",
    width: "150px",
    color: "white",
    margin: "20px 0px",
    padding: "6px 0px",
    borderRadius: "6px",
    fontSize: "16px",
    textTransform: "none",
    fontWeight: "300",
    "&:hover": {
      background: "#f7394f",
    },
  },
  clearCart: {
    border: "1px solid rgb(237, 90, 107)",
    width: "150px",
    color: "rgb(237, 90, 107)",
    margin: "20px 10px",
    padding: "6px 0px",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "300",
    textTransform: "none",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "100%",
    position: "absolute",
    bottom: "60px",
    height: "300px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 4, 3),
  },

  showCartItems: {
    width: "73%",
    margin: "0px auto",
    "& >div >div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
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

function OrderOnline(props) {
  const { data } = props;
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [expanded, setExpanded] = useState(false);
  const cartValue = useSelector((state) => state.restaurantReducer.cartValue);
  const reduxCart = useSelector((state) => state.restaurantReducer.cart);
  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div>
        <Wrapper>
          {/* Order Online */}
          <div className="container">
            <section className="online-div1">
              <section className="online-div2">
                <div>
                  <section className="side-div-left">
                    <p className="side-div-category-active">
                      Match Time Combos
                    </p>
                    <p className="side-div-category">Recomended</p>
                    <p className="side-div-category">Baked Delights</p>
                    <p className="side-div-category">Sweets</p>
                    <p className="side-div-category">Dry Cakes and Muffins</p>
                    <p className="side-div-category">Amritsari Kulcha</p>
                    <p className="side-div-category">All Day Breakfast</p>
                  </section>
                </div>
                <section className="side-div-right">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h4 className="order-online">Order Online</h4>
                      <p className="order-para">
                        {data &&
                          !data.is_delivering_now &&
                          "Currently closed for online ordering"}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="coupons-div1 m-3">
                      <div className="coupons-div2">
                        <div className="coupons-text-left">50% OFF</div>
                        <div className="coupons-text-right">
                          use code WELCOME50 to ava...
                        </div>
                      </div>
                      <div className="coupons-bar">
                        <div className="coupons-bar-mid1"></div>
                        <div className="coupons-bar-mid2"></div>
                      </div>
                    </div>
                    <div className="coupons-div1 m-3">
                      <div className="coupons-div2">
                        <div className="coupons-text-left">50% OFF</div>
                        <div className="coupons-text-right">
                          <p> use code WELCOME50 to ava...</p>
                        </div>
                      </div>
                      <div className="coupons-bar">
                        <div className="coupons-bar-mid1"></div>
                        <div className="coupons-bar-mid2"></div>
                      </div>
                    </div>
                    <div className="coupons-div1 m-3">
                      <div className="coupons-div2">
                        <div className="coupons-text-left">50% OFF</div>
                        <div className="coupons-text-right">
                          use code WELCOME50 to ava...
                        </div>
                      </div>
                      <div className="coupons-bar">
                        <div className="coupons-bar-mid1"></div>
                        <div className="coupons-bar-mid2"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input position-static"
                        type="checkbox"
                        id="blankCheckbox"
                        value="option1"
                        aria-label="..."
                      />{" "}
                      Veg Only
                    </div>
                  </div>
                  <hr />
                  <div>
                    <div>
                      <h4 style={{ fontWeight: "300" }}>Recommemded</h4>
                    </div>
                    {data &&
                      data.menu?.map((dish, i) => (
                        <DishComponent dish={dish} key={i} />
                      ))}
                  </div>
                </section>
              </section>
            </section>
            <div></div>
          </div>
          <div className="container">
            <hr />
          </div>
          <div className="container">
            <div className="loc-near">
              <h6 className="loc-near-heading">
                RESTAURANTS AROUND {data.location && data.location.locality}
              </h6>
              <div className="loc-near-names">
                <Link to="/#" className="loc-near-link">
                  Tilak Nagar Restaurants,{" "}
                </Link>
                <Link to="/#" className="loc-near-link">
                  Janakpuri Restaurants,{" "}
                </Link>
                <Link to="/#" className="loc-near-link">
                  Shubhas Nagar Restaurants,{" "}
                </Link>
                <Link to="/#" className="loc-near-link">
                  Mayapuri Phase Two Restaurants
                </Link>
              </div>
            </div>
          </div>
          <MainFooter />
          <div
            className={
              reduxCart && reduxCart.length > 0 ? "cartFooterPresent" : ""
            }
          ></div>
        </Wrapper>
      </div>
      {reduxCart && reduxCart.length > 0 && (
        <CartWrapper>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={expanded}
            onClose={() => setExpanded((prev) => !prev)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <div className={classes.paper}>
              <div className={classes.showCartItems}>
                <div
                  style={{
                    margin: "8px 0px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ fontSize: "24px" }}>Your Orders</div>
                  <IconButton onClick={() => setExpanded((prev) => !prev)}>
                    <CloseIcon />
                  </IconButton>
                </div>
                <div style={{ overflow: "auto", height: "235px" }}>
                  {reduxCart.map((item, index) => {
                    return (
                      <div
                        style={{
                          display: "block",
                          margin: "8px 0px",
                        }}
                        key={index}
                      >
                        <Divider orientation="horizontal" />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            padding: "4px 0px",
                          }}
                        >
                          <div style={{ display: "flex" }}>
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
                            <div style={{ fontSize: "16px", marginTop: "2px" }}>
                              {item.dish}
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
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
                            <div
                              style={{ fontSize: "14px", fontWeight: "300" }}
                            >
                              ₹{item.quantity * Number(item.cost)}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Modal>

          <div className="cartFooter">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="showMoreItems">
                <IconButton
                  className={clsx(classes.expand, classes.root, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  disableRipple
                  color="inherit"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </div>
              <div style={{ fontSize: "18px" }}>
                {" "}
                Your Order ({reduxCart.length})
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "fit-content",
                  fontSize: "18px",
                  marginRight: "12px",
                }}
              >
                Subtotal: ₹<span>{cartValue}</span>
              </div>
              {expanded && (
                <Button
                  className={classes.clearCart}
                  onClick={() => {
                    dispatch(setTotalCartValue(0));
                    dispatch(emptyCartItems());
                  }}
                >
                  Clear Cart
                </Button>
              )}
              <Button
                className={classes.goToCart}
                onClick={() =>
                  history.push({
                    pathname: location.pathname + "/order",
                    state: {
                      restaurantImage: data.thumb,
                      restaurantName: data.name,
                      restaurantLocation: data.location.locality_verbose,
                    },
                  })
                }
              >
                Continue
              </Button>
            </div>
          </div>
        </CartWrapper>
      )}
    </>
  );
}

export default OrderOnline;
