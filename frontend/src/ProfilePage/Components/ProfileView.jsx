import React from "react";
import { Wrapper } from "../Style/ProfileViewStyle";
import RoomIcon from "@material-ui/icons/Room";

function ProfileView() {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="profile">
            <img
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              className="profile-background"
              alt="profile-background"
            />
            <img
              src="https://b.zmtcdn.com/data/user_profile_pictures/efd/48941cdf5e7432c5a14cf8f1cbbb1efd.jpg"
              className="profile-image"
              alt="profile-pic"
            />
            <p className="profile-name">Gargi Das</p>
            <p className="profile-location">
              <RoomIcon />
              Kolkata
            </p>
            <div className="profile-text-div d-flex">
              <div className="reviews" style={{ textAlign: "center" }}>
                0<p>Reviews</p>
              </div>
              <div className="photos" style={{ textAlign: "center" }}>
                0<p>Photos</p>
              </div>
              <div className="followers" style={{ textAlign: "center" }}>
                0<p>Followers</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default ProfileView;
