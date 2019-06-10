
import React, { Component } from 'react';
import ActiveThumbnailWindow from './ActiveThumnailWindow';
import ThumbnailGrid from './ThumbnailGrid';

import bridge from '../assets/pictures/bridge.jpeg';
import lake from '../assets/pictures/lake.jpeg';
import lion from '../assets/pictures/lion.jpeg';
import peach from '../assets/pictures/peach.jpeg';
import waterfall from '../assets/pictures/waterfall.jpeg';

const thumbnails = [
  {
    imgUrl: bridge,
    title: "bridge",
    bodyText: "Boofron fo shizzle mah nizzle fo rizzle, mah home g-dizzle dolor sit amizzle, consectetuer nizzle bizzle. Nullizzle sapien velizzle, dope shizzlin dizzle, hizzle check out this, ass vizzle, arcu. Pellentesque egizzle tortizzle. Sizzle fo."
  },
  {
    imgUrl: lake,
    title: "lake",
    bodyText: "Boofron fo shizzle mah nizzle fo rizzle, mah home g-dizzle dolor sit amizzle, consectetuer nizzle bizzle. Nullizzle sapien velizzle, dope shizzlin dizzle, hizzle check out this, ass vizzle, arcu. Pellentesque egizzle tortizzle. Sizzle fo."

  },
  {
    imgUrl: lion,
    title: "lion",
    bodyText: "Boofron fo shizzle mah nizzle fo rizzle, mah home g-dizzle dolor sit amizzle, consectetuer nizzle bizzle. Nullizzle sapien velizzle, dope shizzlin dizzle, hizzle check out this, ass vizzle, arcu. Pellentesque egizzle tortizzle. Sizzle fo."

  },
  {
    imgUrl: peach,
    title: "peach",
    bodyText: "Boofron fo shizzle mah nizzle fo rizzle, mah home g-dizzle dolor sit amizzle, consectetuer nizzle bizzle. Nullizzle sapien velizzle, dope shizzlin dizzle, hizzle check out this, ass vizzle, arcu. Pellentesque egizzle tortizzle. Sizzle fo."

  },
  {
    imgUrl: waterfall,
    title: "waterfall",
    bodyText: "Boofron fo shizzle mah nizzle fo rizzle, mah home g-dizzle dolor sit amizzle, consectetuer nizzle bizzle. Nullizzle sapien velizzle, dope shizzlin dizzle, hizzle check out this, ass vizzle, arcu. Pellentesque egizzle tortizzle. Sizzle fo."

  },
]

console.log(thumbnails);

export default class ThumbnailGallery extends Component {
    state = {
      thumbnails,
      activeIndex: 0
    }

renderThumbnails = () => {
  const { thumbnails, activeIndex } = this.state
  if(thumbnails.length) {
    return (
      <>
      <ActiveThumbnailWindow
        activeThumbnail={thumbnails[activeIndex]}
      />
      <ThumbnailGrid
      thumbnails={thumbnails}
      handleClick={this.handleClick}
      />
      </>
    )
  }
  return null;
}

renderTextContent = () => {
  const { thumbnails, activeIndex } = this.state

  if(thumbnails.length) {
    return (
      <>
      <h1> { thumbnails [activeIndex].title } </h1>
      <p>
        { thumbnails [activeIndex].bodyText }
      </p>
      </>
    )
  }
}

handleClick = (e) => {
  const newActiveIndex = e.target.getAttribute('data-index')
  this.setState({ activeIndex: newActiveIndex })
}

  render() {
    const { thumbnails } = this.state;

    return (
      <div style={thumbnailGalleryStyles}>
      {/*Left Side*/}
      <div style={{ flex: 1 }}>
      { this.renderThumbnails()}

      </div>

      {/*Right Side*/}
      <div style={{ flex: 1, padding: '40px' }}>
      { this.renderTextContent() }
      </div>

      </div>
    );
  }
}

const thumbnailGalleryStyles = {
  //background: '#ddd',
  height: '500px',
  width: '100%',
  display: 'flex'
}
