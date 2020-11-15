import React from "react";
import Navbar from "./Components/Navbar";
import ProfileBody from "./Components/ProfileBody";
import ProfileView from "./Components/ProfileView";

function ProfilePage() {
  return (
    <div>
      <Navbar />
      <ProfileView />
      <ProfileBody />
    </div>
  );
}

export default ProfilePage;
