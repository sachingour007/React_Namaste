import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <Header />

      {/* OutLet */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
