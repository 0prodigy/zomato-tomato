import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { BannerWrapper } from "../Style/BannerStyles";

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
          <img
            src="/tomato_landing_page.png"
            alt="Zomato Logo"
            className="zomatoImage"
          />
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
