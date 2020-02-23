import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';


export default function Map() {
  const [viewport, setViewport] = useState({
    width: "40vw",
    height: "40vh",
    latitude: 46.80768228820832,
    longitude: -71.227009767104,
    zoom: 10
  });

  return(
    <div>
       <ReactMapGl
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/devprojetsalex/ck6zdo8vw0fjd1ili5b1pj0pj"
          onViewportChange={viewport => {
            setViewport(viewport)
          }}
      >
            MARKER HERE
        </ReactMapGl>

    </div>
  )
}