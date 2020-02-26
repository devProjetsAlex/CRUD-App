import React, { useState } from 'react';
import ReactMapGl, {Marker} from 'react-map-gl';
import * as userData from '../../places/pages/UserPlaces'

const Map = () => {
 
  const [viewport, setViewport] = useState({
    latitude:48.7484405,
    longitude: -73.9878584,
    width: "39.3vw",
    height: "40vh",
    zoom: 3
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
          &#10060;
          </Marker>
        ))}
    </ReactMapGl>  
    </div>
  );
}

export default Map