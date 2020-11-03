import React from "react";
import Collections from "./Components/Collections";
import Explore from "./Components/Explore";
import LandingFooter from "./Components/LandingFooter";
import PopularLocalities from "./Components/PopularLocalities";

function LandingPage() {
  return (
    <div>
      <Explore />
      <Collections />
      <PopularLocalities />
      <LandingFooter />
    </div>
  );
}

export default LandingPage;
