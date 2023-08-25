import React, { useEffect } from "react";
import "./blog.css";
import { BsArrowRightShort } from "react-icons/bs";
import IMG from "../../Assets/arches-national-park-1846759_1280.jpg";
import IMG2 from "../../Assets/children-4355469_1280.jpg";
import IMG3 from "../../Assets/elephant-1822481_1280.jpg";
import IMG4 from "../../Assets/asia-2179107_1280.jpg";
import IMG5 from "../../Assets/train-1728537_1280.jpg";
import IMG6 from "../../Assets/mountains-3771960_1280.jpg";
// AOS
import Aos from "aos";
import "aos/dist/aos.css";
//

const PostData = [
  {
    id: 1,
    h1: "Arches National Park",
    img: IMG,
    p: "The park has over 2,000 natural stone arches, hundreds of soaring pinnacles, massive rock fins, and giant balanced rocks.",
  },
  {
    id: 2,
    img: IMG2,
    h1: "Easy lake walk & theme trail for kids",
    p: "An easy walk around an alpine lake with mountain views. Many amusements for children including a theme trail, huge playground, tall jump into an air pillow and pony rides.",
  },
  {
    id: 3,
    img: IMG3,
    h1: "Elephant Safari In Jim Corbett",
    p: "Jim Corbett is the oldest national park that entices thousands of tourists every year to witness the wildlife adventure.",
  },
  {
    id: 4,
    img: IMG4,
    h1: "Chennai Old Madras",
    p: "Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu.",
  },
];

const Blog = () => {
  // AOS
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  //
  return (
    <section className="blog container section">
      <div className="seccontainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to the incredible experience in the world.
          </p>
        </div>

        <div class="maincontainer grid">
          {PostData.map(({ img, h1, p, id }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                class="singlepost grid">
                <div class="imgDiv">
                  <img src={img} alt={id} />
                </div>
                <div class="postdetails">
                  <h3 data-aos="fade-up" data-aos-duration="3000">
                    {h1}
                  </h3>
                  <p data-aos="fade-up" data-aos-duration="4000">
                    {p}
                  </p>
                  <a
                    href="#"
                    className="flex readme"
                    data-aos="fade-up"
                    data-aos-duration="4500">
                    Read More
                    <BsArrowRightShort className="icon" />
                  </a>
                </div>

                {/*  */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
