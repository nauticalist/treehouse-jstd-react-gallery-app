import React from "react";
import Photo from "./Photo";
import NoPhotos from "./NoPhotos";
import Loading from "./Loading";

const PhotoContainer = ({ query, loading, photos }) => {
    let view;

    if (loading) {
       view =  <Loading />
    } else {
        if (photos.length) {
            view = photos.map((photo) => (
                <li key={photo.id}>
                    <Photo title={photo.title} url={photo.url} />
                </li>
            ))
        } else {
            view = <NoPhotos />
        }
    }

  return (
    <div className="photo-container">
      <h2>{query}</h2>
      <ul>
          {view}
      </ul>
    </div>
  );
};

export default PhotoContainer;
