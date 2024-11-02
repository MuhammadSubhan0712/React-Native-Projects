// import { View, Text  } from 'react-native'
// import React, { useEffect, useState } from 'react'

// import MapView from 'react-native-maps';
// import * as Location from 'expo-location';

// const Home = () => {
//     const [location , setLocation] = useState<null | any>(null)
//     const [errorMsg , setErrorMsg] = useState<null | string>(null)

//     useEffect(() => {
//         (async () => {
//             let {status} = await Location.requestForegroundPermissionsAsync();
//             if(status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 return;
//             }
//             let location = await Location.getCurrentPositionAsync({});
//             setLocation(location);
//             console.log(location);
//         });
//     },[]);

//     let text = 'Waiting..'
//     if(errorMsg) {
//         text = errorMsg;
//     }
//     else if (location) {
//         text = JSON.stringify(location);
//     }
//   return (
//     <View className='flex-1 items-center justify-center p-2'>
//       <Text className='text-xl text-center'>{text}</Text>
//       {location && <MapView className='w-full h-full' initialRegion={{
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//         latitudeDelta: 0.0001,
//         longitudeDelta: 0.0001,
//       }}>
    
//      </MapView>}
//     </View>
//   )
// }

// export default Home



import { View, Text } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <Text className='text-neutral-500 bg-red-100 '>Home</Text>
    </View>
  )
}

export default Home