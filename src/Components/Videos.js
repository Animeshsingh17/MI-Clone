import React from "react";
import VideoCard from "./VideoCard.js";
import "../styles/Videos.css";
const Videos = ({ videos }) => {
  return (
    <div className="videos">
      {videos.map((data, index) => {
        return (
          <VideoCard
            index={index}
            key={data.image}
            image={data.image}
            name={data.name}
          />
        );
      })}
    </div>
  );
};

export default Videos;
