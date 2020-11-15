import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Signup from "./Signup";
import LoginPage from "./LoginPage";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Card from "@material-ui/core/Card";
import Fade from "@material-ui/core/Fade";
import { NavigationWrapper } from "../Style/NavigationStyle";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { userLogout } from "../Redux/action";

const useStyles = makeStyles((theme) => ({
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
  root: {
    position: "absolute",
    borderRadius: 7,
    top: 50,
    width: 160,
    height: "fit-content",
    maxWidth: 180,
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

function Navigation(props) {
  const classes = useStyles();
  const { activeUserDetails, userLogout } = props;
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
    userLogout();
    setExpanded(false);
  };

  return (
    <NavigationWrapper className="container">
      <nav>
        <ul className="mobileNavigation"></ul>
        <ul className="defaultNavigation">
          <li className="zomatoLogo">Get the app</li>
          {activeUserDetails.active !== false ? (
            <ClickAwayListener onClickAway={() => setExpanded(false)}>
              <li className="navigationButton userDetails">
                <Avatar
                  alt="User profile Image"
                  src={activeUserDetails.image}
                />
                <span>{activeUserDetails.name}</span>
                <IconButton
                  disableRipple={true}
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>

                <Fade in={expanded}>
                  <Card className={classes.root}>
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
              <li className="navigationButton">
                <button name="login" onClick={handleNavigationClick}>
                  Login
                </button>
              </li>
              <li className="navigationButton">
                <button name="signup" onClick={handleNavigationClick}>
                  Signup
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>

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
    </NavigationWrapper>
  );
}

const mapStateToProps = (state) => ({
  activeUserDetails: state.landingPageReducer.activeUserDetails,
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => dispatch(userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
