import React from "react";
import { useLocation, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SuccessMessage from "./Components/SuccessMessage";

function PaymentSuccessPage() {
  const location = useLocation();

  if (location.state.transactionSuccess !== true) {
    return <Redirect to={`${location.pathname}`} />;
  }
  return (
    <div>
      <Navbar />
      <SuccessMessage />
    </div>
  );
}

export default PaymentSuccessPage;
