import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Pages/Hero";
import Bookinggg from "./Pages/Bookinggg";
import Aboutus from "./Pages/Aboutus";
import Contact from "./Pages/Contact";
import Nopage from "./Pages/Nopage";
import DisplayFormData from "./components/DisplayFormData";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/booking" element={<Bookinggg />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
      <DisplayFormData />
    </>
  );
};

export default App;
