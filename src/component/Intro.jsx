import React from "react";
// import logo from "../assets/logo.png";
export default function Intro() {
  return (
    <div style={{ position: "relative" }}>
      <div className="intro">
        {/* <img  src={logo} alt=" logo" /> */}
        <h1 style={{ margin: "0 30px" }} className="introHeader">
          Hy,
        </h1>
        <svg
          className="downArrow"
          style={{ width: "24px", height: "24px" }}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11,6V14L7.5,10.5L6.08,11.92L12,17.84L17.92,11.92L16.5,10.5L13,14V6H11M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22Z"
          />
        </svg>
      </div>
      <div class="custom-shape-divider-top-1675432044">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
