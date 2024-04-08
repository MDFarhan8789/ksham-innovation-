// components/LogoSlider.js
import React, { useEffect, useState } from "react";
import "./LogoSlider.css";

function LogoSlider() {
  // const [imageUrls, setImageUrls] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/logo-slider")
  //     .then((response) => response.json())
  //     .then((data) => setImageUrls(data.image_urls))
  //     .catch((error) =>
  //       console.error("Error fetching logo slider images:", error)
  //     );
  // }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5); // Assuming 5 images
    }, 500); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);
  return (
      <div className="content-container-5">
      <h2>Our Supporters</h2>
      <div className="our-supporter-logos">
      {Array.from(Array(5).keys()).map((index) => (
        <img
          key={index}
          src={`image-${index + 1}.png`} // Replace with actual image URLs
          alt={`Supporter ${index + 1}`} // Generate alt text dynamically
          className={index === currentIndex ? 'active' : ''}
        />
      ))}
    </div>
    </div>
    // <div className="content-container-5">
    //   <h2>Our Supporters</h2>
    //   <div className="images">
    //     {imageUrls.map((imageUrl, index) => (
    //       <img
    //         key={index}
    //         src={imageUrl}
    //         alt={`Supporter ${index + 1}`}
    //         className={index === currentIndex ? "active" : ""}
    //       />
    //     ))}
    //   </div>
    // </div>
  );
}

export default LogoSlider;
