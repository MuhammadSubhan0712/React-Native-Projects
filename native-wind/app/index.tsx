import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
// import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
  return (
    <ScrollView>
    <View className="bg-gray-900">
      <View className=" mt-9 justify-center items-center">
        <Text className="p-2 text-center bg-gray-900 text-2xl text-white border rounded-lg border-red-500 shadow-lg shadow-red-400">
          Let's Introduce TailwindCSS 0Oops! 😬 NativewindCSS 😎
        </Text>
      </View>

      <View className="mt-6 justify-center items-center">
        <Text className="p-3 text-center bg-gray-800 text-xl text-white border-2 rounded-lg border-blue-500 shadow-xl shadow-blue-300">
          Crafting Amazing Experiences in Code 😎
        </Text>
      </View>

      <View className="mt-6 justify-center items-center">
        <Text className="p-3 text-center bg-gray-800 text-xl text-white border-2 rounded-lg border-pink-500 shadow-xl shadow-pink-300">
          Level Up the Styling Experience 🤠
        </Text>
      </View>

      <View className="mt-6 justify-center items-center">
        <Text className="p-3 text-center bg-gray-800 text-xl text-white border-2 rounded-lg border-green-500 shadow-xl shadow-green-300">
          With Effortless User Experience 👌
        </Text>
      </View>

      <View className="mt-6 justify-center items-center">
        <Text className="p-3 text-center bg-gray-800 text-xl text-white border-2 rounded-lg border-yellow-500 shadow-xl shadow-yellow-300">
          Innovation at Your Fingertips 🤙
        </Text>
      </View>

      <View className="mt-6 justify-center items-center">
        <Text className="p-3 text-center bg-gray-800 text-xl text-white border-2 rounded-lg border-purple-500 shadow-xl shadow-purple-300">
          Let's Revolutionize the Style 👽
        </Text>
      </View>

      <View className="mt-6 justify-center items-center">
        <Text className="p-3 text-center bg-gray-800 text-xl text-white border-2 rounded-lg border-red-500 shadow-xl shadow-red-300">
          Seamless Performance 🤓
        </Text>
      </View>

      <View className="mt-6 justify-center items-center">
        <Text className="p-3 text-center bg-gray-800 text-xl text-white border-2 rounded-lg border-cyan-300 shadow-xl shadow-cyan-100">
          Design with Purpose 👀
        </Text>
      </View>

     <View className="mt-9 mb-5 justify-center items-center">
     <Link href={'Maps'}>
      <TouchableOpacity className="text-xl bg-yellow-500 text-red-600 font-bold p-3 border-green-200 rounded-lg shadow-xl shadow-red-600">
        View Map
      </TouchableOpacity>
     </Link>
     </View>
    </View>
    </ScrollView>

  );
};

export default Home;

// const styles = StyleSheet.create({
//   gradient: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


