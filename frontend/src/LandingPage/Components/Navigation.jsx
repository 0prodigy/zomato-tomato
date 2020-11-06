import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Signup from "./Signup";
import LoginPage from "./LoginPage";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Card from "@material-ui/core/Card";
import Fade from "@material-ui/core/Fade";

const NavigationWrapper = styled.div`
  position: relative;
  padding: 0px;
  z-index: 1;
  .mobileNavigation {
    display: none;
  }
  .defaultNavigation {
    width: 100%;
    list-style: none;
    margin: 0;
    max-width: 100%;
    background: transparent;
    display: flex;
    justify-content: flex-end;
    padding: 1.7rem 0px;

    > .zomatoLogo {
      position: absolute;
      left: 0px;
      cursor: pointer;
      top: 50%;
      transform: translateY(-50%);
      color: white;
      font-weight: 500;
      font-size: 1.2rem;
      max-width: 35rem;
    }

    .navigationButton:nth-last-child(2) {
      margin-right: 12px;
    }

    > .navigationButton {
      padding: 0px 0.6rem;
      color: white;
      font-family: "Poppins";

      button {
        background: inherit;
        color: inherit;
        border: none;
        outline: none;
      }

      :hover {
        cursor: pointer;
      }
    }

    .userDetails {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      > span {
        margin-left: 8px;
      }
      button {
        margin-left: auto;
      }
    }
  }

  @media only screen and (max-width: 769px) {
    .mobileNavigation {
      display: block;
    }
    .defaultNavigation {
      display: none;
    }
  }
`;

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

  return (
    <NavigationWrapper className="container">
      <nav>
        <ul className="mobileNavigation"></ul>
        <ul className="defaultNavigation">
          <li className="zomatoLogo">Get the app</li>
          {activeUserDetails.active !== false ? (
            <li className="navigationButton userDetails">
              <Avatar alt="User profile Image" src={activeUserDetails.image} />
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
                  <div>Profile</div>
                  <div>Notifications</div>
                  <div>Bookmarks</div>
                  <div>Reviews</div>
                  <div>Network</div>
                  <div>Find friends</div>
                  <div>Settings</div>
                  <div>Log out</div>
                </Card>
              </Fade>
            </li>
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
  activeUserDetails: state.reducer.activeUserDetails,
});

export default connect(mapStateToProps)(Navigation);
