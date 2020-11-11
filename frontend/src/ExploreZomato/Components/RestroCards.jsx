import React from "react";
import { Link } from "react-router-dom";
import AssistantIcon from "@material-ui/icons/Star";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Wrapper } from "../Styles/RestroCardStyle";

function RestroCards() {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="mt-5">
            <h3>Order Food Online in Jai Singh Road</h3>
          </div>

          <div className="row">
            <div className="col-2 bg-white mb-5 p-2 rounded border">
              <div>
                <h5>Filters</h5>
              </div>
              <hr />
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label
                    className="form-check-label"
                    for="gridCheck"
                    style={{ fontSize: "12px" }}
                  >
                    Zomato pro partner
                  </label>
                </div>
              </div>
              <div>
                <hr />
                <div className="form-group mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" for="gridCheck">
                      <p
                        className="text-success"
                        style={{ fontSize: "15px", fontWeight: "600" }}
                      >
                        Check me out
                      </p>
                    </label>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: "500" }}>
                    Quick Filters
                  </p>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label
                      className="form-check-label"
                      for="gridCheck"
                      style={{ fontSize: "12px" }}
                    >
                      Promotions
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label
                      className="form-check-label"
                      for="gridCheck"
                      style={{ fontSize: "12px" }}
                    >
                      Pure Veg
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label
                      className="form-check-label"
                      for="gridCheck"
                      style={{ fontSize: "12px" }}
                    >
                      Online Payments
                    </label>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    marginBottom: "0px",
                    marginTop: "15px",
                  }}
                >
                  Sort By
                </p>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  Popularity-high to low
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  Delivery Rating
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  Rating
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  Recently Added
                </h5>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    marginBottom: "0px",
                    marginTop: "15px",
                  }}
                >
                  Cuisines
                </p>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  North Indian
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  Chinese
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  Beverages
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  Mughlai
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  Rolls
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  South Indian
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  Biriyani
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  Italian
                </h5>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    marginBottom: "0px",
                    marginTop: "15px",
                  }}
                >
                  Delivery Time
                </p>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  Up to 30 minutes
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  Up to 45 minutes
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  Up to 60 minutes
                </h5>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    marginBottom: "0px",
                    marginTop: "15px",
                  }}
                >
                  Cost for Two
                </p>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  Less than ₹250
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  ₹250 to ₹500
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  ₹500 to ₹1000
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  ₹1000 to ₹1500
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  ₹1500 to ₹2500
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  ₹2500+
                </h5>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    marginBottom: "0px",
                    marginTop: "15px",
                  }}
                >
                  Minimum Order
                </p>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  No minimum order
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  Up to ₹150
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  Up to ₹250
                </h5>
                <h5
                  className="form-check-label p-1"
                  for="gridCheck"
                  style={{ fontSize: "12px" }}
                >
                  Up to ₹500
                </h5>
              </div>
            </div>

            <div className="col-10">
              <div className="border p-3 rounded search-div">
                <div className="row">
                  <div className="col-5">
                    Searching in...
                    <div className="input-group flex-nowrap">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Please enter your delivery location"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping">
                          <img
                            src="https://images.vexels.com/media/users/3/141915/isolated/preview/fa18fbc911311b5371870c880fa5f75a-location-pin-by-vexels.png"
                            alt="location"
                            style={{ height: "20px" }}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    searching for...
                    <input
                      type="text"
                      className="form-control"
                      placeholder="search for restaurants or cuisines"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <div className="card">
                    <div className="card-body d-flex">
                      <img
                        src="https://b.zmtcdn.com/data/pictures/chains/8/301718/c754be5e4d4ed74f5f07da1c3fe6ce77.jpg?output-format=webp"
                        style={{ width: "87px", height: "101px" }}
                        className="mr-3 rounded"
                        alt="card1"
                      />
                      <div>
                        <div className="col-lg-12 col-sm-13">
                          <div className="row">
                            <Link className="card-heading-link">
                              Biryani Blues
                            </Link>
                            <div className="single-rating d-flex">
                              <div className="d-flex m-1">
                                <AssistantIcon style={{ color: "#E23744" }} />
                                <AssistantIcon style={{ color: "#E23744" }} />
                                <AssistantIcon style={{ color: "#E23744" }} />
                                <AssistantIcon style={{ color: "#E23744" }} />
                                <AssistantIcon style={{ color: "#cfcfcf" }} />
                                <span className="ratings-count">4.0</span>
                                <span className="review-count">
                                  (3,384 Reviews)
                                </span>
                              </div>
                            </div>

                            <div className="description">
                              <div className="clear"></div>
                              <div className="grey-text flex-nowrap  ln24 ">
                                {" "}
                                Biryani, Hyderabadi, Fast Food, Kebab
                              </div>
                              <div className="grey-text flex-nowrap   ln24 ">
                                Cost ₹250 for one
                              </div>
                              <div className="flex-nowrap order-min ln24 ">
                                Min ₹50
                                <span className="middot"> · </span> Up to 34 min{" "}
                              </div>
                              <div className="flex-nowrap  order-min ln24 ">
                                Accepts cash & online payments
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="card-footer bg-white "
                      style={{
                        padding: "0px",
                        margin: "0px",
                      }}
                    >
                      <div className="d-flex bd-highlight">
                        <div
                          className="ml-auto bd-highlight text-success p-2 border-left"
                          style={{
                            backgroundColor: "#e6f5ec",
                            marginBottom: "0px",
                          }}
                        >
                          Order Online
                          <ArrowForwardIosIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <div className="card-body d-flex">
                      <img
                        src="https://b.zmtcdn.com/data/pictures/chains/8/301718/c754be5e4d4ed74f5f07da1c3fe6ce77.jpg?output-format=webp"
                        style={{ width: "87px", height: "101px" }}
                        className="mr-3 rounded"
                        alt="card1"
                      />
                      <div>
                        <div className="col-lg-12 col-sm-13">
                          <div className="row">
                            <Link className="card-heading-link">
                              Biryani Blues
                            </Link>
                            <div className="single-rating d-flex">
                              <div className="d-flex m-1">
                                <AssistantIcon style={{ color: "#E23744" }} />
                                <AssistantIcon style={{ color: "#E23744" }} />
                                <AssistantIcon style={{ color: "#E23744" }} />
                                <AssistantIcon style={{ color: "#E23744" }} />
                                <AssistantIcon style={{ color: "#cfcfcf" }} />
                                <span className="ratings-count">4.0</span>
                                <span className="review-count">
                                  (3,384 Reviews)
                                </span>
                              </div>
                            </div>

                            <div className="description">
                              <div className="clear"></div>
                              <div className="grey-text flex-nowrap  ln24 ">
                                {" "}
                                Biryani, Hyderabadi, Fast Food, Kebab
                              </div>
                              <div className="grey-text flex-nowrap   ln24 ">
                                Cost ₹250 for one
                              </div>
                              <div className="flex-nowrap order-min ln24 ">
                                Min ₹50
                                <span className="middot"> · </span> Up to 34 min{" "}
                              </div>
                              <div className="flex-nowrap  order-min ln24 ">
                                Accepts cash & online payments
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="card-footer bg-white "
                      style={{
                        padding: "0px",
                        margin: "0px",
                      }}
                    >
                      <div className="d-flex bd-highlight">
                        <div
                          className="ml-auto bd-highlight text-success p-2 border-left"
                          style={{
                            backgroundColor: "#e6f5ec",
                            marginBottom: "0px",
                          }}
                        >
                          Order Online
                          <ArrowForwardIosIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default RestroCards;
