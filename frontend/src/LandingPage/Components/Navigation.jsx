import React, { useState } from "react";
import styled from "styled-components";
import Signup from "./Signup";
import LoginPage from "./LoginPage";
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

function Navigation() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

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

export default Navigation;
