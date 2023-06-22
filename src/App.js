import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => {
  return (
    <Provider store={store}>
      <Header />

      {/* OutLet */}
      <Outlet />
      <Footer />
    </Provider>
  );
};

export default App;
