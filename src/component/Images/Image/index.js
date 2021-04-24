import React from "react";
import "./style.css";
const Image = ({ item, index, setCurr, setModal }) => {
  return (
    <img
      className="image"
      src={item.urls.small}
      alt={item.alt_description}
      key={item.exif.id}
      onClick={() => {
        setCurr(index);
        setModal(true);
      }}
    />
  );
};

export default Image;
