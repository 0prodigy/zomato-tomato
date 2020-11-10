import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  emptyCartItems,
  changeItemQuantityInCart,
  setTotalCartValue,
} from "../Redux/action";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cancel from "@material-ui/icons/Cancel";
import clsx from "clsx";
import DishComponent from "./DishComponent";
import MainFooter from "../../LandingPage/Components/MainFooter";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Button,
  Modal,
  Backdrop,
  Divider,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";

const Wrapper = styled.div`
  * {
    font-family: Poppins;
    font-weight: 300;
  }
  .online-div1 {
    width: 100%;
  }
  .online-div2 {
    display: flex;
  }
  .side-div-left {
    position: sticky;
    top: calc(190px + 90px);
    width: 16rem;
    height: 100%;
    flex-shrink: 0;
    max-height: calc(100vh - 224px);
  }
  .side-div-category-active {
    font-size: inherit;
    line-height: 1.5;
    margin: 0px;
    cursor: pointer;
    padding: 0.8rem 2rem;
    font-weight: 500;
    color: rgb(237, 90, 107);
    border-right: 3px solid rgb(237, 90, 107);
    background: linear-gradient(90deg, rgb(255, 255, 255), rgb(247, 235, 236));
  }
  .side-div-category {
    font-size: inherit;
    line-height: 1.5;
    margin: 0px;
    cursor: pointer;
    padding: 0.8rem 2rem;
    font-weight: 500;
    border-right: 3px solid rgb(237, 90, 107);
  }
  .side-div-right {
    padding-left: 2rem;
    flex: 1 1 0%;
    min-width: 50%;
    border-left: 1px solid rgb(232, 232, 232);
  }
  .order-online {
    font-weight: 400;
  }
  .order-para {
    color: rgb(237, 90, 107);
  }
  .coupons-div1 {
    position: relative;
    width: 15rem;
    height: 3rem;
    flex-shrink: 0;
    -webkit-box-flex: 0;
    flex-grow: 0;
  }
  .coupons-div2 {
    height: 100%;
    border: 1px solid rgb(232, 232, 232);
    border-radius: 6px;
    box-shadow: rgba(54, 54, 54, 0.06) 0px 1px 2px;
    overflow: hidden;
  }
  .coupons-text-left {
    width: 5rem;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0.5rem;
    font-size: 1rem;
    line-height: 1.6rem;
    color: rgb(245, 112, 130);
    text-align: center;
    font-weight: 600;
  }

  .coupons-bar {
    position: absolute;
    top: 0px;
    height: 100%;
    width: 1.4rem;
    margin-left: 5.1rem;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    box-shadow: rgb(255, 255, 255) 0px 5px 0px;
  }

  .coupons-bar-mid1 {
    height: 0.7rem;
    width: 100%;
    border-radius: 0px 0px 2rem 2rem;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(255, 255, 255) rgb(232, 232, 232) rgb(232, 232, 232);
    border-image: initial;
  }
  .coupons-bar-mid2 {
    height: 0.7rem;
    width: 100%;
    border-radius: 0px 0px 2rem 2rem;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(255, 255, 255) rgb(232, 232, 232) rgb(232, 232, 232);
    border-image: initial;
    transform: rotate(180deg);
    box-shadow: rgba(54, 54, 54, 0.06) 0px -2px 2px inset;
    background: rgb(255, 255, 255);
  }
  .main-footer {
    margin-top: 0px;
    width: 100%;
  }
  .logo-section {
    align-items: center;
    width: 100%;

    margin-bottom: 4rem;
  }
  .footer-div {
    max-width: 110rem;
    width: 110rem;
    padding: 2px;
    position: relative;
  }
  .footer-logo {
    margin-top: 50px;
    height: 28px;
  }

  .footer-div {
    position: relative;
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    max-width: 19.3333%;
    padding: 0px;
  }
  .footer-heading: {
    font-weight: 500 !important;
    font-size: 1.4rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    margin: 0px 0px 1.2rem;
  }
  .footer-Link {
    text-decoration: none;
    color: rgb(77, 74, 74);
    font-size: 0.9rem;
    margin: 3.8px;
  }
  .social-link {
    margin-left: 0.6rem;
  }
  .icon-tag {
    text-decoration: none;
    margin-right: 0.8rem;
    color: white;
    height: 10px;
  }
  .social-icons {
    align-item: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: black;
  }
  .icon {
    height: 15px;
    border-radius: 50%;
  }
  .app-store {
    height: 50px;
    width: 150px;
  }
  .policy {
    font-size: 0.85rem;
    color: rgb(130, 130, 130);
    line-height: 1.7rem;
    margin-top: 2.3rem;
  }

  .loc-near-heading {
    line-height: 1.2;
    color: rgb(28, 28, 28);
    font-size: 1rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0px 0px 1rem;
  }
  .loc-near-names {
    margin-bottom: 2.4rem;
  }
  .loc-near-link {
    text-decoration: none;
    font-size: 0.9rem;
    line-height: 1.5;
    font-weight: 400;
    word-break: break-all;
    color: rgb(156, 156, 156);
  }

  ${"" /* .cartFooterPresent {
    margin-bottom: 70px;
  } */}
`;

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
                    <div>SEARCH BAR</div>
                  </div>
                  <div class="alert alert-danger text-danger" role="alert">
                    <Cancel />
                    Does not deliver to: DELHI NCR
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
                    <div class="form-check">
                      <input
                        class="form-check-input position-static"
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
                <Link className="loc-near-link">Tilak Nagar Restaurants, </Link>
                <Link className="loc-near-link">Janakpuri Restaurants, </Link>
                <Link className="loc-near-link">
                  Shubhas Nagar Restaurants,{" "}
                </Link>
                <Link className="loc-near-link">
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
                  {reduxCart.map((item) => {
                    return (
                      <div
                        style={{
                          display: "block",
                          margin: "8px 0px",
                        }}
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
                                class="bd-highlight"
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
                                class="bd-highlight"
                                style={{ fontSize: "16px" }}
                              >
                                {item.quantity}
                              </div>
                              <div
                                style={{ color: "red", fontWeight: "300" }}
                                class="bd-highlight"
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
