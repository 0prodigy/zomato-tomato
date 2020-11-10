import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { set } from "lodash";

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
    width: 30%;
    position: relative;
    display: flex;
    justify-content: start;
  }
  .list-body:hover {
    box-shadow: 0 8px 6px -6px #e6e6e6;
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
    width: fit-content;
    max-width: 90%;
  }
  .icons {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 25px;
    height: 15px;
    color: rgb(28, 28, 28);
  }
`;
function PopularLocalities() {
  const searchCity = useSelector(
    (state) => state.landingPageReducer.searchCity
  );
  const cityId = useSelector((state) => state.landingPageReducer.cityId);
  const [localities, setLocalities] = useState([]);

  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:5000/api/search/localities",
      data: {
        city_id: cityId,
      },
    })
      .then((response) => setLocalities(response.data.localities))
      .catch((error) => setLocalities([]));
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
                  <div className="card-body list-text">
                    {item.location.locality}
                  </div>
                  <ArrowForwardIosIcon className="icons" />
                </div>
              ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default PopularLocalities;
