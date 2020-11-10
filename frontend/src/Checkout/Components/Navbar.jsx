import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

// const Wrapper = styled.div``;
const Wrapper = styled.div`
  .navigation-shadow {
   
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  
  }
  ,
 
`;

function Navbar() {
  return (
    <>
      <Wrapper>
        <nav className="navbar navbar-light bg-white navigation-shadow">
          <Link>
            <p className="text-danger ml-5">
              <ArrowLeftIcon /> Back to Restaurants
            </p>
          </Link>
          <Link className="navbar-brand">
            <img
              className="logo-img ml-5"
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="logo"
              style={{ width: "150px" }}
            />
          </Link>

          <form className="form-inline">
            <button
              className="btn btn-outline-danger my-2  mr-2 my-sm-0"
              type="submit"
            >
              Log in
            </button>
            <button
              className="btn btn-outline-danger my-2 my-sm-0 mr-5"
              type="submit"
            >
              Create an account
            </button>
          </form>
        </nav>
      </Wrapper>
    </>
  );
}

export default Navbar;
