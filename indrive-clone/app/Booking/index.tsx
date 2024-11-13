import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import { FontAwesome } from "@expo/vector-icons";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

interface SinglePlace {
    latitude: number;
    longitude: number
  }
  
  interface AllPlaces {
    fsq_id: string;
    name: string
  }

 const  RideBooking = (): JSX.Element => {
  const [location, setLocation] = useState<null | any>(null);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const [region, setRegion] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [places, setPlaces] = useState<null | AllPlaces[]>(null);
  const [singlePlace, setSinglePlace] = useState<null | SinglePlace>(null);
  const [direction, setDirection] = useState<boolean>(false);
  // const Tab = createBottomTabNavigator();
// 


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });

      console.log(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  //    To Search specific place :
  const serachPlace = () => {
    const option = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "fsq3qbL9ORBTq2ZaS6TUHxpAQZNDJjTlkT2lBeAynwmhZ8I=",
      },
    };

    fetch(
      `https://api.foursquare.com/v3/places/search?query=${search}&ll=${location.coords.latitude}%2C${location.coords.longitude}&radius=100000`,
      option
    )
      .then((res) => res.json())
      .then((res) => {
        setPlaces(res.result);
      })
      .catch((err) => console.error(err));
    console.log(search);
  };

  // For Single Place
  const singlePlaces = (item: any) => {
    setPlaces(null);
    setSinglePlace({
      latitude: item.geocodes.main.latitude,
      longitude: item.geocodes.main.longitude
    })
    setRegion({
      latitude: item.geocodes.main.latitude,
      longitude: item.geocodes.main.longitude,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    })
  }
const findDriver = () => {
  Alert.alert("This Feature is coming soon")
}



  return (
    <ScrollView>

    <View className="flex justify-center items-center p-5 bg-zinc-200">
      <TextInput
        className="h-40 w-1/5 m-6 p-5 border-spacing-x-1"
        onChangeText={setSearch}
        value={search}
        placeholder="Search Place"
      />

      <TouchableOpacity
        onPress={serachPlace}
        className="items-center place-items-start bg-[#DDDDDD] p-5">
        <Text>Search Place</Text>
      </TouchableOpacity>

      {places && (
        <FlatList
          data={places}
          renderItem={({ item }: { item: { name: string } }) => {
            return (
              <View className="bg-gray-400 border-x-black border-spacing-x-1 p-2 w-5/6">
                 <Text onPress={() => singlePlaces(item)}>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item: { fsq_id: string }) => item.fsq_id}
        />
      )}

      {location && (
        <MapView
          region={region}
          onRegionChangeComplete={setRegion}
          style={styles.map}>
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />

          {singlePlace && (
            <Marker
              coordinate={{
                latitude: singlePlace.latitude,
                longitude: singlePlace.longitude,
              }}
            />
          )}

          {singlePlace && direction && (
            <Polyline
              coordinates={[
                {
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                },
                {
                  latitude: singlePlace.latitude,
                  longitude: singlePlace.longitude,
                },
              ]}
              strokeWidth={5}
              strokeColor="#000000"
            />
          )}
          <TouchableOpacity
            onPress={() => setDirection(!direction)}
            className="items-center place-items-start bg-[#DDDDDD] p-5">
            <Text>Direction</Text>
          </TouchableOpacity>
        </MapView>
        
      )}

    {/* ---------------------------------------------------------------- */}
        <View className="flex-row justify-around p-3 bg-gray-100">
        <TouchableOpacity>
          <FontAwesome name="car" size={24} color="red" />
          <Text className="text-center">Standard</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="taxi" size={24} color="yellow" />
          <Text className="text-center">Normal</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="motorcycle" size={24} color="blue" />
          <Text className="text-center">Moto</Text>
        </TouchableOpacity>
      </View>

    <View>
      <TouchableOpacity
        onPress={findDriver}
        className="bg-[#c1f11d] p-4 rounded-full m-4">
        <Text className="text-center text-black text-lg font-bold">Find Driver</Text>
      </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "50%",
  },
});
export default RideBooking;