import React from "react";
import { useSelector } from "react-redux";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Wrapper } from "../Style/PopolarLocalitiesStyle";

function PopularLocalities() {
  const searchCity = useSelector(
    (state) => state.landingPageReducer.searchCity
  );
  return (
    <>
      <Wrapper>
        <div className="heading">
          <p className="text mb-5">
            Popular localities in and around{" "}
            <span className="city-name">{searchCity}</span>
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
