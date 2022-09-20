import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Page from "./components/Page-test"

function App() {
  return (
    <>
      <Header />
      <Page/>
      {/* <Home>
        <Product />
      </Home> */}
      <Footer />
    </>
  );
}

export default App;
