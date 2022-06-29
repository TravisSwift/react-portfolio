import React, { useState } from 'react';

const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Project Voyager',
      category: 'portfolio',
      description: 'Space Enthuisast website using HTML, CSS, Javascript, and Boostrap ',
    },
    {
      name: 'AD&D Charcter Generator',
      category: 'portfolio',
      description: 'A character generator for Advanced Dungeons and Dragons Fifth Edition',
    },
    {
      name: 'Awesome Note Taker App',
      category: 'portfolio',
      description: 'A simple note taking app',
    },
    {
      name: 'Portfolio Page',
      category: 'portfolio',
      description: 'A portfiolio website using Tailwind CSS',
    },
    
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;