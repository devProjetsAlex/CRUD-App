import React, { useState } from 'react';
import ReactMapGl, {Marker} from 'react-map-gl';
import * as userData from '../../places/pages/UserPlaces'

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
      mapStyle="mapbox://styles/devprojetsalex/ck6zdo8vw0fjd1ili5b1pj0pj"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={viewport => {
        setViewport(viewport)
      }}
      >
        {userData.DUMMY_PLACES.map((userLocations) => (
          <Marker
          key={userLocations.id}
          latitude={userLocations.location.lat}
          longitude={userLocations.location.lng}
          >
            <div>&#10060; </div>
          </Marker>
        ))}
    </ReactMapGl>  
    </div>
  );
}
