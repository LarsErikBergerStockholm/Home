import React from 'react';
import ImageGallery from 'react-image-gallery';

import bridge from '../assets/pictures/bridge.jpeg';
import lake from '../assets/pictures/lake.jpeg';
import lion from '../assets/pictures/lion.jpeg';
import peach from '../assets/pictures/peach.jpeg';
import waterfall from '../assets/pictures/waterfall.jpeg';


export default class MyComponent extends React.Component {

  render() {

    const images = [
      {
        original: bridge,
        thumbnail: bridge,
      },
      {
        original: lake,
        thumbnail: lake
      },
      {
        original: lion,
        thumbnail: lion
      },
      {
        original: peach,
        thumbnail: peach
      },
      {
        original: waterfall,
        thumbnail: waterfall
      },
    ]


    return (
      <ImageGallery items={images} />
    );
  }

}
