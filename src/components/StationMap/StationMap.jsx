import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import styles from "./StationMap.module.css";
import { useState } from "react";

export default function StationMap() {
  const [position, setPosition] = useState({ lat: -36.89, lng: 174.7645 });

  // Dummy data for Sydney locations from Google Maps for React documentation
  const locations = [
    { key: "operaHouse", location: { lat: -33.8567844, lng: 151.213108 } },
    { key: "tarongaZoo", location: { lat: -33.8472767, lng: 151.2188164 } },
    { key: "manlyBeach", location: { lat: -33.8209738, lng: 151.2563253 } },
    { key: "hyderPark", location: { lat: -33.8690081, lng: 151.2052393 } },
    { key: "theRocks", location: { lat: -33.8587568, lng: 151.2058246 } },
    { key: "circularQuay", location: { lat: -33.858761, lng: 151.2055688 } },
    { key: "harbourBridge", location: { lat: -33.852228, lng: 151.2038374 } },
    { key: "kingsCross", location: { lat: -33.8737375, lng: 151.222569 } },
    { key: "botanicGardens", location: { lat: -33.864167, lng: 151.216387 } },
    { key: "museumOfSydney", location: { lat: -33.8636005, lng: 151.2092542 } },
    { key: "maritimeMuseum", location: { lat: -33.869395, lng: 151.198648 } },
    { key: "aquarium", location: { lat: -33.869627, lng: 151.202146 } },
    { key: "darlingHarbour", location: { lat: -33.87488, lng: 151.1987113 } },
    { key: "barangaroo", location: { lat: -33.8605523, lng: 151.1972205 } },
  ];

  const apiKey = import.meta.env.VITE_MAP_API_KEY;
  const mapID = import.meta.env.VITE_MAP_ID;

  return (
    <APIProvider
      apiKey={apiKey}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <Map
        defaultCenter={position}
        defaultZoom={12}
        className={styles.provider}
        mapId={mapID}
        disableDefaultUI={true}
        zoomControl={true}
      >
        {locations.map((poi) => (
          <AdvancedMarker key={poi.key} position={poi.location}>
            {/* This pin could potentially be a png so we have our own style*/}
            <Pin
              background={"#FBBC04"}
              glyphColor={"#000"}
              borderColor={"#000"}
            />
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  );
}