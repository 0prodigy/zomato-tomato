import React from "react";
import { useLocation, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Collections from "./Components/Collections";
import Explore from "./Components/Explore";
import LandingFooter from "./Components/LandingFooter";
import PopularLocalities from "./Components/PopularLocalities";
import styled from "styled-components";
import Navigation from "./Components/Navigation";
import Banner from "./Components/Banner";
import MobileApp from "./Components/MobileApp";

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  position: absolute;
  height: 86px;
  background-color: transparent;
`;

function LandingPage() {
  const location = useLocation();
  const searchCity = useSelector(
    (state) => state.landingPageReducer.searchCity
  );
  if (location.pathname !== `/${searchCity.toLowerCase()}`) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <HeaderWrapper>
        <Navigation />
      </HeaderWrapper>
      <Banner />
      <Explore />
      <Collections />
      <PopularLocalities />
      <MobileApp />
      <LandingFooter />
    </div>
  );
}

export default LandingPage;
