import React from "react";
import About from "./containers/About/About";
import Header from "./containers/Header/Header";
import Creations from "./containers/Creations/Creations";
import Footer from "./containers/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Creations />
      <Footer />
    </>
  );
}

export default App;
