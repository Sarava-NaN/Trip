import React, { useEffect } from "react";
import "./home.css";
import { useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // AOS
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  //
  // ColorChanger
  const ColorChanger = useRef(null);
  const colors = [
    "#16E0BD",
    "#FAC05E",
    "#DBD053",
    "#E5FCFF",
    "#59C9A5",
    "#05F140",
    "#FFBA08",
    "#C7980A",
    "#F4651F",
    "#82D8A7",
    "#CC3A05",
    "#575E76",
    "#156943",
    "#0BD055",
    "#ACD338",
  ];
  const HandleChanger = () => {
    const RandomColorGenerator = Math.floor(Math.random() * colors.length);
    ColorChanger.current.style.color = colors[RandomColorGenerator];
  };
  return (
    <section className="home">
      <div className="container seccontainer">
        <div className="homeHeader">
          <h1
            data-aos="fade-up"
            className="title"
            ref={ColorChanger}
            onClick={HandleChanger}>
            Plan Your Trip With Travel Sarwan
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="2500"
            className="title__paragraph">
            Travel to your favourite city with respectful of the environment!
          </p>

          <button data-aos="fade-up" data-aos-duration="3000" className="btn">
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Dream Destination" />
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="distDiv">
            <label htmlFor="distance">Distance</label>
            <input type="text" placeholder="11/Meters" />
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="priceDiv">
            <label htmlFor="price">Price Range</label>
            <input type="text" placeholder="$150-$500" />
          </div>
          <button
            data-aos="fade-right"
            data-aos-duration="3500"
            className="btn home__btn">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
