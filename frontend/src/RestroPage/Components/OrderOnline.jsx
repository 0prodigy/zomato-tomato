import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cancel from "@material-ui/icons/Cancel";
import AssistantIcon from "@material-ui/icons/Star";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
// import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";
// import PopoverContent from "react-bootstrap/PopoverContent";
// import PopoverTitle from "react-bootstrap/PopoverTitle";
import LanguageIcon from "@material-ui/icons/Language";
import DishComponent from "./DishComponent";
import MainFooter from "../../LandingPage/Components/MainFooter";

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
`;

function OrderOnline(props) {
  const { data } = props;

  const [cart, setCart] = useState({});

  // const addToCart = (dish) => {
  //   console.log(dish);
  //   console.log("added", cart.length + 1);
  //   setCart([...cart, dish]);
  // };

  const cartFunction = (dish, quantity) => {
    console.log(dish, quantity);
    setCart({
      ...cart,
      dish: quantity,
    });
  };

  return (
    <div>
      <>
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
                        <DishComponent
                          cartFunction={cartFunction}
                          dish={dish}
                          key={i}
                        />
                      ))}
                    <div className="mb-3">
                      <div className="d-flex">
                        <div className="mr-3">
                          <img
                            src="https://b.zmtcdn.com/data/dish_photos/39e/d0335754835f2bea93f9b2882b0c239e.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
                            alt="card"
                            style={{
                              height: "129px",
                              width: "127px",
                              borderRadius: "10px",
                            }}
                          />
                          <div className="mr-3"></div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5>Dhoda Special</h5>
                            <div className="d-flex">
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />{" "}
                              <p>214 Votes</p>
                            </div>
                            <p>₹114.28</p>
                          </div>
                          <div>
                            <button
                              type="button"
                              class="btn btn-light"
                              style={{ marginLeft: "400px" }}
                            >
                              ADD +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex">
                        <div className="mr-3">
                          <img
                            src="https://b.zmtcdn.com/data/dish_photos/fb3/9ec8913365d9d5a5428639e59572dfb3.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
                            alt="card"
                            style={{
                              height: "129px",
                              width: "127px",
                              borderRadius: "10px",
                            }}
                          />
                          <div className="mr-3"></div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5>Dhoda Special</h5>
                            <div className="d-flex">
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />{" "}
                              <p>214 Votes</p>
                            </div>
                            <p>₹114.28</p>
                          </div>
                          <div>
                            <button
                              type="button"
                              class="btn btn-light"
                              style={{ marginLeft: "400px" }}
                            >
                              ADD +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex">
                        <div className="mr-3">
                          <img
                            src="https://b.zmtcdn.com/data/dish_photos/867/1780e4c87bf57cd83f6c8e1ebe3ff867.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
                            alt="card"
                            style={{
                              height: "129px",
                              width: "127px",
                              borderRadius: "10px",
                            }}
                          />
                          <div className="mr-3"></div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5>Dhoda Special</h5>
                            <div className="d-flex">
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />{" "}
                              <p>214 Votes</p>
                            </div>
                            <p>₹114.28</p>
                          </div>
                          <div>
                            <button
                              type="button"
                              class="btn btn-light"
                              style={{ marginLeft: "400px" }}
                            >
                              ADD +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex">
                        <div className="mr-3">
                          <img
                            src="https://b.zmtcdn.com/data/dish_photos/5d2/43b99589688105bc9751ea43c52c35d2.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"
                            alt="card"
                            style={{
                              height: "129px",
                              width: "127px",
                              borderRadius: "10px",
                            }}
                          />
                          <div className="mr-3"></div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <h5>Dhoda Special</h5>
                            <div className="d-flex">
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />
                              <AssistantIcon
                                style={{ color: "rgb(255,216,0)" }}
                              />{" "}
                              <p>214 Votes</p>
                            </div>
                            <p>₹114.28</p>
                          </div>
                          <div>
                            <button
                              type="button"
                              class="btn btn-light"
                              style={{ marginLeft: "400px" }}
                            >
                              ADD +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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
        </Wrapper>
      </>
    </div>
  );
}

export default OrderOnline;
