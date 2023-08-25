import React, { useEffect } from "react";
import "./footer.css";
import { SiYourtraveldottv } from "react-icons/si";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
// AOS
import Aos from "aos";
import "aos/dist/aos.css";
//

const Footer = () => {
  // AOS
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  //
  return (
    <footer className="footer container section">
      <nav>
        <div className="container__footer">
          <div
            className="flex__container"
            data-aos="fade-up"
            data-aos-duration="2000">
            <div className="logo" data-aos="fade-up" data-aos-duration="2000">
              <SiYourtraveldottv className="icon" />
              <small>Sarwan</small>
            </div>
            <div
              className="social__networks"
              data-aos="fade-up"
              data-aos-duration="3000">
              <BsFacebook className="icon" />
              <BsYoutube className="icon" />
              <AiFillInstagram className="icon" />
            </div>
          </div>

          <div
            className="flex__container"
            data-aos="fade-up"
            data-aos-duration="3000">
            <div className="links">
              <h2>Information</h2>
              <ul className="ul">
                <li>Home</li>
                <li>Explore</li>
                <li>Travel</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          <div
            className="flex__container"
            data-aos="fade-up"
            data-aos-duration="4000">
            <div className="links">
              <h2>Helpful Links</h2>
              <ul className="ul">
                <li>Destination</li>
                <li>Support</li>
                <li>Travel&Condition</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>

          <div
            className="flex__container"
            data-aos="fade-up"
            data-aos-duration="5000">
            <div className="links">
              <h2>Contact</h2>
              <ul className="ul">
                <li>9003417858</li>
                <li>sarwan@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
