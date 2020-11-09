import React, { useEffect } from "react";
import ExploreZomato from "../ExploreZomato.jsx/ExploreZomato";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LandingPage from "../LandingPage/LandingPage";
import { getCityId, getCityCollection } from "../LandingPage/Redux/action";
import RestroPage from "../RestroPage/RestroPage";
import CollectionsPage from "../CollectionsPage/CollectionsPage";

function Home(props) {
  const { getCityId, searchCity, getCityCollection } = props;
  const initialData = async () => {
    let initialPayload = {
      long: 88.363895,
      lat: 22.572646,
    };
    let result = await getCityId(initialPayload);
    getCityCollection(result.cityId);
  };
  useEffect(() => {
    initialData();
  }, []);
  console.log("The search city is", searchCity);
  return (
    <div>
      <Route
        exact
        path="/"
        render={() =>
          searchCity && (
            <Redirect to={{ pathname: `/${searchCity.toLowerCase()}` }} />
          )
        }
      />
      <Route exact path="/:city">
        <LandingPage />
      </Route>
      <Route
        path="/:city/restaurants/:restaurant"
        render={() => <RestroPage />}
      />
      <Route
        path="/:city/collections/:collections"
        render={() => <CollectionsPage />}
      />
      <Route path="/:city/explore" render={() => <ExploreZomato />} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchCity: state.landingPageReducer.searchCity,
});

const mapDispatchToProps = (dispatch) => ({
  getCityId: (payload) => dispatch(getCityId(payload)),
  getCityCollection: (cityId) => dispatch(getCityCollection(cityId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
