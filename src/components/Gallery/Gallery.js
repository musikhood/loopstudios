import React, { useState, useEffect } from "react";

function Gallery({ imageMobile, imageDesktop, about }) {
  const [scaleImg, setScaleImg] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 799) {
      setScaleImg(true);
    } else {
      setScaleImg(false);
    }
  }, []);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 799) {
      setScaleImg(true);
    } else {
      setScaleImg(false);
    }
  });
  return (
    <div className="creations__image-box">
      <img
        src={scaleImg ? imageDesktop : imageMobile}
        alt="product"
        className="creations__image"
      />
      <div className="creations__image-title">{about}</div>
    </div>
  );
}

export default Gallery;
