import React from "react";
import Button from "@mui/material/Button";
import Data from "../data";
export default function Projects() {
  return (
    <>
      <div className="cardContainer">
        <h1 className="headereTwo">My Work</h1>
        <div className="cards">
          {Data.map((item, i) => {
            return (
              <div className="workcard">
                <div className="cardLine"></div>
                <img className="workCardimg" src={item.src} alt={item.header} />
                <div className="workCardText">
                  <h3 className="heading">{item.header}</h3>
                  <div className="workcardBody">
                    <p>{item.des}</p>
                    <hr />
                    <div>
                      <p>react, firebase, photoshop, cogein widgets</p>
                      <div className="show">
                        <a href={item.live_site}>Live Site</a>
                        <a href={item.repo}>Github</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10px",
          width: "100%",
        }}
      >
        <Button variant="contained" href="https://github.com/Striker1101">
          See more
        </Button>
      </div>
    </>
  );
}
