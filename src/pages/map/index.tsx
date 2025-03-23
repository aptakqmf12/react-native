import {ScrollView, View, Dimensions, Text, StatusBar} from 'react-native';
import NaverMapView, {Marker, Path} from 'react-native-nmap';

export default function MapViewScreen() {
  const start = {
    latitude: 24,
    longitude: 100,
  };

  const end = {
    latitude: 25,
    longitude: 120,
  };

  return (
    <View>
      <View
        style={{
          width: Dimensions.get('window').width - 30,
          height: 200,
          marginTop: 10,
        }}>
        <NaverMapView
          style={{width: '100%', height: '100%'}}
          zoomControl={false}
          center={{
            zoom: 10,
            tilt: 50,
            latitude: (start.latitude + end.latitude) / 2,
            longitude: (start.longitude + end.longitude) / 2,
          }}>
          <Marker
            coordinate={{
              latitude: start.latitude,
              longitude: start.longitude,
            }}
            pinColor="blue"
          />
          <Path
            coordinates={[
              {
                latitude: start.latitude,
                longitude: start.longitude,
              },
              {latitude: end.latitude, longitude: end.longitude},
            ]}
          />
          <Marker
            coordinate={{latitude: end.latitude, longitude: end.longitude}}
          />
        </NaverMapView>
      </View>
    </View>
  );
}
