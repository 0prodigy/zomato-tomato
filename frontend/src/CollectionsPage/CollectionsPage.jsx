import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCityCollection } from "../LandingPage/Redux/action";
import { getAllRestaurants } from "../CollectionsPage/Redux/action";
import { useLocation } from "react-router-dom";
import RestroNavbar from "../RestroPage/Components/RestroNavbar";
import { Card, Link, Container, Breadcrumbs } from "@material-ui/core";

function CollectionsPage(props) {
  const {
    cityCollections,
    getCityCollection,
    cityId,
    allRestaurants,
    getAllRestaurants,
  } = props;
  const location = useLocation();
  const [collectionImage, setCollectionImage] = useState("");
  const [collectionTitle, setCollectionTitle] = useState("");
  const [collectionDescription, setCollectionDescription] = useState("");
  console.log(location);

  useEffect(() => {
    let collection_id = location.state.collectionId;
    let selectedCollection = cityCollections.collections.filter(
      (item) => item.collection.collection_id === collection_id
    );
    setCollectionImage(selectedCollection[0].collection.image_url);
    setCollectionTitle(selectedCollection[0].collection.title);
    setCollectionDescription(selectedCollection[0].collection.description);
    async function getAllRes() {
      console.log("Comes here", cityId);
      let result = await getAllRestaurants(cityId);
      console.log(result);
    }
    getAllRes();
  }, [cityCollections, cityId, getAllRestaurants, location.state.collectionId]);

  console.log("All Restaurants are", allRestaurants);
  return (
    <div>
      <RestroNavbar />
      <Container style={{ border: "1px solid red", padding: "10px 85px 0px" }}>
        <Breadcrumbs>
          {location.pathname.split("/").map((item, index) => {
            if (item === "") {
              return (
                <Link color="inherit" href="/" key={index}>
                  Home
                </Link>
              );
            }
            return (
              <Link
                key={index}
                color={index === 3 ? "textPrimary" : "inherit"}
                style={{ textTransform: "capitalize" }}
              >
                {item}
              </Link>
            );
          })}
        </Breadcrumbs>
        <Card
          style={{
            width: "100%",
            height: "320px",
            margin: "10px 0px",
            position: "relative",
            overflow: "hidden",
          }}
          elevation={0}
        >
          <img
            src={collectionImage}
            alt="Collection Banner"
            style={{
              transform: "scale(2.4)",
              position: "absolute",
              filter: "brightness(0.8)",
            }}
          />

          <div
            style={{
              position: "absolute",
              zIndex: "",
              bottom: "50px",
              padding: "0px 40px",
            }}
          >
            <div style={{ fontSize: "38px", color: "white" }}>
              {collectionTitle}
            </div>
            <div style={{ color: "white" }}>{collectionDescription}</div>
          </div>
        </Card>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cityCollections: state.landingPageReducer.cityCollections,
  cityId: state.landingPageReducer.cityId,
  allRestaurants: state.collectionPageReducer.allRestaurants,
});

const mapDispatchToProps = (dispatch) => ({
  getCityCollection: (cityId) => dispatch(getCityCollection(cityId)),
  getAllRestaurants: (cityId) => dispatch(getAllRestaurants(cityId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsPage);
