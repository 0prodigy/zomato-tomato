import React from "react";
import Navbar from "./Components/Navbar";
import ProfileBody from "./Components/ProfileBody";
import ProfileView from "./Components/ProfileView";
import MainFooter from "../LandingPage/Components/MainFooter";

function ProfilePage() {
  return (
    <div>
      <Navbar />
      <ProfileView />
      <ProfileBody />
      <MainFooter />
    </div>
  );
}

export default ProfilePage;
