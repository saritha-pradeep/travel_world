import Home from "../Screens/Home";
import React from "react";
import {
  BrowserRouter as NavigationProvider,
  Routes,
  Route,
} from "react-router-dom";
import Views from "../Screens/Views";
import About from "../Screens/About";
import Contact from "../Screens/Contact";
function MainNav(params) {
  return (
    <NavigationProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/views" element={<Views />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </NavigationProvider>
  );
}
export default MainNav;
