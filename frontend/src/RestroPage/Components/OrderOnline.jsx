import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { Wrapper } from "../Style/OrderOnlineStyle";

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
