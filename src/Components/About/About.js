/** @format */

import React from "react";
import "./About.css";
import image from "../img/cara1.png";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { NavLink } from "react-bootstrap";

const About = () => {
  return (
    <section className="right-section">
      <div className="back-layer">
        <div className="anchor" id="About"></div>
        <div className="container About">
          <div className="row">
            <div className="col-12 col-lg-6 ">
              <img src={image} alt="myPics" className="img-fluid" />
            </div>
            <div className="col-10 col-lg-6 about-content">
              <h1 className="about-header">About Me</h1>
              <p>
                Hello there! I'm Sachin Singh, a passionate Software Engineer
                currently working at Facts Online private ltd. My expertise lies
                in ReactJS development, and I am also well-versed in a spectrum
                of technologies, including Full Stack Development, Node.js,
                MongoDB, MySQL, Python, PostgreSQL, FastAPI, and JavaScript.
              </p>
              <p>
                My approach to work is rooted in integrity, and I believe in the
                power of collaboration to achieve meaningful goals. I am not
                just a developer; I am a problem solver who enjoys turning ideas
                into reality through code.
              </p>
              <p>
                I'm excited about the prospect of new opportunities and
                challenges, and I look forward to contributing to the growth of
                your organization.
              </p>
              <p>Let's build something amazing together! 🚀</p>
              <h1 className="about-header ">Follow us</h1>
              <NavLink
                href="https://www.facebook.com/samroy24"
                target="_blank"
                className=" about-header social-Item"
              >
                <BsFacebook />
              </NavLink>
              <NavLink
                href="https://www.linkedin.com/in/sachin-singh-a2b641107"
                target="_blank"
                className=" about-header social-Item"
              >
                <BsLinkedin />
              </NavLink>
              <NavLink
                href="https://github.com/sachinsingh24"
                target="_blank"
                className=" about-header social-Item"
              >
                <BsGithub />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
