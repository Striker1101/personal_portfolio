import React from "react";
import Intro from "./Intro";
import Header from "./Header";
import Main from "./main";
import Footer from "./Footer";
import Bar from "./Bar";
export default function HomeSectors() {
  return (
    <div>
      <Intro />
      <div style={{ margin: "0 25px" }}>
        <Bar />
        <Header />
      </div>

      <Main />
      <Footer />
    </div>
  );
}
