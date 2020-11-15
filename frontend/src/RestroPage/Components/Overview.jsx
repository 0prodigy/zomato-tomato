import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserLocation } from "../../LandingPage/Redux/action";
import { Link } from "react-router-dom";
import ArrowRightIcons from "@material-ui/icons/ArrowRight";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import AssistantIcon from "@material-ui/icons/Star";
import ArrowRight from "@material-ui/icons/ArrowRight";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { Wrapper } from "../Style/OverviewStyle";
import MainFooter from "../../LandingPage/Components/MainFooter";
import { Card, CardContent } from "@material-ui/core";
import DirectionsIcon from "@material-ui/icons/Directions";

function Overview(props) {
  const { data } = props;
  const [restaurantLocation, setRestaurantLocation] = useState({});
  const userCoordinates = useSelector(
    (state) => state.landingPageReducer.userCoordinates
  );
  useEffect(() => {
    if (data.location) {
      setRestaurantLocation(data.location.cords.coordinates);
    }
  }, [data.location]);

  const dispatch = useDispatch();

  const getUserCoordinates = () => {
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      dispatch(getUserLocation(longitude, latitude));
      window.open(
        `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${
          data && data.location && data.location.cords.coordinates[1]
        },${data && data.location && data.location.cords.coordinates[0]}`
      );
    }

    function error() {
      console.log("Unable to retrieve your location");
      window.open(
        `https://www.google.com/maps/dir/${
          data && data.location && data.location.cords.coordinates[1]
        },${data && data.location && data.location.cords.coordinates[0]}`
      );
    }

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      return navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  const goToLocation = () => {
    if (userCoordinates.latitude === undefined) {
      getUserCoordinates();
    } else {
      window.open(
        `https://www.google.com/maps/dir/?api=1&origin=${
          userCoordinates.latitude
        },${userCoordinates.longitude}&destination=${
          data && data.location && data.location.cords.coordinates[1]
        },${data && data.location && data.location.cords.coordinates[0]}`
      );
    }
  };

  return (
    <>
      <Wrapper>
        <div className="offer-div container">
          <span className="offer">GET 25% OFF</span>
          <p className="offer-desc">
            Become a Zomato Pro member and enjoy 25% Off every time at{" "}
            {data && data.name}. Know more.
          </p>
          <Link to="/#" className="offer-text">
            Know more <ArrowRightIcons />
          </Link>
        </div>
        <div className="overviewWrapper">
          <div
            style={{
              width: "70%",
            }}
          >
            <div className="container">
              <h3 className="about">About This Place</h3>
            </div>

            <section className="action-div container">
              <section className="action-sec">
                <section className="action-box1">
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/ebd42529c3342bdaf8b624a63a571fcc1585754330.png"
                    alt="safety"
                    className="box1-img"
                  />
                  <section className="box1-text-sec">
                    <p className="box1-text1">RESTAURANT SAFETY MEASURE</p>
                    <p className="box1-text2">Well Sanitized Kitchen</p>
                  </section>
                </section>
                <section className="action-box1">
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/fa7443fb81df3ff2c54186672599c3db1585754076.png"
                    alt="safety"
                    className="box1-img"
                  />
                  <section className="box1-text-sec">
                    <p className="box1-text1">RESTAURANT SAFETY MEASURE</p>
                    <p className="box1-text2">RIDER HAND WASH</p>
                  </section>
                </section>
                <section className="action-box1">
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/8ecc61badb80ea685f0afc71a4d721671585754288.png"
                    alt="safety"
                    className="box1-img"
                  />
                  <section className="box1-text-sec">
                    <p className="box1-text1">RESTAURANT SAFETY MEASURE</p>
                    <p className="box1-text2">DAILY TEMP CHECKS</p>
                  </section>
                </section>
              </section>
            </section>
            <div className="container p-3 mt-3">
              <h4 className="font-weight">Menu</h4>
              <div>
                <div className="card" style={{ width: "14rem" }}>
                  <img
                    src="https://b.zmtcdn.com/data/menus/059/5059/4926f7227933414fcce3847cc08c79ac.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
                    className="card-img-top"
                    alt="menu"
                  />
                </div>
              </div>
            </div>
            <div className="container">
              <h4 className="font-weight">Food Menu</h4>
              <span
                style={{
                  color: "rgb(156, 156, 156)",
                  marginTop: "0px",
                  fontSize: "15px",
                }}
              >
                2 pages
              </span>
            </div>
            <div className="container">
              <h4 className="font-weight mt-4">Cuisines</h4>
              <div className="d-flex mt-0 flex-wrap">
                {data.cuisines &&
                  data.cuisines
                    .trim()
                    .split(",")
                    .map((cuisine, i) => (
                      <p className="cuisines" key={cuisine + i}>
                        {cuisine}
                      </p>
                    ))}
              </div>
            </div>
            <div className="container">
              <h5 className="dish-heading">Popular Dishes</h5>
              <p className="pop-dish">
                {data.menu &&
                  data.menu.map(
                    (dish, i) =>
                      i < 5 && (
                        <React.Fragment key={dish + i}>
                          {" "}
                          {dish.dish}
                        </React.Fragment>
                      )
                  )}
              </p>
              <h5 className="dish-heading">
                People Say This Place Is Known For
              </h5>
              <p className="pop-dish">
                {data.cuisines &&
                  data.cuisines
                    .trim()
                    .split(",")
                    .map(
                      (cuisine, i) =>
                        i < 5 && (
                          <React.Fragment key={cuisine + i}>
                            {cuisine}
                          </React.Fragment>
                        )
                    )}
              </p>
            </div>
            <div className="container">
              <h5 className="avg-cost">Average Cost</h5>
              <p className="cost">
                ₹{data && data.average_cost_for_two} for two people (approx.)
              </p>
              <p className="desc">
                Exclusive of applicable taxes and charges, if any
              </p>
              <div className="calc-div">
                <p className="calc">How do we calculate cost for two?</p>
              </div>
              <p className="payment">Cash and Card accepted</p>
            </div>
            <div className="container">
              <h5 className="info">More Info</h5>
              <div className="info-div">
                {data &&
                  data.highlights?.map(
                    (item, i) =>
                      i < 7 && (
                        <div className="info-name" key={i}>
                          <CheckCircleOutline className="info-icons" />
                          <p className="info-text">{item}</p>
                        </div>
                      )
                  )}
              </div>
            </div>
            <div className="container">
              <h5 className="sponser">OUR SPONSORS</h5>
              <div className="d-flex">
                <img
                  src="https://b.zmtcdn.com/data/pictures/9/307799/1d9603b50698211cdd5106611616a40e_featured_v2.jpg?output-format=webp"
                  alt="card1"
                  className="sponser-img"
                />

                <img
                  src="https://b.zmtcdn.com/data/pictures/5/300185/47cf5aaf952fedd97b6db37a44f595a6_featured_v2.jpg?output-format=webp"
                  alt="card2"
                  className="sponser-img"
                />
              </div>
              <div className="d-flex">
                <div>
                  <h4 className="sponser-text">Wok In The Clouds</h4>
                  <div className="votes">
                    <div className="votes-count">
                      <AssistantIcon className="votes-icons1" />
                      <p className="votes-rating">4.2</p>
                      <p className="votes-number">(1,128)</p>
                      <div className="hr"></div>
                    </div>
                    <div className="votes-count">
                      <AssistantIcon className="votes-icons2" />
                      <p className="votes-rating">4.2</p>
                      <p className="votes-number">(1,128)</p>
                      <div className="hr"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="sponser-text sponser-margin">
                    High On Burgers
                  </h4>
                  <div className="votes ">
                    <div className="votes-count sponser-margin">
                      <AssistantIcon className="votes-icons2" />
                      <p className="votes-rating">4.0</p>
                      <p className="votes-number">(128)</p>
                      <div className="hr"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <p className="m-2">
                  Chinese, Thai, Continental,North Indian, Beverages
                </p>
                <p>Fast Food</p>
              </div>
            </div>
            <div className="container">
              <section className="sim-restro">
                <h5 className="sim-restro-heading">Similar Restaurants</h5>
                <section className="sim-restro-sec1">
                  <div className="sim-restro-sec2">
                    <section className="sim-restro-sec3">
                      <section className="sim-restro-sec4">
                        <section className="sim-restro-sec5">
                          <section className="sim-restro-sec6">
                            <section className="sim-restro-sec7">
                              <div className="sim-restro-sec8">
                                <Link to="/#" className="sim-restro-link1">
                                  <section className="sim-restro-sec9">
                                    <div className="sim-restro-sec10">
                                      <div>
                                        <img
                                          className="img"
                                          src="https://b.zmtcdn.com/data/pictures/chains/8/2008/e8282e248fcd3c7f7bbf8515f03bf46e.jpg?output-format=webp&fit=around|1029:555&crop=1029:555;*,*"
                                          alt="card1"
                                        />
                                      </div>
                                    </div>
                                  </section>
                                </Link>
                                <p className="sim-restro-sec11">
                                  <Link to="/#" className="sim-restro-link2">
                                    Hira Sweets
                                  </Link>
                                </p>
                                <div className="sim-restro-sec12">
                                  <div className="sim-restro-sec13">
                                    <StarBorderIcon className="sim-restro-icon1" />
                                    <p className="sim-restro-sec14">3.8</p>
                                    <p className="sim-restro-sec15">(713)</p>
                                  </div>
                                  <div className="sim-restro-sec13">
                                    <StarBorderIcon className="sim-restro-icon1" />
                                    <p className="sim-restro-sec14">4.8</p>
                                    <p className="sim-restro-sec15">(4,663)</p>
                                  </div>
                                </div>
                                <p className="sim-restro-sec16">
                                  Mithai,North Indian,South Indian
                                </p>
                                <Link to="/#" className="sim-restro-sec17">
                                  Janakpuri, New Delhi
                                </Link>
                              </div>
                            </section>
                            <section className="sim-restro-sec7">
                              <div className="sim-restro-sec8">
                                <Link to="/#" className="sim-restro-link1">
                                  <section className="sim-restro-sec9">
                                    <div className="sim-restro-sec10">
                                      <div>
                                        <img
                                          className="img"
                                          src="https://b.zmtcdn.com/data/pictures/chains/8/309848/40905d892bdc3b9edb9ae46dd2bc7761.jpg?output-format=webp&fit=around|1029:555&crop=1029:555;*,*"
                                          alt="card1"
                                        />
                                      </div>
                                    </div>
                                  </section>
                                </Link>
                                <p className="sim-restro-sec11">
                                  <Link to="/#" className="sim-restro-link2">
                                    Hira Sweets
                                  </Link>
                                </p>
                                <div className="sim-restro-sec12">
                                  <div className="sim-restro-sec13">
                                    <StarBorderIcon className="sim-restro-icon1" />
                                    <p className="sim-restro-sec14">3.8</p>
                                    <p className="sim-restro-sec15">(713)</p>
                                  </div>
                                  <div className="sim-restro-sec13">
                                    <StarBorderIcon className="sim-restro-icon1" />
                                    <p className="sim-restro-sec14">4.8</p>
                                    <p className="sim-restro-sec15">(4,663)</p>
                                  </div>
                                </div>
                                <p className="sim-restro-sec16">
                                  Mithai,North Indian,South Indian
                                </p>
                                <Link to="/#" className="sim-restro-sec17">
                                  Janakpuri, New Delhi
                                </Link>
                              </div>
                            </section>
                            <section className="sim-restro-sec7">
                              <div className="sim-restro-sec8">
                                <Link to="/#" className="sim-restro-link1">
                                  <section className="sim-restro-sec9">
                                    <div className="sim-restro-sec10">
                                      <div>
                                        <img
                                          className="img"
                                          src="https://b.zmtcdn.com/data/pictures/0/8570/a6e3979df5d96bd1f26afcbf4fc27bad.jpg?output-format=webp&fit=around|1029:555&crop=1029:555;*,*"
                                          alt="card1"
                                        />
                                      </div>
                                    </div>
                                  </section>
                                </Link>
                                <p className="sim-restro-sec11">
                                  <Link to="/#" className="sim-restro-link2">
                                    Hira Sweets
                                  </Link>
                                </p>
                                <div className="sim-restro-sec12">
                                  <div className="sim-restro-sec13">
                                    <StarBorderIcon className="sim-restro-icon1" />
                                    <p className="sim-restro-sec14">3.8</p>
                                    <p className="sim-restro-sec15">(713)</p>
                                  </div>
                                  <div className="sim-restro-sec13">
                                    <StarBorderIcon className="sim-restro-icon1" />
                                    <p className="sim-restro-sec14">4.8</p>
                                    <p className="sim-restro-sec15">(4,663)</p>
                                  </div>
                                </div>
                                <p className="sim-restro-sec16">
                                  Mithai,North Indian,South Indian
                                </p>
                                <Link to="/#" className="sim-restro-sec17">
                                  Janakpuri, New Delhi
                                </Link>
                              </div>
                            </section>
                          </section>
                        </section>

                        {/* <div className="sim-restro-dots1">
                      <section className="sim-restro-dots2"></section>
                    </div> */}
                      </section>
                      <ul className="sim-restro-dots3">
                        <li className="sim-restro-dots4">
                          <button className="sim-restro-dots5"></button>
                        </li>
                        <li className="sim-restro-dots4">
                          <button className="sim-restro-dots5"></button>
                        </li>
                        <li className="sim-restro-dots4">
                          <button className="sim-restro-dots5"></button>
                        </li>
                      </ul>
                    </section>
                  </div>
                </section>
              </section>
            </div>
            <div className="container">
              <div className="blog">
                <div className="blog-div">
                  <div className="blog-text">Are you a food blogger?</div>
                  <div className="blog-desc">
                    <Link to="/#" className="blog-link">
                      Add A zomato sponback to your blog
                    </Link>
                    <ArrowRight className="icons" />
                  </div>
                </div>
                <div className="widget-div">
                  <Link to="/#" className="widget-link">
                    Get Restaurant Widget
                  </Link>
                  <ArrowRight className="widget-icons" />
                </div>
              </div>
            </div>
            <div className="container">
              <h5 className="exp-div">Tap to rate Your experience</h5>
              <div className="d-flex">
                <StarBorderIcon className="exp-icons" />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
              <p className="review-note">Write a Review</p>
            </div>
            <div className="container">
              <h4 className="highlights">Review Highlights</h4>
              <span className="highlight-div">Amritsari Koolcha</span>
              <span className="highlight-div">Crispy Jalebi</span>
              <span className="highlight-div">Malai Ghewar</span>
              <span className="highlight-div">Imarti</span>
              <span className="highlight-div">Matar Kulcha</span>
              <span className="highlight-div">Raj Kachori</span>
              <span className="highlight-div">Drive through</span>
              <span className="highlight-div">Chirpy Crowd</span>
              <span className="highlight-div">Cozy Ambiance</span>
              <span className="highlight-div">Inexpensive</span>
              <span className="highlight-div">Family Restaurant</span>
              <span className="highlight-div">Street Food</span>
            </div>
            <div className="container">
              <hr />
            </div>

            <div className="container">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div>
                    <img
                      style={{
                        height: "50px",
                        width: "50",
                        borderRadius: "50%",
                      }}
                      src="https://b.zmtcdn.com/data/user_profile_pictures/009/afaae1a1a440878bf063a3dbd8c79009.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                      alt=""
                    />
                  </div>
                  <div className="d-flex flex-column ml-3">
                    <h5 style={{ fontWeight: "400" }}>Bhavya</h5>
                    <p style={{ fontSize: "12px" }}>
                      48 Reviews . 78 Followers
                    </p>
                  </div>
                </div>
                <div className="follow-div">
                  <button type="button" className="btn btn-outline-danger">
                    Follow
                  </button>
                </div>
              </div>
              <div className="d-flex">
                <AssistantIcon style={{ color: "rgb(237,90,107)" }} />
                <AssistantIcon style={{ color: "rgb(237,90,107)" }} />
                <AssistantIcon style={{ color: "rgb(237,90,107)" }} />
                <AssistantIcon style={{ color: "rgb(237,90,107)" }} />
                <AssistantIcon style={{ color: "rgb(237,90,107)" }} />
                <h5>5.0</h5>
                <div>
                  <p className="ml-2">8 days ago</p>
                </div>
              </div>
              <div style={{ color: "rgb(0,231,0)" }}>
                <ThumbUpAltIcon />
                POSITIVE
              </div>
              <div>
                <span className="badge badge-light rounded-pill">
                  Worth The Money
                </span>
              </div>
              <div className="p-2">
                <p>
                  Randomly Got this Ghewar packed from OM sweets and trust me
                  this is the best ghewar available in Delhi... being a big
                  ghewar fan I want it to be crispy and creamy at the same time
                  and this place took my heart after I ate this. I had no idea
                  that they served the best but trust me try it for once and you
                  will lick your fingers once the box is over.
                </p>
                <div>
                  <img
                    src="https://b.zmtcdn.com/data/reviews_photos/0d6/76092d9a40f469fe6da05e33ea8db0d6_1578139832.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
                    alt="food-img"
                    style={{
                      height: "148px",
                      width: "235px",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="container">
              <hr />
            </div>
            <div className="container">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div>
                    <img
                      style={{
                        height: "50px",
                        width: "50",
                        borderRadius: "50%",
                      }}
                      src="https://b.zmtcdn.com/data/user_profile_pictures/009/afaae1a1a440878bf063a3dbd8c79009.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                      alt=""
                    />
                  </div>
                  <div className="d-flex flex-column ml-3">
                    <h5 style={{ fontWeight: "400" }}>Bhavya</h5>
                    <p style={{ fontSize: "12px" }}>
                      48 Reviews . 78 Followers
                    </p>
                  </div>
                </div>
                <div className="follow-div">
                  <button type="button" className="btn btn-outline-danger">
                    Follow
                  </button>
                </div>
              </div>
              <div className="d-flex">
                <AssistantIcon style={{ color: "rgb(237,90,107)" }} />
                <AssistantIcon style={{ color: "rgb(237,90,107)" }} />
                <AssistantIcon style={{ color: "rgb(237,90,107)" }} />
                <AssistantIcon style={{ color: "rgb(237,90,107)" }} />
                <AssistantIcon style={{ color: "rgb(237,90,107)" }} />
                <h5>5.0</h5>
                <div>
                  <p className="ml-2">8 days ago</p>
                </div>
              </div>
              <div style={{ color: "rgb(0,231,0)" }}>
                <ThumbUpAltIcon />
                POSITIVE
              </div>
              <div>
                <span className="badge badge-light rounded-pill">
                  Worth The Money
                </span>
              </div>
              <div className="p-2">
                <p>
                  Randomly Got this Ghewar packed from OM sweets and trust me
                  this is the best ghewar available in Delhi... being a big
                  ghewar fan I want it to be crispy and creamy at the same time
                  and this place took my heart after I ate this. I had no idea
                  that they served the best but trust me try it for once and you
                  will lick your fingers once the box is over.
                </p>
                <div>
                  <img
                    src="https://b.zmtcdn.com/data/reviews_photos/798/e88230d81eefdb8f57e2df1038a81798_1564074695.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
                    alt="food-img"
                    style={{
                      height: "148px",
                      width: "235px",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="container">
              <hr />
            </div>
            <div className="container">
              <button className="report-btn">
                <span className="report-text">
                  View All Reviews <ArrowRight className="report-icons" />
                </span>
              </button>
            </div>
            <div className="container">
              <h5 className="sponser">OUR SPONSORS</h5>
              <div className="d-flex">
                <img
                  src="https://b.zmtcdn.com/data/pictures/chains/6/566/64194d9143b9cfeeb104689b0aefa41b_featured_v2.jpg?output-format=webp"
                  alt="card1"
                  className="sponser-img"
                />

                <img
                  src="https://b.zmtcdn.com/data/pictures/1/18662571/2d2ee80ec8490f634f10787f2c11f68c_featured_v2.jpg?output-format=webp"
                  alt="card2"
                  className="sponser-img"
                />
              </div>
              <div className="d-flex">
                <div>
                  <h4 className="sponser-text">HONG KONG EXPRESS</h4>
                  <div className="votes">
                    <div className="votes-count">
                      <AssistantIcon className="votes-icons1" />
                      <p className="votes-rating">4.2</p>
                      <p className="votes-number">(1,128)</p>
                      <div className="hr"></div>
                    </div>
                    <div className="votes-count">
                      <AssistantIcon className="votes-icons2" />
                      <p className="votes-rating">4.2</p>
                      <p className="votes-number">(1,128)</p>
                      <div className="hr"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="sponser-text sponser-margin">Sandoz</h4>
                  <div className="votes ">
                    <div className="votes-count sponser-margin">
                      <AssistantIcon className="votes-icons2" />
                      <p className="votes-rating">4.0</p>
                      <p className="votes-number">(128)</p>
                      <div className="hr"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <p style={{ fontSize: "13px", fontWeight: "200" }}>
                  Chinese, Thai, Continental,North Indian
                </p>
                <p
                  style={{
                    marginLeft: "130px",
                    fontSize: "13px",
                    fontWeight: "200",
                  }}
                >
                  Fast Food
                </p>
              </div>
            </div>
            <div className="container">
              <div className="d-flex">
                <img
                  src="https://b.zmtcdn.com/data/pictures/chains/2/1922/bf8d8a5a7f74b5d413256af2fdfffc35_featured_v2.jpg?output-format=webp"
                  alt="card1"
                  className="sponser-img"
                />

                <img
                  src="https://b.zmtcdn.com/data/pictures/chains/8/18582328/c5befd62e62f87dd38eb3866080aa799_featured_v2.jpg?output-format=webp"
                  alt="card2"
                  className="sponser-img"
                />
              </div>
              <div className="d-flex">
                <div>
                  <h4 className="sponser-text">Culinare</h4>
                  <div className="votes">
                    <div className="votes-count">
                      <AssistantIcon className="votes-icons1" />
                      <p className="votes-rating">4.2</p>
                      <p className="votes-number">(1,128)</p>
                      <div className="hr"></div>
                    </div>
                    <div className="votes-count">
                      <AssistantIcon className="votes-icons2" />
                      <p className="votes-rating">4.2</p>
                      <p className="votes-number">(1,128)</p>
                      <div className="hr"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="sponser-text sponser-margin">
                    The Turkey Project
                  </h4>
                  <div className="votes ">
                    <div className="votes-count sponser-margin">
                      <AssistantIcon className="votes-icons2" />
                      <p className="votes-rating">4.0</p>
                      <p className="votes-number">(128)</p>
                      <div className="hr"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <p style={{ fontSize: "13px", fontWeight: "200" }}>
                  Chinese, Thai, Continental,North Indian
                </p>
                <p
                  style={{
                    marginLeft: "130px",
                    fontSize: "13px",
                    fontWeight: "200",
                  }}
                >
                  Fast Food
                </p>
              </div>
            </div>
            <div className="container">
              <hr />
            </div>

            <div className="help-sec container">
              <div className="help-text">HELP US MAKE ZOMATO BETTER</div>
              <h4 className="error-text">Report an error in this listing</h4>
              <div className="help-desc">
                Help us make Zomato more updated and relevant for everyone
              </div>

              <button className="report-btn">
                <span className="report-text">
                  Report now <ArrowRight className="report-icons" />
                </span>
              </button>
            </div>
            <div className="container">
              <hr />
            </div>
          </div>
          <div className="container">
            <div className="loc-near">
              <h6 className="loc-near-heading">RESTAURANTS AROUND JAIL ROAD</h6>
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
          <div className="restaurantMapDiv">
            <Card className="restaurantMap">
              <CardContent>
                <div className="mt-2 mb-2">
                  <div style={{ fontSize: "20px" }}>Call</div>
                  <div style={{ color: "red", fontSize: "15px" }}>
                    {data.phone_numbers}
                  </div>
                </div>
                <div style={{ fontSize: "20px" }}>Direction</div>
                <img
                  src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-l+000(${restaurantLocation[0]},${restaurantLocation[1]})/${restaurantLocation[0]},${restaurantLocation[1]},14/500x300?access_token=pk.eyJ1IjoibWFuaXNoLWt1bWFyLWRldiIsImEiOiJja2gyOGw4b24wOWhwMnNtemVmeHA2djV0In0.IWI4BNamZ8XXAawc2fuk8w`}
                  alt="Restaurant Location"
                  style={{ width: "100%" }}
                />
                <div style={{ margin: "5px 0px" }}>
                  {data && data.location && data.location.address}
                </div>
                <div className="btn">
                  <span className="add" onClick={goToLocation}>
                    <DirectionsIcon />
                    <span style={{ color: "rgb(28, 28, 28)" }}>Direction</span>
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <MainFooter />
      </Wrapper>
    </>
  );
}

export default Overview;
