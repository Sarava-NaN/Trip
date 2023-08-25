import React, { useEffect } from "react";
import "./about.css";
// Imporing Images and videos
import IMG from "../../Assets/mountain.png";
import IMG2 from "../../Assets/hikings.png";
import IMG3 from "../../Assets/care2.png";
import VID from "../../Assets/saigon_-_14385 (1080p).mp4";
// AOS
import Aos from "aos";
import "aos/dist/aos.css";
//
import { FloatingWhatsApp } from "react-floating-whatsapp";
import DP from "../../Assets/dp.jpg";
import { useState } from "react";

const About = () => {
  const [whatsapp, setWhatsapp] = useState("WhatsApp__");

  const Hide__show = () => {
    if (window.scrollY >= 20) {
      setWhatsapp("WhatsApp__");
    } else {
      setWhatsapp("hideWhatsapp");
    }
  };
  // window.addEventListener("scroll", () => {
  //   const ScrollScale = window.scrollY;
  //   console.log(ScrollScale);
  // });
  window.addEventListener("scroll", Hide__show);
  // AOS
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  //
  return (
    <section className="about section">
      {/* Whatsapp */}
      <div className={whatsapp}>
        <FloatingWhatsApp
          phoneNumber="919003417858"
          accountName="Saravanan"
          allowEsc
          darkMode="true"
          allowClickAway
          notification
          // notificationDelay=""
          chatMessage="Hello How can I Help U"
          statusMessage="Online"
          avatar={DP}
          placeholder="Send a Message"
        />
      </div>
      <div className="seccontainer">
        <div className="title">Why Hikings?</div>
        <div className="maincontent container grid">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singleItem">
            <img src={IMG} alt="" />
            <h3>100+ Mountains</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves health and well-being...
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="singleItem">
            <img src={IMG2} alt="" />
            <h3>1000+ Hikings</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves health and well-being...
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="singleItem">
            <img src={IMG3} alt="" />
            <h3>1000+ Customers </h3>
            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves health and well-being...
            </p>
          </div>
        </div>

        <div className="videocard container">
          <div className="cardcontent grid">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="cardtext">
              <h2>Wounderful House Experience in there!</h2>
              <p>
                The Advencture subranking is based on an equally weighted
                average of scores from five country
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="cardvideo">
              <video src={VID} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
