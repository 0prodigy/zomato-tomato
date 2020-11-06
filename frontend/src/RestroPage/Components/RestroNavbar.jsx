import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { Paper, Box, Divider } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Poppins",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navbar: {
    backgroundColor: "white",
    color: "black",
    height: "70px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  paper: {
    borderRadius: "8px",
    marginTop: "10px",
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
  typo1: {
    // marginLeft: "130px",
    color: "rgb(130, 130, 130)",
    fontFamily: "Poppins",
    fontWeight: "200",
    fontSize: "20",
  },
  typo2: {
    // marginRight: "130px",
    color: "rgb(130, 130, 130)",
    fontFamily: "Poppins",
    fontWeight: "200",
    fontSize: "20",
  },
}));

export default function RestroNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
          </IconButton>

          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            style={{ height: "30px", width: "150px", marginLeft: "50px" }}
          />
          <Paper className={classes.paper}>
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
          <Typography variant="h6" className={classes.typo1}>
            Login
          </Typography>
          <Typography variant="h6" className={classes.typo2}>
            SignUp
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
