import { View, Text } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";

const Map = () => {
  const origin = useSelector(selectOrigin);
  return (
    <MapView
      style={{
        flex: 1,
      }}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      // initialRegion={{
      //   latitude: origin.latitude.lat,
      //   longitude: origin.location.lng,
      //   latitudeDelta: 0.0922,
      //   longitudeDelta: 0.0421,
      // }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description="Origin.description"
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default Map;
