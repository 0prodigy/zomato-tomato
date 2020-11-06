import React from "react";
import ItemImage from "./Components/ItemImage";
import ItemName from "./Components/ItemName";
import OrderOnline from "./Components/OrderOnline";
import Overview from "./Components/Overview";
import RestroNavbar from "./Components/RestroNavbar";

function RestroPage() {
  return (
    <div>
      <RestroNavbar />
      <ItemImage />
      <ItemName />
      {/* <Overview /> */}
      <OrderOnline />
    </div>
  );
}

export default RestroPage;
