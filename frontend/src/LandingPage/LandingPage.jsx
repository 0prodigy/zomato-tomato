import React from "react";
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
    </div>
  );
}

export default LandingPage;
