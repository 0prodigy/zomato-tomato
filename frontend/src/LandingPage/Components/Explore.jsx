import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .card-focus {
    transition: transform 0.2s;
  }
  .card-focus:hover {
    transform: scale(1.055);
  }
  .card-body {
    width: 100%;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    height: fit-content;
    position: absolute;
    bottom: 0px;
    text-align: center;
    background-color: white;
  }
`;

function Explore() {
  return (
    <>
      <Wrapper>
        <div className="container d-flex justify-content-between mt-4 mb-4">
          <div
            className="card  m-2 card-focus"
            style={{
              width: "19rem",
              borderRadius: "15px",
              height: "230px",
            }}
          >
            <img
              src="https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*"
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "15px",
                position: "absolute",
              }}
              className="card-img-rad"
              alt="card1"
            />
            <div className="card-body">
              <h5 className="card-text">Go out for a meal</h5>
            </div>
          </div>
          <div
            className="card  m-2 card-focus"
            style={{ width: "19rem", borderRadius: "15px", height: "230px" }}
          >
            <img
              src="https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*"
              className="card-img-top"
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "15px",
                position: "absolute",
              }}
              alt="card1"
            />
            <div className="card-body">
              <h5 className="card-text">Nightlife & Clubs</h5>
            </div>
          </div>
          <div
            className="card  m-2 card-focus"
            style={{ width: "19rem", borderRadius: "15px", height: "230px" }}
          >
            <img
              src="https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png?fit=around|402:360&crop=402:360;*,*"
              className="card-img-top"
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "15px",
                position: "absolute",
              }}
              alt="card1"
            />
            <div className="card-body">
              <h5 className="card-text">Zomato Pro</h5>
            </div>
          </div>
          <div
            className="card  m-2 card-focus"
            style={{ width: "19rem", borderRadius: "15px", height: "230px" }}
          >
            <img
              src="https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png?fit=around|402:360&crop=402:360;*,*"
              className="card-img-top"
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "15px",
                position: "absolute",
              }}
              alt="card1"
            />
            <div className="card-body">
              <h5 className="card-text" style={{ fontWeight: "500" }}>
                Order Food Online
              </h5>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Explore;
