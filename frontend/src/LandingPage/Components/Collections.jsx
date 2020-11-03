import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const Wrapper = styled.div`
  heading-div {
    font-size: 1.6rem;
  }
  .collection {
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 1.2;
    color: rgb(28, 28, 28);
    margin-top: 15px;
  }
  .text-div {
    display: flex;
    justify-content: space-between;
    margin-top: 0.4rem;
    font-size: 1rem;
  }
  .text {
    line-height: 1.4;
    font-weight: 300;
    color: rgb(54, 54, 54);
    font-size: 1.2rem;
    margin: 0px;
  }
  link {
    text-decoration: none;
    display: block;
    background-color: transparent;
    font-weight: 300;
    color: rgb(245, 112, 130);
  }
  .link-text {
    color: rgb(236, 70, 84);
    display: inline-flex;
    padding: 0.3rem;
    background-color: transparent;
    cursor: pointer;
    border: 0.1rem solid transparent;
    border-radius: 0.4rem;
    line-height: 1;
    font-size: 1.2rem;
  }
`;

function Collections() {
  return (
    <>
      <Wrapper>
        <div className="heading-div container">
          <h2 className="collection">Collections</h2>
          <div className="text-div">
            <h6 className="text">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Delhi NCR, based on trends
            </h6>
            <Link className="link">
              <span className="link-text">
                All collection in Delhi NCR
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Collections;
