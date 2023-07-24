import React from "react";
import Offer from "../Components/Offer.js";
function Offers({ offer }) {
  return (
    <div className="offersSection">
      {offer.map((data, index) => {
        return (
          <Offer
            key={data.image}
            index={index}
            src={data.image}
            link={data.url}
          />
        );
      })}
    </div>
  );
}

export default Offers;
