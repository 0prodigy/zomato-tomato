import React from "react";
import ItemImage from "./Components/ItemImage";
import ItemName from "./Components/ItemName";
import Overview from "./Components/Overview";
import RestroNavbar from "./Components/RestroNavbar";

function RestroPage() {
  return (
    <div>
      <RestroNavbar />
      <ItemImage />
      <ItemName />
      <Overview />
    </div>
  );
}

export default RestroPage;
