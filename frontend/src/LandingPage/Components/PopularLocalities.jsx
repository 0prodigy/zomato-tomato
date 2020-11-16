import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Wrapper } from "../Style/PopolarLocalitiesStyle";
import axios from "axios";
import { Link } from "react-router-dom";

function PopularLocalities() {
  const searchCity = useSelector(
    (state) => state.landingPageReducer.searchCity
  );
  const cityId = useSelector((state) => state.landingPageReducer.cityId);
  const [localities, setLocalities] = useState([]);

  useEffect(() => {
    axios({
      method: "post",
      url: "https://zomato-tomato.tk/api/api/search/localities",
      data: {
        city_id: cityId,
      },
    })
      .then((response) => setLocalities(response.data.localities))
      .catch((error) => setLocalities([]));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Wrapper>
        <div className="heading">
          <p className="text mb-5">
            Popular localities in and around{" "}
            <span className="city-name">{searchCity}</span>
          </p>
          <div className="container d-flex justify-content-between flex-wrap">
            {localities.length > 0 &&
              localities.map((item) => (
                <div className="card list-body m-2" key={item._id}>
                  <Link
                    to={{
                      pathname: `/${searchCity.toLowerCase()}/explore`,
                      state: {
                        city_id: parseInt(cityId),
                        filter: { "location.locality": item.location.locality },
                        title: item.location.locality,
                      },
                    }}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <div className="card-body list-text">
                      {item.location.locality}
                    </div>
                    <ArrowForwardIosIcon className="icons" />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default PopularLocalities;
