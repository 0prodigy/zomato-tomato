import React from "react";
import { Wrapper } from "../Styles/NavbarStyle";
import { Link, useHistory } from "react-router-dom";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { Container, Avatar } from "@material-ui/core";

function Navbar() {
  const history = useHistory();
  const activeUserDetails =
    JSON.parse(localStorage.getItem("activeUser")) || {};
  return (
    <>
      <Wrapper>
        <nav className="navbar navbar-light bg-white navigation-shadow">
          <Container maxWidth="md" className="navbarContainer">
            <div className="text-danger">
              <button className="backButton" onClick={() => history.goBack()}>
                <ArrowLeftIcon />
                Back to Restaurant
              </button>
            </div>
            <div className="zomatoLogo">
              <Link to="/" className="navbar-brand">
                <img
                  className="logo-img"
                  src="/tomato_black_final_logo.png"
                  alt="logo"
                  style={{ width: "150px" }}
                />
              </Link>
            </div>
            {activeUserDetails && activeUserDetails.active !== false ? (
              <div className="loginSignupDiv">
                <li className="navigationButton userDetails">
                  <Avatar
                    alt="User profile Image"
                    src={activeUserDetails.image}
                  />
                  <span>{activeUserDetails.name}</span>
                </li>
              </div>
            ) : (
              <div className="loginSignupDiv">
                <form className="form-inline">
                  <button className="btn btn-outline-danger" type="submit">
                    Log in
                  </button>
                  <button className="btn btn-outline-danger" type="submit">
                    Sign up
                  </button>
                </form>
              </div>
            )}
          </Container>
        </nav>
      </Wrapper>
    </>
  );
}

export default Navbar;
