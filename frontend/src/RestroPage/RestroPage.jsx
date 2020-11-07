import React from "react";
import ItemImage from "./Components/ItemImage";
import ItemName from "./Components/ItemName";
import OrderOnline from "./Components/OrderOnline";
import Overview from "./Components/Overview";
import RestroNavbar from "./Components/RestroNavbar";
import Review from "./Components/Review";
import Menu from "./Components/Menu";
import Photos from "./Components/Photos";
function RestroPage() {
  return (
    <div>
      <RestroNavbar />
      <ItemImage />
      <ItemName />
      {/* <Overview /> */}
      {/* <OrderOnline /> */}
      {/* <Review /> */}
      {/* <Menu /> */}
      <Photos />
    </div>
  );
}

export default RestroPage;
