import React, { useState } from "react";
import "./about.scss";
import imgMobile from "../../images/mobile/image-interactive.jpg";
import imgDesktop from "../../images/desktop/image-interactive.jpg";

function About() {
  const [scaleImg, setScaleImg] = useState(false);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      setScaleImg(true);
    } else {
      setScaleImg(false);
    }
  });
  return (
    <section className="about" role="main">
      <div className="about__image-box">
        <img
          src={scaleImg ? imgDesktop : imgMobile}
          alt="img"
          className="about__image"
        />
      </div>
      <div className="about__text">
        <h2 className="about__h2">the leader in interactive vr</h2>
        <p className="about__p">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best comapnies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to thier brand
        </p>
      </div>
    </section>
  );
}

export default About;
