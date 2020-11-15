import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Wrapper } from "../Styles/NavbarStyle";
import { connect, useDispatch } from "react-redux";
import Signup from "../../LandingPage/Components/Signup";
import LoginPage from "../../LandingPage/Components/LoginPage";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Card from "@material-ui/core/Card";
import Fade from "@material-ui/core/Fade";
import clsx from "clsx";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { userLogout } from "../../LandingPage/Redux/action";

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
        cursor: "pointer",
        backgroundColor: "#d1d1d1",
      },
    },
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const { activeUserDetails } = props;
  const dispatch = useDispatch();
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
    <>
      <Wrapper>
        <nav className="navbar navbar-light bg-danger">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img className="logo-img" src="/logowhite.png" alt="logo1" />
            </Link>

            {activeUserDetails.active !== false ? (
              <ClickAwayListener onClickAway={() => setExpanded(false)}>
                <li className="d-flex mr-3" style={{ position: "relative" }}>
                  <Avatar
                    alt="User profile Image"
                    src={activeUserDetails.image}
                    style={{ marginLeft: "20px", marginRight: "4px" }}
                  />
                  <span style={{ color: "white", marginTop: "7px" }}>
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
                    style={{ color: "white" }}
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
              <div>
                <button
                  className="btn btn-danger my-2  mr-3 my-sm-0"
                  name="login"
                  onClick={handleNavigationClick}
                >
                  Log in
                </button>
                <button
                  className="btn btn-danger my-2 my-sm-0 "
                  name="signup"
                  onClick={handleNavigationClick}
                >
                  Create an account
                </button>
              </div>
            )}
          </div>

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
        </nav>
        <div className="navigation-cont">
          <div className="navigation-content container">
            <div className="left-content">
              <Link to="/#" className="mobile-link">
                <img
                  src="https://b.zmtcdn.com/images/icons/get-the-app-plain.svg"
                  alt="mobile-icon"
                  className="icon ml-3"
                />
                <span className="p-2">Get the app</span>
              </Link>
            </div>
            <div className="right-content">
              <Link to="/#" className="cart-link mobile-link">
                <img
                  src="https://b.zmtcdn.com/images/icons/order-online.svg"
                  alt="order-food"
                  className="icon"
                />
                <span className="pl-3">Order Food</span>
              </Link>
              <Link to="/#" className="table-link mobile-link">
                <img
                  src="https://b.zmtcdn.com/images/icons/book-a-table.svg"
                  alt="table"
                  className="icon"
                />
                <span className="pl-3">Book a Table</span>
              </Link>
              <div className="zomato-pro mobile-link">
                <img
                  src="https://www.zomato.com/images/red/pro_badge.svg"
                  alt="zomato-pro"
                  className="icon"
                />
                <span className="pl-3 mr-5">zomato pro</span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const mapStateToProps = (state) => ({
  activeUserDetails: state.landingPageReducer.activeUserDetails,
});

export default connect(mapStateToProps)(Navbar);
