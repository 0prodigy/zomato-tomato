import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAllRestaurants } from "../CollectionsPage/Redux/action";
import { useLocation } from "react-router-dom";
import RestroNavbar from "../RestroPage/Components/RestroNavbar";
import { Card, Link, Container, Breadcrumbs, Grid } from "@material-ui/core";
import CollectionCards from "./Components/CollectionCards";

function CollectionsPage(props) {
  const { cityCollections, cityId, allRestaurants, getAllRestaurants } = props;
  const location = useLocation();
  let collection_id = location.state.collectionId;
  const [collectionImage, setCollectionImage] = useState("");
  const [collectionTitle, setCollectionTitle] = useState("");
  const [collectionDescription, setCollectionDescription] = useState("");

  useEffect(() => {
    let selectedCollection = cityCollections.collections.filter(
      (item) => item.collection.collection_id === collection_id
    );
    setCollectionImage(selectedCollection[0].collection.image_url);
    setCollectionTitle(selectedCollection[0].collection.title);
    setCollectionDescription(selectedCollection[0].collection.description);
    getAllRestaurants(cityId);
  }, [cityCollections, cityId, getAllRestaurants, collection_id]);

  return (
    <div>
      <RestroNavbar />
      <Container style={{ padding: "10px 85px 0px", fontWeight: "200" }}>
        <Breadcrumbs>
          {location.pathname.split("/").map((item, index) => {
            if (item === "") {
              return (
                <Link
                  color="inherit"
                  href="/"
                  key={index}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                >
                  Home
                </Link>
              );
            }
            return (
              <Link
                key={index}
                color={index === 3 ? "textPrimary" : "inherit"}
                style={{
                  textTransform: "capitalize",
                  color: "inherit",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
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
        <Grid
          style={{ display: "flex", flexFlow: "wrap", marginTop: "50px" }}
          container
          spacing={2}
        >
          {allRestaurants &&
            allRestaurants
              .filter((item) => item.collection_id.indexOf(collection_id))
              .map((item) => {
                return <CollectionCards data={item} key={item.id} />;
              })}
        </Grid>
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
  getAllRestaurants: (cityId) => dispatch(getAllRestaurants(cityId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsPage);
