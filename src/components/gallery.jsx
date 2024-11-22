import React, { useState, useEffect } from "react";
import { Image } from "./image";

export const Gallery = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.data.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + props.data.length) % props.data.length
    );
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("modal")) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>
              Some of our works.
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              {props.data
                  ? props.data.map((d, i) => (
                      <div
                          key={`${d.title}-${i}`}
                          className="col-sm-6 col-md-4 col-lg-4"
                          onClick={() => openModal(i)}
                      >
                        <div className="image-container">
                          <Image
                              title={d.title}
                              smallImage={d.smallImage}
                              className="image-size"  // Apply image-size class here
                          />
                        </div>
                      </div>
                  ))
                  : "Loading..."}
            </div>
          </div>
        </div>
        {isOpen && (
            <div className="modal">
              <button className="close" onClick={closeModal}>
                &times;
              </button>
              <button className="prev" onClick={showPrevImage}>
                &#10094;
              </button>
              <img
                  src={props.data[currentImageIndex].largeImage}
                  alt={props.data[currentImageIndex].title}
                  className="modal-content"
              />
              <button className="next" onClick={showNextImage}>
                &#10095;
              </button>
            </div>
        )}
      </div>
  );
};
