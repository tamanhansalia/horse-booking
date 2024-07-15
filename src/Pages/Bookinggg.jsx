import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Booking from "../components/Booking/Booking";
import Horses from "../components/Booking/Horses";
import Footer from "../components/Hero/Footer";

const Bookinggg = () => {
  return (
    <div>
      <Navbar />
      <Booking />
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Bookinggg;
