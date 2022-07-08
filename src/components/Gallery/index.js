import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery({  }) {

  return (
    <section>
      <PhotoList category={'gallery'} />
    </section>
  );
}

export default Gallery;