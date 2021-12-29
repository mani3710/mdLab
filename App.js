import React from 'react';
import { Text, View, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
const App = () => {
  const getLocation = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Md lab sem',
          message: 'mdlab App access to your location ',
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location")
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(position.coords);

          },
          (error) => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 200000,
            maximumAge: 120000,
            showLocationDialog: true,
            forceRequestLocation: true
          }
        );
      }
    } catch (err) {
      console.warn(err)
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => { getLocation() }}
      >Mani</Text>
    </View>
  );
}

export default App;