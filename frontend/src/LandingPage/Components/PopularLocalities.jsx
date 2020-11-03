import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Wrapper = styled.div`
  .heading {
    margin-top: 4rem;
    margin-bottom: 4rem;
    text-align: center;
  }
  .city-name {
    font-weight: 500;
    font-size: 3rem;
  }
  .text {
    margin: 0px;
    color: rgb(54, 54, 54);
    font-size: 3rem;
    line-height: 1.2;
    font-weight: 400;
  }
  .list-body {
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }
  .list-body:hover {
    box-shadow: 0 8px 6px -6px black;
  }
  .list-text {
    overflow-x: hidden;
    overflow-y: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
    line-height: 1.2;
    font-weight: 400;
    color: rgb(28, 28, 28);
    margin: 0px;
  }
  .icons {
    margin-left: 25px;
    height: 15px;
    color: rgb(28, 28, 28);
  }
`;
function PopularLocalities() {
  return (
    <>
      <Wrapper>
        <div className="heading">
          <p className="text mb-5">
            Popular localities in and around{" "}
            <span className="city-name">Delhi NCR</span>
          </p>
          <div className="container d-flex justify-content-between">
            {[
              "Connaught Place (376 pl...",
              "Sector 29,Gurgaon (20..",
              "Sector 18,Noida(254 pl..",
            ].map((item) => (
              <div className="card list-body m-2" key={item}>
                <div className="card-body list-text">
                  {item}
                  <ArrowForwardIosIcon className="icons" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default PopularLocalities;
