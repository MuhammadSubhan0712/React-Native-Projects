import { View, Text } from 'react-native'
import React from 'react'
import Login from './Login'
import AdminPanel from './Admin'
import Users from './Users'
import RegisterDriver from './RegisterDriver'

const Home = () => {
  return (
    
<RegisterDriver/>
    // <Users/>
    // <View>
    // <Login/>
    // </View>
    // // <AdminPanel/>


  )
}

export default Home








// import { useState, useEffect } from 'react';
// import { Platform, Text, View, StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';//Is line mein hum expo-location se location-related functions ko import kar rahe hain, jo location permissions aur current location lene mein madad karte hain.

// export default function App() {
//   const [location, setLocation] = useState<null | any>(null);
//   const [errorMsg, setErrorMsg] = useState<null | string>(null);

//   useEffect(() => {
//     (async () => {

//       let { status } = await Location.requestForegroundPermissionsAsync();//Yahan hum location permission ke liye request kar rahe hain aur response mein status le rahe hain.
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({}); //Yeh line current location ko retrieve kar rahi hai.
//       setLocation(location);
//       console.log(location);

//     })();
//   }, []);


//   let text = 'Waiting..';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);//Agar location mili, to text ko location data ko string mein convert karke assign kiya ja raha hai.
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.paragraph}>{text}</Text>
//       {location && <MapView style={styles.map} initialRegion={{
//         latitude: location.coords.latitude,
//         // Yahan hum initialRegion define kar rahe hain jo map ke initial latitude aur longitude set karta hai.
//         longitude: location.coords.longitude,
//         latitudeDelta: 0.0001,
//         // Yeh map zoom level ko set kar raha hai.
//         longitudeDelta: 0.0001,
//       }}>
//         <Marker coordinate={{
//           latitude: location.coords.latitude,
//           // Yahan hum Marker component ko render kar rahe hain, jo current location par point karega.
//           longitude: location.coords.longitude,
//         }} />

//       </MapView>}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
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
//   map: {
//     width: '100%',
//     height: '80%'
//   }
// });