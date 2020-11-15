import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { connect, useDispatch } from "react-redux";
import { Card, ClickAwayListener } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fade from "@material-ui/core/Fade";
import Signup from "../../LandingPage/Components/Signup";
import LoginPage from "../../LandingPage/Components/LoginPage";
import Avatar from "@material-ui/core/Avatar";
import SearchBar from "../../LandingPage/Components/SearchBar";
import { userLogout } from "../../LandingPage/Redux/action";

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
    height: "fit-content",
    padding: "6px 0px",
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

  popup: {
    position: "absolute",
    borderRadius: 7,
    top: 50,
    right: 0,
    width: 160,
    height: "fit-content",
    maxWidth: 180,
    zIndex: 10,
    "& div": {
      // fontWeight: 200,
      height: 35,
      padding: "5px",
      paddingLeft: "12px",
      "&:hover": {
        backgroundColor: "#d1d1d1",
      },
    },
  },
}));

function RestroNavbar(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { activeUserDetails } = props;
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleNavigationClick = (e) => {
    const { name } = e.target;
    if (name === "login") {
      setOpenLogin(true);
      setOpenSignup(false);
    } else if (name === "signup") {
      setOpenSignup(true);
      setOpenLogin(false);
    }
  };

  const handleNavigationClose = (e) => {
    setOpenLogin(false);
    setOpenSignup(false);
  };

  const logOutUser = () => {
    dispatch(userLogout());
    setExpanded(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar variant="dense" className={clsx(classes.toolbar, "container")}>
          <Link to="/">
            <img
              src="/tomato_black_final_logo.png"
              alt="logo"
              style={{ height: "30px", width: "150px" }}
            />
          </Link>

          <SearchBar />

          {activeUserDetails.active !== false ? (
            <ClickAwayListener onClickAway={() => setExpanded(false)}>
              <li style={{ display: "flex", position: "relative" }}>
                <Avatar
                  alt="User profile Image"
                  src={activeUserDetails.image}
                  style={{ marginRight: "10px" }}
                />
                <span style={{ marginTop: "8px" }}>
                  {activeUserDetails.name}
                </span>
                <IconButton
                  disableRipple={true}
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  style={{ width: "40px", marginLeft: "8px" }}
                >
                  <ExpandMoreIcon />
                </IconButton>

                <Fade in={expanded}>
                  <Card className={classes.popup}>
                    <Link
                      to={`/users/${activeUserDetails.name
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div>Profile</div>
                    </Link>
                    <div>Notifications</div>
                    <div>Bookmarks</div>
                    <div>Reviews</div>
                    <div>Network</div>
                    <div>Find friends</div>
                    <div>Settings</div>
                    <div onClick={logOutUser}>Log out</div>
                  </Card>
                </Fade>
              </li>
            </ClickAwayListener>
          ) : (
            <>
              <button
                name="login"
                onClick={handleNavigationClick}
                style={{
                  backgroundColor: "Transparent",
                  backgroundRepeat: "no-repeat",
                  border: "none",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                Login
              </button>

              <button
                name="signup"
                onClick={handleNavigationClick}
                style={{
                  backgroundColor: "Transparent",
                  backgroundRepeat: "no-repeat",
                  border: "none",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                Signup
              </button>
            </>
          )}
          <LoginPage
            openLogin={openLogin}
            setOpenLogin={setOpenLogin}
            setOpenSignup={setOpenSignup}
            handleNavigationClose={handleNavigationClose}
          />

          <Signup
            openSignup={openSignup}
            setOpenLogin={setOpenLogin}
            setOpenSignup={setOpenSignup}
            handleNavigationClose={handleNavigationClose}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  activeUserDetails: state.landingPageReducer.activeUserDetails,
});

export default connect(mapStateToProps)(RestroNavbar);
