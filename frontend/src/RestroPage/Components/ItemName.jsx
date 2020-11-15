import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserLocation } from "../../LandingPage/Redux/action";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AssistantIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DirectionsIcon from "@material-ui/icons/Directions";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ShareIcon from "@material-ui/icons/Share";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Wrapper } from "../Style/ItemNameStyle";

function ItemName(props) {
  const userCoordinates = useSelector(
    (state) => state.landingPageReducer.userCoordinates
  );
  const searchCity = useSelector(
    (state) => state.landingPageReducer.searchCity
  );
  const cityId = useSelector((state) => state.landingPageReducer.cityId);
  const { data } = props;
  const dispatch = useDispatch();

  const getUserCoordinates = () => {
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      dispatch(getUserLocation(longitude, latitude));
      window.open(
        `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${
          data && data.location && data.location.cords.coordinates[1]
        },${data && data.location && data.location.cords.coordinates[0]}`
      );
    }

    function error() {
      console.log("Unable to retrieve your location");
      window.open(
        `https://www.google.com/maps/dir/${
          data && data.location && data.location.cords.coordinates[1]
        },${data && data.location && data.location.cords.coordinates[0]}`
      );
    }

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      return navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  const goToLocation = () => {
    if (userCoordinates.latitude === undefined) {
      getUserCoordinates();
    } else {
      window.open(
        `https://www.google.com/maps/dir/?api=1&origin=${
          userCoordinates.latitude
        },${userCoordinates.longitude}&destination=${
          data && data.location && data.location.cords.coordinates[1]
        },${data && data.location && data.location.cords.coordinates[0]}`
      );
    }
  };

  return (
    <Wrapper>
      <section className="container main-div">
        <section className="item-div">
          <section className="name-div">
            <h1 className="item-name">{data && data.name}</h1>
            <section className="loc-div">
              <div className="loc-sec">
                {data.cuisines &&
                  data.cuisines
                    .trim()
                    .split(",")
                    .map((cuisine) => (
                      <Link
                        className="loc-link"
                        to={{
                          pathname: `/${searchCity.toLowerCase()}/explore`,
                          state: {
                            city_id: parseInt(cityId),
                            filter: {
                              cuisines: cuisine,
                            },
                            title: cuisine,
                          },
                        }}
                        key={cuisine}
                      >
                        {cuisine} ,{" "}
                      </Link>
                    ))}
              </div>
              <Link className="loc-link" to="/#">
                {data.location && data.location.address}
              </Link>
            </section>
            <section className="time-div">
              <section className="time-sec">
                <span className="time-close">
                  {data && data.is_delivering_now ? "Open" : "Closed"}
                </span>
                <span className="time-open">
                  Open at {data && data.timings}
                </span>
                <div>
                  {["right"].map((placement) => (
                    <OverlayTrigger
                      trigger={["hover", "focus"]}
                      key={placement}
                      placement={placement}
                      className="p-2 bd-highlight m-2"
                      overlay={
                        <Popover>
                          <Popover.Content>
                            <p>{data && data.timings}</p>
                          </Popover.Content>
                        </Popover>
                      }
                    >
                      <div variant="secondary">
                        <HelpOutlineIcon className="info-icon" />
                      </div>
                    </OverlayTrigger>
                  ))}
                </div>
              </section>
            </section>
          </section>
          <section className="star-div">
            <section className="star-sec">
              <div className="ratings">
                <AssistantIcon
                  className=" star-start"
                  style={{ marginLeft: "10px" }}
                />
                <AssistantIcon />
                <AssistantIcon />
                <AssistantIcon />
                <AssistantIcon style={{ marginRight: "40px" }} />
              </div>
              <div>
                <p className="dine-rev">
                  {data && data.all_reviews_count} Dining Reviews
                </p>
              </div>
            </section>
            <section className="star-sec">
              <div className="ratings">
                <AssistantIcon
                  style={{ marginLeft: "18px", color: " rgb(237, 90, 107)" }}
                />
                <AssistantIcon style={{ color: " rgb(237, 90, 107)" }} />
                <AssistantIcon style={{ color: " rgb(237, 90, 107)" }} />
                <AssistantIcon style={{ color: " rgb(237, 90, 107)" }} />
                <AssistantIcon
                  style={{
                    marginRight: "120px",
                    color: " rgb(237, 90, 107)",
                  }}
                />
              </div>
              <div>
                <p className="dine-rev">
                  {data.user_rating && data.user_rating.votes} Delivery Reviews
                </p>
              </div>
            </section>
          </section>
        </section>
        <div className="blog-div">
          <section className="blog-sec">
            <button className="rev-btn">
              <span className="add-rev">
                <StarBorderIcon />
                <span className="rev-text">Add Review</span>
              </span>
            </button>
            <div className="btn">
              {/* <a
                rel="noreferrer"
                target="_blank"
                href={`https://www.google.com/maps/dir/?api=1&origin=${
                  userCoordinates.latitude
                },${userCoordinates.longitude}&destination=${
                  data && data.location && data.location.cords.coordinates[1]
                },${
                  data && data.location && data.location.cords.coordinates[0]
                }`}
              > */}
              <span className="add" onClick={goToLocation}>
                <DirectionsIcon />
                <span style={{ color: "rgb(28, 28, 28)" }}>Direction</span>
              </span>
              {/* </a> */}
            </div>
            <div className="btn">
              <span className="add">
                <BookmarkBorderIcon />
                <span style={{ color: "rgb(28, 28, 28)" }}>Bookmark</span>
              </span>
            </div>
            <div className="btn">
              <span className="add">
                <ShareIcon />
                <span style={{ color: "rgb(28, 28, 28)" }}>Share</span>
              </span>
            </div>
          </section>
        </div>
      </section>
    </Wrapper>
  );
}

export default ItemName;
