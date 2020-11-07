import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  queryCity,
  getUserLocation,
  getCityId,
  setSearchCityRedux,
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
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "30px",
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
      backgroundColor: "#dedede",
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
    userCoordinates,
    setSearchCityRedux,
    cityId,
  } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [searchCity, setSearchCity] = useState(searchCityRedux);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const throttleCitySearch = useRef(throttle((value) => queryCity(value), 2000))
    .current;

  const handleSearchCity = (e) => {
    setSearchCity(e.target.value);
    if (e.target.value !== "") {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
    throttleCitySearch(e.target.value);
  };

  const selectCity = (e, coordinates) => {
    let payload = {
      long: coordinates[0],
      lat: coordinates[1],
    };
    setSearchCity(e.target.textContent);
    setSearchCityRedux(e.target.textContent, coordinates);
    getCityId(payload);
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
      console.log("The button is clicked");
      return navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return (
    <div>
      <ClickAwayListener onClickAway={() => setExpanded(false)}>
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
          </div>
        </Paper>
      </ClickAwayListener>
    </div>
  );
}

const mapStateToProps = (state) => ({
  locationSearchResults: state.landingPageReducer.locationSearchResults,
  isLoading: state.landingPageReducer.isLoading,
  searchCityRedux: state.landingPageReducer.searchCity,
  userCoordinates: state.landingPageReducer.userCoordinates,
  cityId: state.landingPageReducer.cityId,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchCityRedux: (cityName, coordinates) =>
    dispatch(setSearchCityRedux(cityName, coordinates)),
  queryCity: (value) => dispatch(queryCity(value)),
  getUserLocation: (long, lat) => dispatch(getUserLocation(long, lat)),
  getCityId: (payload) => dispatch(getCityId(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
