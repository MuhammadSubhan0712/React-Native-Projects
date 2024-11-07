import { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function RideBooking() {
  const [location, setLocation] = useState<null | any>(null);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const [region, setRegion] = useState<any>(null);
  const [search , setSearch] = useState('');
  const [places , setPlaces]  = useState<null | []>(null);
  const [singlePlace , setSinglePlace] = useState<any>(null);
  const [direction , setDirection] = useState<boolean>(false)
  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({}); 
      setLocation(location);
      setRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta : 0.001,
      longitudeDelta: 0.001,
      })

      console.log(location);
    })();
  }, []);


  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


//    To Search specific place :
const serachPlace = () => {
    const option = {
        method : 'GET',
        headers:{
            accept: 'application/json',
            Authorization: 'fsq3qbL9ORBTq2ZaS6TUHxpAQZNDJjTlkT2lBeAynwmhZ8I='
        }
    };

    fetch(`https://api.foursquare.com/v3/places/search?query=${search}&ll=${location.coords.latitude}%2C${location.coords.longitude}&radius=100000`,)
    .then(res => res.json())
    .then(res => {
        setPlaces(res.result)
    })
     .catch(err => console.error(err));
     console.log(search);
    }

    // For Single Place 
    const singleplace = (item:any) =>{
    setPlaces(null);
    setSinglePlace({
        latitude: item.geocodes.main.latitude,
        longitude: item.geocodes.main.longitude
    })
    setRegion({
        latitude:item.geocodes.main.latitude,
        longitude: item.geocodes.main.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    })
    }


  return (
    <View className='flex justify-center items-center p-5 bg-black'>
      <Text className='text-xl text-white text-center'>{text}</Text>
      {location && <MapView style={styles.map} initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0001,
        longitudeDelta: 0.0001,
      }}>
        <Marker coordinate={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }} />

      </MapView>}
    </View>
  );
}

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: 'lightblue'
//   },
//   paragraph: {
//     fontSize: 18,
//     textAlign: 'center',
//   },
  map: {
    width: '100%',
    height: '80%'
  }
});