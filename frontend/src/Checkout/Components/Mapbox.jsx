import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserLocation } from "../../LandingPage/Redux/action";
import { debounce } from "lodash";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Mapbox = (props) => {
  const { userCoordinates, width, height } = props;
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  let currentUserLocation = useRef(
    debounce(
      (lnglat) => dispatch(getUserLocation(lnglat.lng, lnglat.lat)),
      1000
    )
  ).current;
  useEffect(() => {
    //   my access token pk.eyJ1IjoibWFuaXNoLWt1bWFyLWRldiIsImEiOiJja2gyOGw4b24wOWhwMnNtemVmeHA2djV0In0.IWI4BNamZ8XXAawc2fuk8w
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYnJpYW5iYW5jcm9mdCIsImEiOiJsVGVnMXFzIn0.7ldhVh3Ppsgv4lCYs65UdA";
    const initializeMap = ({ setMap, mapContainer }) => {
      let map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [userCoordinates.longitude, userCoordinates.latitude],
        zoom: 14,
      });

      let marker = new mapboxgl.Marker({ draggable: true })
        .setLngLat([userCoordinates.longitude, userCoordinates.latitude])
        .addTo(map);

      function onDragEnd() {
        let lnglat = marker.getLngLat();
        currentUserLocation(lnglat);
      }

      marker.on("dragend", onDragEnd);

      map.on("load", () => {
        setMap(map, marker);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  return (
    <div
      ref={(el) => (mapContainer.current = el)}
      style={{ width: width, height: height }}
    />
  );
};

export default Mapbox;
