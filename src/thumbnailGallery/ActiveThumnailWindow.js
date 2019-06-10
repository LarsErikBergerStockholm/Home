import React from 'react'

const ActiveThumbnailWindow = ( { activeThumbnail } ) => {
  console.log(activeThumbnail);
  return(
    <div style={styles}>
     <img src={activeThumbnail.imgUrl} alt="Bridge"
      style={{
        width: "100%",
        height: "100%"
      }}
     />
    </div>
  )
}

const styles = {
  height: '65%',
  width: '100%',
  background: '#333',
  posistion: 'relative'
}

export default ActiveThumbnailWindow;
