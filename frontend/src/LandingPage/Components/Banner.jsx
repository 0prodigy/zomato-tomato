import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const BannerWrapper = styled.div`
  height: calc(100vh - 35rem);
  min-height: 30rem;
  max-height: 57rem;
  width: 100%;
  position: relative;
  > .landingPageImageContainer {
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    > .landingPageImage {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      background-size: cover;
      transform: scale(1.3);
    }
  }

  .contentWrapper {
    position: absolute;
    bottom: calc(50% - 5rem);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .zomatoImageContainer {
      height: 65px;
      width: 18rem;
      position: relative;

      .zomatoImage {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        background-size: contain;
      }
    }

    .description {
      color: white;
      margin-top: 2rem;
      text-align: center;
      font-weight: 400;
      font-family: "Poppins";
    }
  }
`;

function Banner(props) {
  const { searchCityRedux } = props;
  return (
    <BannerWrapper>
      <div className="landingPageImageContainer">
        <img
          src="./landingPageImage.jpg"
          alt="Landing Page Pic"
          className="landingPageImage"
        />
      </div>
      <div className="contentWrapper">
        <div className="zomatoImageContainer">
          <img src="./Zomato.webp" alt="Zomato Logo" className="zomatoImage" />
        </div>
        <h2 className="description">
          Discover the best food & drinks in {searchCityRedux}
        </h2>
        <SearchBar />
      </div>
    </BannerWrapper>
  );
}

const mapStateToProps = (state) => ({
  searchCityRedux: state.landingPageReducer.searchCity,
});

export default connect(mapStateToProps)(Banner);
