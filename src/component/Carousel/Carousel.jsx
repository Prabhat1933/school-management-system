import React, { useState, useEffect } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const images = [img1, img2, img3];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // ⏱ Slide every 3 seconds

    return () => clearInterval(interval); // Clear on unmount
  }, []);

  return (
    <div style={styles.container}>
      <img src={images[currentIndex]} alt="slide" style={styles.image} />

      <div style={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              ...styles.dot,
              backgroundColor: currentIndex === index ? "#000" : "#bbb",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "600px",
    margin: "auto",
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "auto",
    transition: "opacity 0.5s ease-in-out",
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  dot: {
    height: "10px",
    width: "10px",
    margin: "0 5px",
    borderRadius: "50%",
    display: "inline-block",
    cursor: "pointer",
  },
};
