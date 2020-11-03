import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Divider } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "30px",
    borderRadius: "8px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    height: "50px",
    padding: "8px 0px",
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
}));

function SearchBar() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <div className={classes.container}>
          <Box className={classes.cityDropdown}>
            <LocationOnIcon style={{ color: "rgb(237, 90, 107)" }} />
            <input type="text" />
            <ArrowDropDownIcon />
          </Box>
          <Divider orientation="vertical" />
          <Box className={classes.cityRestaurants}>
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
            />
            <SearchIcon />
          </Box>
        </div>
      </Paper>
    </div>
  );
}

export default SearchBar;
