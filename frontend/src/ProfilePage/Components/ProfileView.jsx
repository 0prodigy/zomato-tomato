import React from "react";
import { Wrapper } from "../Style/ProfileViewStyle";

function ProfileView() {
  const activeUserDetails = JSON.parse(localStorage.getItem("activeUser"));
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
              src={`${activeUserDetails.image}`}
              className="profile-image"
              alt="profile-pic"
            />
            <p className="profile-name">{activeUserDetails.name}</p>
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
