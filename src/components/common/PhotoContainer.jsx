import React from "react";
import Photo from "./Photo";

const PhotoContainer = ({ query, photos }) => {
  return (
    <div className="photo-container">
      <h2>{query}</h2>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Photo title={photo.title} url={photo.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoContainer;
