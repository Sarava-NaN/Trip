import React, { useEffect } from "react";
import "./popular.css";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
// import IMG from "../../Assets/london.jpg";
import IMG2 from "../../Assets/6.jpg";
import IMG3 from "../../Assets/7.jpg";
import IMG4 from "../../Assets/Background3.jpg";
import IMG5 from "../../Assets/3.jpg";
// AOS
import Aos from "aos";
import "aos/dist/aos.css";
//
// USe Higher order Array methods Data mapping;

const Data = [
  {
    id: "01",
    img: IMG2,
    destTitle: "Trekking",
    location: "India",
    grade: "Kedarkantha",
  },
  {
    id: "02",
    img: IMG3,
    destTitle: "Forbidden City",
    location: "China",
    grade: "Imperial Palace",
  },
  {
    id: "03",
    img: IMG4,
    destTitle: "Lake View",
    location: "Mexico",
    grade: "Forest House",
  },
  {
    id: "04",
    img: IMG5,
    destTitle: "Machu Pechu",
    location: "Peru",
    grade: "CULTURAL RELAX",
  },
];

const Popular = () => {
  // AOS
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  //

  return (
    <section className="popular section container">
      <div className="seccontainer">
        <div className="popular__heading flex">
          <div
            className="popular__heading-h2"
            data-aos="fade-right"
            data-aos-duration="2500">
            <h2>Popular Destination</h2>
            <p className="para_graph">
              From historical cities to natural spectaculars,come see the best
              of the world!
            </p>
          </div>

          <div
            className="iconsDiv flex"
            data-aos="fade-down"
            data-aos-duration="2500">
            <BsArrowLeftShort className="icon left__icon" />
            <BsArrowRightShort className="icon right__icon" />
          </div>
        </div>

        <div className="maincontent grid">
          {Data.map(({ id, img, destTitle, location, grade }) => {
            return (
              <div data-aos="fade-up" className="singleDestination">
                <div className="destImage">
                  <img src={img} alt="London Palace" downloaded />
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{grade}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">{id}</div>
                  <div className="dextText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
