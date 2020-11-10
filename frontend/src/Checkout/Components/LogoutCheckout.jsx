import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

const Wrapper = styled.div`
  * {
    font-family: Poppins;
    fotn-weight: 300;
    filter: brightness(1);
  }
  .card-border {
    border: 1px solid white;
  }
  .card-text {
    font-size: 14px;
    color: rgb(193, 193, 193);
    font-weight: 200;
  }
  .order-text {
    line-height: 1.5;
    margin: 0px 0px 1rem;
    font-size: 1rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    color: rgb(79, 79, 79);
    font-weight: 500;
  }
  .menu-text {
    font-size: inherit;
    line-height: 1.5;
    margin: 0px;
    font-weight: 00;
    color: rgb(54, 54, 54);
  }
  .loc-text {
    line-height: 1.5;
    margin: 0px;
    font-size: 0.6rem;
    color: rgb(54, 54, 54);
  }
  .veg-border {
    border: 1px solid green;
    height: 12px;
    width: 12px;
    margin-left: 0px;
    padding: 1px;
  }
  .veg-color {
    background-color: green;
    border-radius: 50%;
    height: 8px;
    width: 8px;
  }
  .instruction-text{
       border-bottom:1px dashed black;
       align-items:center
       font-size: 0.6rem;
  }
  .offer-text{
       color:red
   
  }
  .heading-text{
      font-size:15px;
  }
  .cost{
      font-size:12px;
  }
  
`;

function LogoutCheckout() {
  return (
    <>
      <Wrapper>
        <Navbar />
        <div className="container">
          <h2 className="mt-5 ml-3">Secure Checkout</h2>
          <div className="d-flex">
            <div className="col-7">
              <div className="shadow p-3 mb-5 bg-white rounded">
                <div class="card card-border">
                  <h4>Account</h4>
                  <p className="card-text">
                    It’s easy to login or create an account with Zomato
                  </p>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-6">
                        <button
                          type="button"
                          class="btn btn-outline-danger btn-lg btn-block"
                        >
                          Login
                        </button>
                      </div>
                      <div class="col-6">
                        <button
                          type="button"
                          class="btn btn-danger btn-lg btn-block"
                        >
                          Signup
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card m-3 rounded">
                <div class="card-body">
                  <h4>Delivery</h4>
                  <p className="card-text">
                    It’s easy to login or create an account with Zomato
                  </p>
                </div>
              </div>
              <div class="card m-3 rounded">
                <div class="card-body">
                  <h4>Select Payment Method</h4>
                  <p className="card-text">
                    It’s easy to login or create an account with Zomato
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div class="card">
                <div class="card-header">
                  <p className="order-text">ORDER FROM</p>
                  <p className="menu-text">Breakfast 4 U</p>
                  <p className="loc-text">Ballygunge, Kolkata</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div className="d-flex justify-content-around">
                      <div>
                        <div className="veg-border">
                          <div className="veg-color"></div>
                        </div>
                      </div>
                      <div>
                        <h6>Salt Lassi</h6>
                        <p>₹80</p>
                      </div>
                      <div>
                        <div class="d-flex bd-highlight mb-3 bg-white border rounded">
                          <div class="p-2 bd-highlight text-danger">-</div>
                          <div class="p-2 bd-highlight alert-danger">1</div>
                          <div class="p-2 bd-highlight text-danger">+</div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <p
                      className="instruction-text"
                      style={{ fontSize: "10px", textAlign: "center" }}
                    >
                      Add special cooking instructions
                    </p>
                    <p
                      className="offer-text"
                      style={{ fontSize: "13px", textAlign: "center" }}
                    >
                      <LocalOfferIcon />
                      Log in to apply promo code
                    </p>
                  </li>
                  <li class="list-group-item bg-light">
                    <div className="d-flex justify-content-around">
                      <div>
                        <h5 className="heading-text">Subtotal</h5>
                      </div>
                      <div>
                        <p className="cost">₹80.00</p>
                      </div>
                    </div>

                    <hr />
                    <div className="d-flex justify-content-around">
                      <div>
                        <h5 className="heading-text">Grand Total</h5>
                      </div>
                      <div>
                        <p className="cost">₹85.00</p>
                      </div>
                    </div>
                    <hr />
                    <p
                      class="text-danger"
                      style={{ fontSize: "13px", textAlign: "center" }}
                    >
                      Order once placed cannot be cancelled and are
                      non-refundable
                    </p>
                    <hr />
                    <button
                      type="button"
                      class="btn btn-secondary btn-lg btn-block"
                    >
                      Place Order
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default LogoutCheckout;
