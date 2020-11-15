import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import {
  queryCity,
  getUserLocation,
  getCityId,
  setSearchCityRedux,
  queryRestaurant,
  getCityCollection,
} from "../Redux/action";
import throttle from "lodash/throttle";
import Skeleton from "@material-ui/lab/Skeleton";
import {
  Paper,
  Box,
  Divider,
  Card,
  Collapse,
  Button,
  ClickAwayListener,
} from "@material-ui/core";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "8px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    height: "50px",
    padding: "8px 0px",
    position: "relative",
  },
  cityDropdown: {
    display: "flex",
    justifyContent: "space-around",
    position: "relative",
    width: "200px",
    height: "100%",
    padding: "0px 6px",
    borderRadius: "8px",
    alignItems: "center",
    "& input": {
      width: "100%",
      border: "none",
      outline: "none",
    },
  },
  cityRestaurants: {
    width: "500px",
    padding: "0px 10px",
    display: "flex",
    alignItems: "center",
    "& input": {
      width: "100%",
      border: "none",
      outline: "none",
    },
  },
  expand: {
    padding: 0,
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  detectLocation: {
    position: "absolute",
    top: 60,
    zIndex: 1,
  },
  detectLocationCard: {
    width: 280,
    height: "fit-content",
    minHeight: 40,
    display: "flex",
    flexDirection: "column",
  },
  locationSearchValues: {
    textAlign: "left",
    padding: " 5px 8px",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#f2f2f2",
    },
  },
  searchRestaurantCardDiv: {
    position: "absolute",
    zIndex: "2",
    top: 60,
    right: 0,
  },
  searchRestaurantCard: {
    width: 500,
    minHeight: 140,
    maxHeight: 400,
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    "& >div:hover": {
      cursor: "pointer",
      backgroundColor: "#f2f2f2",
    },
  },
}));

function SearchBar(props) {
  const {
    locationSearchResults,
    queryCity,
    getUserLocation,
    isLoading,
    getCityId,
    searchCityRedux,
    setSearchCityRedux,
    cityId,
    queryRestaurant,
    restaurantSearchResults,
    getCityCollection,
  } = props;
  const match = useRouteMatch();
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [restaurantSearchExpanded, setRestaurantSearchExpanded] = useState(
    false
  );
  const [searchCity, setSearchCity] = useState(searchCityRedux);
  const [searchRestaurant, setSearchRestaurant] = useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const throttleCitySearch = useRef(throttle((value) => queryCity(value), 2000))
    .current;

  const throttleRestaurantSearch = useRef(
    throttle((query, cityId) => queryRestaurant(query, cityId)),
    1000
  ).current;

  const handleSearchCity = (e) => {
    setSearchCity(e.target.value);
    if (e.target.value !== "") {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
    throttleCitySearch(e.target.value);
  };

  const handleRestaurantSearch = (e) => {
    setSearchRestaurant(e.target.value);
    if (e.target.value !== "") {
      setRestaurantSearchExpanded(true);
    } else {
      setRestaurantSearchExpanded(false);
    }
    throttleRestaurantSearch(e.target.value, cityId);
  };

  const selectCity = async (e, coordinates) => {
    let payload = {
      long: coordinates[0],
      lat: coordinates[1],
    };
    setSearchCityRedux(e.target.textContent, coordinates);
    let result = await getCityId(payload);
    getCityCollection(result.cityId);
    setExpanded(false);
  };

  const getUserCoordinates = () => {
    async function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getUserLocation(longitude, latitude);
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

  return (
    <div>
      <ClickAwayListener
        onClickAway={() => {
          setExpanded(false);
          setRestaurantSearchExpanded(false);
        }}
      >
        <Paper className={classes.root}>
          <div className={classes.container}>
            <Box className={classes.cityDropdown}>
              <LocationOnIcon style={{ color: "rgb(237, 90, 107)" }} />
              <input
                type="text"
                value={searchCity}
                onChange={handleSearchCity}
              />
              <IconButton
                disableRipple={true}
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ArrowDropDownIcon />
              </IconButton>
            </Box>
            <Divider orientation="vertical" />
            <Box className={classes.cityRestaurants}>
              <input
                value={searchRestaurant}
                onChange={handleRestaurantSearch}
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
              />
              <SearchIcon />
            </Box>
            <div className={classes.detectLocation}>
              <Collapse in={expanded}>
                <Card className={classes.detectLocationCard} elevation={5}>
                  <Button
                    disableFocusRipple
                    disableRipple
                    onClick={getUserCoordinates}
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "inherit",
                      color: "rgb(237, 90, 107)",
                      textTransform: "none",
                    }}
                    startIcon={<MyLocationIcon />}
                  >
                    Detect current location
                  </Button>
                  {isLoading ? (
                    <>
                      <Box className={classes.locationSearchValues}>
                        <Skeleton variant="rect" width={260} height={40} />
                      </Box>
                      <Box className={classes.locationSearchValues}>
                        <Skeleton variant="rect" width={260} height={40} />
                      </Box>
                    </>
                  ) : (
                    locationSearchResults &&
                    locationSearchResults.map((location) => {
                      return (
                        <Box
                          key={location.id}
                          className={classes.locationSearchValues}
                          style={{
                            textTransform: "none",
                          }}
                          onClick={(e) =>
                            selectCity(e, location.geometry.coordinates)
                          }
                        >
                          {location.place_name}
                        </Box>
                      );
                    })
                  )}
                </Card>
              </Collapse>
            </div>

            {/* For Restaurant, dishes, cuisines searches */}
            <div className={classes.searchRestaurantCardDiv}>
              <Collapse in={restaurantSearchExpanded}>
                <Card className={classes.searchRestaurantCard} elevation={5}>
                  {isLoading ? (
                    <>
                      <Box display="flex">
                        <Box m={2}>
                          <Skeleton variant="rect" width={70} height={70} />
                        </Box>
                        <Box style={{ margin: "16px 0px" }}>
                          <Skeleton variant="rect" width={260} height={90} />
                        </Box>
                      </Box>
                      <Box display="flex">
                        <Box m={2}>
                          <Skeleton variant="rect" width={70} height={70} />
                        </Box>
                        <Box style={{ margin: "16px 0px" }}>
                          <Skeleton variant="rect" width={260} height={90} />
                        </Box>
                      </Box>
                    </>
                  ) : (
                    restaurantSearchResults &&
                    restaurantSearchResults.map((item) => {
                      return (
                        <Box display="flex" key={item.id}>
                          {/* Thumb image */}
                          <Box m={2}>
                            <img
                              src={item.thumb}
                              alt="Restaurant Thumbnail"
                              style={{ height: "70px", borderRadius: "6px" }}
                            />
                          </Box>

                          <Box style={{ marginTop: "16px" }}>
                            <div>{item.name}</div>
                            <div style={{ fontWeight: "200" }}>
                              {item.location.locality_verbose}
                            </div>
                            <Link
                              to={{
                                pathname: `${
                                  match.url
                                }/restaurants/${item.name
                                  .toLowerCase()
                                  .split(" ")
                                  .join("-")}`,
                                state: { res_id: `${item.id}` },
                              }}
                              style={{
                                textDecoration: "none",
                                display: "block",
                              }}
                            >
                              <div
                                style={{
                                  color: "rgb(237, 90, 107)",
                                  fontWeight: "300",
                                }}
                              >
                                Order Now
                                <ArrowRightIcon />
                              </div>
                            </Link>
                          </Box>
                        </Box>
                      );
                    })
                  )}
                </Card>
              </Collapse>
            </div>
          </div>
        </Paper>
      </ClickAwayListener>
    </div>
  );
}

const mapStateToProps = (state) => ({
  locationSearchResults: state.landingPageReducer.locationSearchResults,
  restaurantSearchResults: state.landingPageReducer.restaurantSearchResults,
  isLoading: state.landingPageReducer.isLoading,
  searchCityRedux: state.landingPageReducer.searchCity,
  cityId: state.landingPageReducer.cityId,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchCityRedux: (cityName, coordinates) =>
    dispatch(setSearchCityRedux(cityName, coordinates)),
  queryCity: (value) => dispatch(queryCity(value)),
  queryRestaurant: (query, cityId) => dispatch(queryRestaurant(query, cityId)),
  getUserLocation: (long, lat) => dispatch(getUserLocation(long, lat)),
  getCityId: (payload) => dispatch(getCityId(payload)),
  getCityCollection: (cityId) => dispatch(getCityCollection(cityId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
