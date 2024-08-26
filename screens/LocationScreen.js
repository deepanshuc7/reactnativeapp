import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function LocationScreen() {
  const initialRegion = {
    latitude: 51.0259,  // Set your initial latitude
    longitude: 4.4776, // Set your initial longitude
    latitudeDelta: 0.02, // Controls zoom level; smaller values zoom in
    longitudeDelta: 0.02, // Controls zoom level; smaller values zoom in
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={{ latitude: 51.024855, longitude: 4.484681 }}
          title="Buffy"
          description="Buffy is home"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
