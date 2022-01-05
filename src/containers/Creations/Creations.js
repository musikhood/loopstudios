import React, { useState, useEffect } from "react";
import Gallery from "../../components/Gallery/Gallery";
import "./creations.scss";
import img1Mobile from "../../images/mobile/image-deep-earth.jpg";
import img1Desktop from "../../images/desktop/image-deep-earth.jpg";
import img2Mobile from "../../images/mobile/image-night-arcade.jpg";
import img2Desktop from "../../images/desktop/image-night-arcade.jpg";
import img3Mobile from "../../images/mobile/image-soccer-team.jpg";
import img3Desktop from "../../images/desktop/image-soccer-team.jpg";
import img4Mobile from "../../images/mobile/image-grid.jpg";
import img4Desktop from "../../images/desktop/image-grid.jpg";
import img5Mobile from "../../images/mobile/image-from-above.jpg";
import img5Desktop from "../../images/desktop/image-from-above.jpg";
import img6Mobile from "../../images/mobile/image-pocket-borealis.jpg";
import img6Desktop from "../../images/desktop/image-pocket-borealis.jpg";
import img7Mobile from "../../images/mobile/image-curiosity.jpg";
import img7Desktop from "../../images/desktop/image-curiosity.jpg";
import img8Mobile from "../../images/mobile/image-fisheye.jpg";
import img8Desktop from "../../images/desktop/image-fisheye.jpg";

const pictures = [
  {
    id: 1,
    imgMobile: img1Mobile,
    imgDesktop: img1Desktop,
    about: "DEEP EARTH",
  },
  {
    id: 2,
    imgMobile: img2Mobile,
    imgDesktop: img2Desktop,
    about: "NIGHT ARCADE",
  },
  {
    id: 3,
    imgMobile: img3Mobile,
    imgDesktop: img3Desktop,
    about: "SOCCER TEAM VR",
  },
  {
    id: 4,
    imgMobile: img4Mobile,
    imgDesktop: img4Desktop,
    about: `THE GRID`,
  },
  {
    id: 5,
    imgMobile: img5Mobile,
    imgDesktop: img5Desktop,
    about: "FROM UP ABOVE VR",
  },
  {
    id: 6,
    imgMobile: img6Mobile,
    imgDesktop: img6Desktop,
    about: "POCKET BOREALIS",
  },
  {
    id: 7,
    imgMobile: img7Mobile,
    imgDesktop: img7Desktop,
    about: "THE CURIOSITY",
  },
  {
    id: 8,
    imgMobile: img8Mobile,
    imgDesktop: img8Desktop,
    about: "MAKE IT FISHEYE",
  },
];

function Creations() {
  const [screenSize, setScreenSize] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 799) {
      setScreenSize(false);
    } else {
      setScreenSize(true);
    }
  }, []);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 799) {
      setScreenSize(false);
    } else {
      setScreenSize(true);
    }
  });
  return (
    <section className="creations" role="main" aria-labelledby="creations">
      <div className="creations__title">
        <h3 className="creations__h3">Our Creations</h3>
        {screenSize ? null : (
          <a href="#" className="creations__btn">
            SEE ALL
          </a>
        )}
      </div>
      <div className="creations__content">
        {pictures.map((item) => (
          <Gallery
            key={item.id}
            imageMobile={item.imgMobile}
            imageDesktop={item.imgDesktop}
            about={item.about}
          />
        ))}
        {screenSize ? (
          <a href="#" className="creations__btn creations__btn--mobile">
            SEE ALL
          </a>
        ) : null}
      </div>
    </section>
  );
}

export default Creations;
