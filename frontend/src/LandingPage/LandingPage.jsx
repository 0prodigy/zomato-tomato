import React from "react";
import Collections from "./Components/Collections";
import Explore from "./Components/Explore";
import LandingFooter from "./Components/LandingFooter";
import PopularLocalities from "./Components/PopularLocalities";
import styled from "styled-components";
import Navigation from "./Components/Navigation";
import Banner from "./Components/Banner";

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  position: absolute;
  height: 86px;
  background-color: transparent;
`;

function LandingPage() {
  return (
    <div>
      <HeaderWrapper>
        <Navigation />
      </HeaderWrapper>
      <Banner />
      <Explore />
      <Collections />
      <PopularLocalities />
      <LandingFooter />
    </div>
  );
}

export default LandingPage;
