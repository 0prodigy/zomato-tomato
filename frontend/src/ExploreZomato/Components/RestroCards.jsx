import React from "react";
import { Wrapper } from "../Styles/RestroCardStyle";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import AssistantIcon from "@material-ui/icons/Star";
import { CircularProgress, Backdrop } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterRestaurant } from "../Redux/action";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    display: "flex",
    flexDirection: "column",
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function RestroCards() {
  const classes = useStyles();
  const match = useRouteMatch();
  const location = useLocation();
  const [filters, setFilter] = useState(
    (location.state && location.state.filter) || {}
  );
  const [title, setTitle] = useState("Order-online");
  const [sort, setSort] = useState({});
  const dispatch = useDispatch();
  const { restaurants, isLoading } = useSelector(
    (state) => state.restaurantFilterReducer
  );

  const handleRequest = () => {
    dispatch(
      getFilterRestaurant(
        filters,
        sort,
        location.state && location.state.city_id
      )
    );
  };

  const handleFilter = (e, payload) => {
    setFilter({ ...payload });
  };

  const handleSort = (e, payload) => {
    setSort({ ...payload });
  };

  useEffect(() => {
    if (location.state && location.state.title) {
      setTitle(location.state.title);
    }
    handleRequest();
    //eslint-disable-next-line
  }, [filters, sort]);

  if (isLoading) {
    return (
      <div style={{ minHeight: "90vh" }}>
        <Backdrop className={classes.backdrop} open={isLoading}>
          <CircularProgress color="secondary" />
          <div>Coming right up...</div>
        </Backdrop>
      </div>
    );
  } else {
    return (
      <>
        <Wrapper>
          <div className="container">
            <div className="mt-5">
              {title === "near you" ? (
                <h3>Order Food Online in your nearby area</h3>
              ) : (
                <h3>Order Food Online in {title}</h3>
              )}
            </div>

            <div className="row">
              <div className="col-2 bg-white mb-5 p-2 rounded border sidebar">
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
                      htmlFor="gridCheck"
                      style={{ fontSize: "12px", cursor: "pointer" }}
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
                      <label className="form-check-label" htmlFor="gridCheck">
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
                        htmlFor="gridCheck"
                        style={{ fontSize: "12px", cursor: "pointer" }}
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
                        htmlFor="gridCheck"
                        style={{ fontSize: "12px", cursor: "pointer" }}
                      >
                        Pure Veg
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                        onChange={() =>
                          handleFilter({ has_online_delivery: 1 })
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="gridCheck"
                        style={{ fontSize: "12px", cursor: "pointer" }}
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
                    className={
                      sort["user_rating.votes"] === 1
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    name="pop"
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) => handleSort(e, { "user_rating.votes": 1 })}
                  >
                    Popularity-high to low
                  </h5>
                  <h5
                    className={
                      sort.all_reviews_count === 1
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) => handleSort(e, { all_reviews_count: 1 })}
                  >
                    Delivery Rating
                  </h5>
                  <h5
                    className={
                      sort["user_rating.aggregate_rating"] === 1
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) =>
                      handleSort(e, { "user_rating.aggregate_rating": 1 })
                    }
                  >
                    Rating
                  </h5>
                  <h5
                    className={
                      sort.photo_count === 1
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) => handleSort(e, { photo_count: 1 })}
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
                    className={
                      filters.cuisines === "North Indian"
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) =>
                      handleFilter(e, { cuisines: "North Indian" })
                    }
                  >
                    North Indian
                  </h5>
                  <h5
                    className={
                      filters.cuisines === "Chinese"
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) => handleFilter(e, { cuisines: "Chinese" })}
                  >
                    Chinese
                  </h5>
                  <h5
                    className={
                      filters.cuisines === "Beverages"
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) => handleFilter(e, { cuisines: "Beverages" })}
                  >
                    Beverages
                  </h5>
                  <h5
                    className={
                      filters.cuisines === "Mughlai"
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) => handleFilter(e, { cuisines: "Mughlai" })}
                  >
                    Mughlai
                  </h5>
                  <h5
                    className={
                      filters.cuisines === "Rolls"
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) => handleFilter(e, { cuisines: "Rolls" })}
                  >
                    Rolls
                  </h5>
                  <h5
                    className={
                      filters.cuisines === "South Indian"
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) =>
                      handleFilter(e, { cuisines: "South Indian" })
                    }
                  >
                    South Indian
                  </h5>
                  <h5
                    className={
                      filters.cuisines === "Biriyani"
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) => handleFilter(e, { cuisines: "Biriyani" })}
                  >
                    Biriyani
                  </h5>
                  <h5
                    className={
                      filters.cuisines === "Italian"
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) => handleFilter(e, { cuisines: "Italian" })}
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
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                  >
                    Up to 30 minutes
                  </h5>
                  <h5
                    className="form-check-label p-1"
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                  >
                    Up to 45 minutes
                  </h5>
                  <h5
                    className="form-check-label p-1"
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
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
                    className={
                      filters &&
                      filters.average_cost_for_two &&
                      filters.average_cost_for_two["$lt"] === 250
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) =>
                      handleFilter(e, { average_cost_for_two: { $lt: 250 } })
                    }
                  >
                    Less than ₹250
                  </h5>
                  <h5
                    className={
                      filters &&
                      filters.average_cost_for_two &&
                      filters.average_cost_for_two["$lt"] === 500 &&
                      filters.average_cost_for_two["$gt"] === 250
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) =>
                      handleFilter(e, {
                        average_cost_for_two: { $lt: 500, $gt: 250 },
                      })
                    }
                  >
                    ₹250 to ₹500
                  </h5>
                  <h5
                    className={
                      filters &&
                      filters.average_cost_for_two &&
                      filters.average_cost_for_two["$lt"] === 1000 &&
                      filters.average_cost_for_two["$gt"] === 500
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) =>
                      handleFilter(e, {
                        average_cost_for_two: { $lt: 1000, $gt: 500 },
                      })
                    }
                  >
                    ₹500 to ₹1000
                  </h5>
                  <h5
                    className={
                      filters &&
                      filters.average_cost_for_two &&
                      filters.average_cost_for_two["$lt"] === 1500 &&
                      filters.average_cost_for_two["$gt"] === 1000
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) =>
                      handleFilter(e, {
                        average_cost_for_two: { $lt: 1500, $gt: 1000 },
                      })
                    }
                  >
                    ₹1000 to ₹1500
                  </h5>
                  <h5
                    className={
                      filters &&
                      filters.average_cost_for_two &&
                      filters.average_cost_for_two["$lt"] === 2500 &&
                      filters.average_cost_for_two["$gt"] === 1500
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) =>
                      handleFilter(e, {
                        average_cost_for_two: { $lt: 2500, $gt: 1500 },
                      })
                    }
                  >
                    ₹1500 to ₹2500
                  </h5>
                  <h5
                    className={
                      filters &&
                      filters.average_cost_for_two &&
                      filters.average_cost_for_two["$gt"] === 2500
                        ? "active form-check-label p-1"
                        : " form-check-label p-1"
                    }
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={(e) =>
                      handleFilter(e, { average_cost_for_two: { $gt: 2500 } })
                    }
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
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                  >
                    No minimum order
                  </h5>
                  <h5
                    className="form-check-label p-1"
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                  >
                    Up to ₹150
                  </h5>
                  <h5
                    className="form-check-label p-1"
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                  >
                    Up to ₹250
                  </h5>
                  <h5
                    className="form-check-label p-1"
                    htmlFor="gridCheck"
                    style={{ fontSize: "12px", cursor: "pointer" }}
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
                          <span
                            className="input-group-text"
                            id="addon-wrapping"
                          >
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
                  {restaurants &&
                    restaurants?.map((restaurant, i) => {
                      return (
                        <div className="col-6" key={restaurant.id}>
                          <div
                            className="card mt-4 mb-2"
                            style={{ maxHeight: "275px", height: "450px" }}
                          >
                            <div className="card-body d-flex">
                              <img
                                src={restaurant && restaurant.thumb}
                                style={{ width: "87px", height: "101px" }}
                                className="mr-3 rounded"
                                alt="card1"
                              />
                              <div>
                                <div className="col-lg-12 col-sm-13">
                                  <div className="row">
                                    <Link
                                      to={{
                                        pathname: `/${
                                          match.params.city
                                        }/restaurants/${restaurant.name
                                          .toLowerCase()
                                          .split(" ")
                                          .join("")}`,
                                        state: { res_id: restaurant.id },
                                      }}
                                      className="card-heading-link"
                                      style={{ textDecoration: "none" }}
                                    >
                                      {restaurant && restaurant.name}
                                    </Link>
                                    <div className="single-rating d-flex align-items-center">
                                      <div className="d-flex m-1">
                                        {restaurant &&
                                          new Array(
                                            Math.floor(
                                              parseInt(
                                                restaurant.user_rating
                                                  .aggregate_rating
                                              )
                                            )
                                          )
                                            .fill(0)
                                            .map((star, i) => (
                                              <AssistantIcon
                                                key={i}
                                                style={{ color: "#E23744" }}
                                              />
                                            ))}
                                        <span
                                          className="ratings-count"
                                          style={{
                                            paddingTop: "4px",
                                            marginLeft: "4px",
                                          }}
                                        >
                                          {parseInt(
                                            restaurant.user_rating
                                              .aggregate_rating
                                          ).toFixed(1)}
                                        </span>
                                        <span
                                          className="review-count"
                                          style={{
                                            paddingTop: "4px",
                                            marginLeft: "4px",
                                          }}
                                        >
                                          (
                                          {restaurant &&
                                            restaurant.all_reviews_count}{" "}
                                          Reviews)
                                        </span>
                                      </div>
                                    </div>

                                    <div className="description">
                                      <div className="clear"></div>
                                      <div className="grey-text flex-nowrap  ln24 ">
                                        {" "}
                                        {restaurant &&
                                          restaurant.cuisines
                                            .split(",")
                                            .map(
                                              (item, i) =>
                                                i < 5 && (
                                                  <React.Fragment
                                                    key={item + i}
                                                  >
                                                    {item}
                                                  </React.Fragment>
                                                )
                                            )}
                                      </div>
                                      <div className="grey-text flex-nowrap   ln24 ">
                                        Cost ₹
                                        {restaurant &&
                                          restaurant.average_cost_for_two}{" "}
                                        for two
                                      </div>
                                      <div className="flex-nowrap order-min ln24 ">
                                        Min ₹50
                                        <span className="middot"> · </span> Up
                                        to 34 min{" "}
                                      </div>
                                      <div className="flex-nowrap  order-min ln24 ">
                                        Accepts cash{" "}
                                        {restaurant &&
                                          restaurant.has_online_delivery &&
                                          "& online payments"}
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
                              <Link
                                to={{
                                  pathname: `/${
                                    match.params.city
                                  }/restaurants/${restaurant.name
                                    .toLowerCase()
                                    .split(" ")
                                    .join("")}`,
                                  state: { res_id: restaurant.id },
                                }}
                                style={{ textDecoration: "none" }}
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
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </>
    );
  }
}

export default RestroCards;
