import React from "react";
import "../styles/Offers.css";
function Offer({ src, link, index }) {
  return (
    <a href={link}>
      <img alt={`${index} offer`} src={src} />
    </a>
  );
}

export default Offer;
