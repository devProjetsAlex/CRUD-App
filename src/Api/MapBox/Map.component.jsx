import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';


export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 46.165742315,
    longitude: -71.227009767104,
    width: "40vw",
    height: "40vh",
    zoom: 10
  });

  return (
    <div>
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={viewport => {
        setViewport(viewport)
      }}
      >
        
    </ReactMapGl>  
    </div>
  );
}
