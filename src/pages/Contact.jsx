import React from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaTumblr } from "@react-icons/all-files/fa/FaTumblr";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaDribbble } from "@react-icons/all-files/fa/FaDribbble";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import {
  ContactStyled,
  Input,
  Click,
} from "../component/styles/Contact.styled";
export default function contact() {
  return (
    <ContactStyled id="contact">
      <div>
        <header>
          <h2>Have me make stuff for you.</h2>
          <p>Ornare nulla proin odio consequat sapien vestibulum ipsum.</p>
        </header>
        <main>
          <div>
            <form method="post" action="#">
              <Input type="text" name="name" id="name" placeholder="Name" />

              <Input type="text" name="email" id="email" placeholder="Email" />
              <Input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />

              <textarea
                name="message"
                id="message"
                rows={20}
                placeholder="Message"
              ></textarea>
              <tip>
                <Click color="green" type="submit" value="Send Message" />
                <Click
                  color="red"
                  type="reset"
                  value="Clear Form"
                  class="alt"
                />
              </tip>
            </form>
          </div>
          <div>
            <hr />
            <h3>Find me on ...</h3>
            <ul>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaDribbble />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTumblr />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaGoogle />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </main>
      </div>
    </ContactStyled>
  );
}
