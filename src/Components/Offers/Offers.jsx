import React, { useEffect } from "react";
import "./offers.css";
import { MdBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { IoIosWifi } from "react-icons/io";
import { FaShuttleVan } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort, BsFillFileEarmarkImageFill } from "react-icons/bs";
import IMG1 from "../../Assets/pexels-boonkong-boonpeng-1134175.jpg";
import IMG2 from "../../Assets/4.jpg";
import IMG3 from "../../Assets/3.jpg";
import IMG4 from "../../Assets/pexels-amar-saleem-70441.jpg";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";
//

const OfferData = [
  {
    id: 1,
    img: IMG1,
    title: "Beach Resort",
    location: "Italy",
    price: "$7,545",
  },
  {
    id: 2,
    img: IMG2,
    title: "#2 Angkor Wat",
    location: "USA",
    price: "$25,935",
  },
  {
    id: 3,
    img: IMG3,
    title: "#440 vine #32",
    location: "Mexico",
    price: "$9999",
  },
  // {
  //   id: 4,
  //   img: IMG4,
  //   title: "#02 Crystal Palace",
  //   location: "Manchester",
  //   price: "$7,545",
  // },
];

const Offers = () => {
  // AOS
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  //
  return (
    <section className="offer container section">
      <div className="seccontainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h1 className="secTitle h">Special Offers</h1>
          <p className="p">
            From historical cities to natural spectaculars,come see the best of
            the world!
          </p>
        </div>

        {OfferData.map(({ id, title, price, location, img }) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="maincontent grid">
              <div className="singleOffer">
                <div className="destImage">
                  <img src={img} alt="" />
                  <span className="discount">30% Off</span>
                </div>
                <div className="offerboddy">
                  <div className="price flex">
                    <h4>{price}</h4>
                    <span className="status">For Rent</span>
                  </div>
                  <div className="amentities flex">
                    <div className="singleAmentity flex">
                      <MdBed className="icon" />
                      <small>2 Beds</small>
                    </div>
                    <div className="singleAmentity flex">
                      <FaBath className="icon" />
                      <small>1 Bath</small>
                    </div>
                    <div className="singleAmentity flex">
                      <IoIosWifi className="icon" />
                      <small>Free Wifi</small>
                    </div>
                    <div className="singleAmentity flex">
                      <FaShuttleVan className="icon" />
                      <small>Shuttle</small>
                    </div>
                  </div>

                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>{`${location}  ${title}`}</small>
                  </div>
                  <button className="btn flex">
                    View Details
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Offers;
