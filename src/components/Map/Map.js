import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import * as s from "./Map.module.css";

// const containerStyle = {
//   width: "100%",
//   height: "432px",
// };

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  fullscreenControl: false,
};

export const Map = ({ center }) => {
  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <GoogleMap
      mapContainerClassName={s.map}
      // mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={defaultOptions}
    >
      <>
        <Marker position={center} title="Нейрончики" />
      </>
    </GoogleMap>
  );
};
