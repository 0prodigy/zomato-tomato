import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { Container, Avatar } from "@material-ui/core";

// const Wrapper = styled.div``;
const Wrapper = styled.div`
  .navigation-shadow {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  }

  .navbarContainer {
    padding: 0px;
    display: flex;
    align-items: center;
    > div {
      width: 100%;
    }

    .backButton {
      background-color: inherit;
      color: inherit;
      border: 0px;
    }

    .zomatoLogo {
      display: flex;
      justify-content: center;
    }

    .loginSignupDiv {
      display: flex;
      justify-content: flex-end;
    }

    .btn {
      height: 30px;
      display: flex;
      align-items: center;
      margin: 0px 15px;
      font-weight: 300;
      :hover {
        background-color: white;
      }
    }
    .navigationButton {
      padding: 0px 0.6rem;
      color: white;
      font-family: "Poppins";

      button {
        background: inherit;
        color: inherit;
        border: none;
        outline: none;
      }
    }

    .userDetails {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      > span {
        margin-left: 8px;
        color: black;
      }
      button {
        margin-left: auto;
      }
    }
  }
`;

function Navbar() {
  const history = useHistory();
  const activeUserDetails = JSON.parse(localStorage.getItem("activeUser"));
  console.log("The history is", history);
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
              <Link className="navbar-brand">
                <img
                  className="logo-img"
                  src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                  alt="logo"
                  style={{ width: "150px" }}
                />
              </Link>
            </div>
            {activeUserDetails.active !== false ? (
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
