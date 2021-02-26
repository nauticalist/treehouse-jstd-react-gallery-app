import React from "react";

const Photo = ({ title, url }) => {
  return <img src={url} alt={title} />;
};

export default Photo;
