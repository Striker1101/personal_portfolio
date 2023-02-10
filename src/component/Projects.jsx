import React from "react";
import Button from "@mui/material/Button";
import whereswaldo from "../assets/wheres_waldo.png";
import cryptogram from "../assets/cryptogram.png";
import shoppingCart from "../assets/shoppingCart.png";
import library from "../assets/library.png";
import cvTemplate from "../assets/cv-template.png";
import battleship from "../assets/battleship.png";
export default function Projects() {
  return (
    <>
      <div style={{ margin: "0 30px" }} className="cardContainer">
        <h2 className="headereTwo">My Work</h2>
        <div className="cards">
          <div className="workcard">
            <img className="workCardimg" src={cryptogram} alt="cryptogram" />
            <div className="workCardText">
              <h3 className="heading">Cryptogram</h3>
              <div className="workcardBody">
                <p>
                  crypto currency app for users to trade and get live trading
                  chat, with added security and an admin account
                </p>
                <hr />
                <div>
                  <p>react, firebase, photoshop, cogein widgets</p>
                  <div className="show">
                    <a href="https://cryptogram-faa0f.firebaseapp.com/">
                      Live Site
                    </a>
                    <a href="https://github.com/Striker1101/react-crypto">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="workcard">
            <img
              className="workCardimg"
              src={shoppingCart}
              alt="shopping cart"
              srcSet=""
            />
            <div className="workCardText">
              <h3 className="heading">Shopping Cart</h3>
              <div className="workcardBody">
                <p>
                  Proto-type shopping app for online accessory and game gadget
                  from fortnight apis, with custom component to render this
                  shopping APi stream
                </p>
                <hr />
                <div>
                  <p>react</p>
                  <div className="show">
                    <a href="https://striker1101.github.io/shopping-cart/">
                      Live Site
                    </a>
                    <a href="https://striker1101.github.io/">Github</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="workcard">
            <img className="workCardimg" src={whereswaldo} alt="" srcSet="" />
            <div className="workCardText">
              <h3 className="heading">Wheres-Waldo</h3>
              <div className="workcardBody">
                <p>
                  Full-stack application with leaderboard, played by on one
                  individual player with 3 board to choose from and option to
                  add more
                </p>
                <hr />
                <div>
                  <p>React, Route-Router, firebass</p>
                  <div className="show">
                    <a href="http://wheres-waldo-11d56.firebaseapp.com">
                      Live Site
                    </a>
                    <a href="https://github.com/Striker1101/wheres-waldo">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="workcard">
            <img className="workCardimg" src={cvTemplate} alt="" />
            <div className="workCardText">
              <h3 className="heading">Cv-Template</h3>
              <div className="workcardBody">
                <p>
                  React application that exports result to PDF using html2canvas
                  and jsPDF.
                </p>
                <hr />
                <div>
                  <p>React</p>
                  <div className="show">
                    <a href="http://">Live Site</a>
                    <a href="https://github.com/Striker1101/cv-template">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="workcard">
            <img className="workCardimg" src={battleship} alt="" srcSet="" />
            <div className="workCardText">
              <h3 className="heading">Battleship</h3>
              <div className="workcardBody">
                <p>
                  Dual or single player game, where each player assign ships to
                  board coordinates and aim to kill enemy ship from the shot
                  board
                </p>
                <hr />
                <div>
                  <p>Webpack, Js</p>
                  <div className="show">
                    <a href="https://striker1101.github.io/battleship/">
                      Live Site
                    </a>
                    <a href="https://github.com/Striker1101/battleship">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="workcard">
            <img className="workCardimg" src={library} alt="" srcSet="" />
            <div className="workCardText">
              <h3 className="heading">Library app</h3>
              <div className="workcardBody">
                <p>
                  Dynamic route website, for users to perform any crud method on
                  Books, with access to read and write directly to db
                </p>
                <hr />
                <div>
                  <p>Express, Monogodb, Mongosse </p>
                  <div className="show">
                    <a href="https://library-app.up.railway.app/catalog">
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
