import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LandingPage from "../LandingPage/LandingPage";
import { getCityId } from "../LandingPage/Redux/action";
import RestroPage from "../RestroPage/RestroPage";

function Home(props) {
  const { getCityId, searchCity } = props;
  useEffect(() => {
    let initialPayload = {
      long: 88.363895,
      lat: 22.572646,
    };
    getCityId(initialPayload);
  }, [getCityId]);
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
      {/* <RestroPage /> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchCity: state.landingPageReducer.searchCity,
});

const mapDispatchToProps = (dispatch) => ({
  getCityId: (payload) => dispatch(getCityId(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
