import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/0.jpg";

function Gallery(props) {
  const currentCategory = {
    name: "",
    description:
      "Photos of projects in my portfolio",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
          <img
            src={photo}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div>
    </section>
  );
}
export default Gallery;