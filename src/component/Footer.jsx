import React from "react";
import img from "../assets/use1.png";
export default function Footer() {
  return (
    <div style={{ position: "relative" }}>
      <div className="contactContainer">
        <div className="contactText">
          <h2 className="headereTwo">Contact Me</h2>
          <p>
            I am currently looking for an opportunity, and if you have a
            question or just want to chat, feel free to send me a message and I
            will get back to you!
          </p>
          <div id="reply" style={{ display: "none" }}>
            Thanks!! you would receive a reply soon{" "}
          </div>
          <form action="" id="form">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="Name" />

            <label htmlFor="email">Email:</label>
            <input type="email" name="enail" id="email" placeholder="E-mail" />

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <br></br>
            <input type="submit" aria-label="submit to owner" value="submit" />
          </form>
        </div>
        <img id="profileImg" src={img} alt="" srcSet="" />
      </div>
      <footer style={{ backgroundColor: "black", color: "wheat" }}>
        <span>
          <p>Num: 081062438565</p>
        </span>
        <span>
          <p>Address: 39 kilo street, off new era road</p>
        </span>
      </footer>
    </div>
  );
}
