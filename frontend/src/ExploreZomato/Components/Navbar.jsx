import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// const Wrapper = styled.div``;
const Wrapper = styled.div`
  .navigation-cont {
    background-color: #fff;
    padding: 0 40px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    font-size: 15px;
    display: block;
  }
  ,
  .navigation-content {
    margin: 0 auto;
    padding: 0;
    height: 38px;
    display: block;
    font-size: 15px;
  }

  .left-content {
    float: left;
    height: 100%;
  }
  .mobile-link {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 5px 10px;
    font-weight: 400;
    background: transparent;
    color: #33373d;
  }

  .mobile-link:hover {
    text-decoration: none;
  }

  .right-content {
    float: right;
    height: 100%;
  }
  .cart-link {
    float: left;
  }

  .table-link {
    float: left;
  }
  .zomato-pro {
    float: left;
  }
  .icon {
    height: 22px;
  }
`;

function Navbar() {
  return (
    <>
      <Wrapper>
        <nav className="navbar navbar-light bg-danger">
          <Link className="navbar-brand">
            <img
              className="logo-img ml-5"
              src="https://b.zmtcdn.com/images/zomato_white_logo_new.svg"
              alt="logo"
            />
          </Link>
          <form className="form-inline">
            <button className="btn btn-danger my-2  mr-2 my-sm-0" type="submit">
              Log in
            </button>
            <button className="btn btn-danger my-2 my-sm-0 mr-5" type="submit">
              Create an account
            </button>
          </form>
        </nav>
        <div className="navigation-cont">
          <div className="navigation-content">
            <div className="left-content">
              <Link className="mobile-link">
                <img
                  src="https://b.zmtcdn.com/images/icons/get-the-app-plain.svg"
                  alt="mobile-icon"
                  className="icon ml-3"
                />
                <span className="p-2">Get the app</span>
              </Link>
            </div>
            <div className="right-content">
              <Link className="cart-link mobile-link">
                <img
                  src="https://b.zmtcdn.com/images/icons/order-online.svg"
                  alt="order-food"
                  className="icon"
                />
                <span className="pl-3">Order Food</span>
              </Link>
              <Link className="table-link mobile-link">
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

export default Navbar;
