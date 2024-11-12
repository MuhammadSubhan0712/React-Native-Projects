import React, { useState } from "react";
import { TextInput, Text, TouchableOpacity, Image, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

let Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const auth = getAuth();

const ToAdmin = () => {
  router.push('../Admin')
}
const ToBooking = () => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("User =>",user);
    router.push('../Booking')
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log("Error ==>",errorMessage);
  });
}
  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={["#c1f11d", "#00db24"]}
        className="flex-1 items-center justify-center">
        <SafeAreaView className="w-11/12 bg-white p-5 rounded-2xl shadow-lg shadow-black border border-gray-300">
          {/* Logo for the Login Screen */}
          <View className="flex items-center mt-2 mb-5">
            <Image
              className="h-24 w-24 border-4 border-gray-300 rounded-full shadow-md shadow-gray-500 mb-4"
              source={{
                uri: "https://play-lh.googleusercontent.com/CeO35pm-07SaLuthR7VVXwAl4mBA5thYagq2eB-VRflSEuW4eIArPvoM6PVw-nmnzw=w240-h480-rw",
              }}
            />
          </View>

          <Text className="text-center py-3 text-2xl font-bold text-green-700 mb-6 shadow-md shadow-green-400">
            Login
          </Text>

          {/* Email Input */}
          <TextInput
            className="h-12 px-4 rounded-lg bg-gray-100 mb-4 shadow-md shadow-gray-500 text-base text-gray-800"
            onChangeText={setEmail}
            value={email}
            placeholder="Enter your Email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
          />

          {/* Password Input */}

          <TextInput
            className="h-12 px-4 rounded-lg bg-gray-100 mb-4 shadow-md shadow-gray-500 text-base text-gray-800"
            onChangeText={setPassword}
            value={password}
            placeholder="************************"
            placeholderTextColor="#aaa"
            secureTextEntry
          />

          {/* Login Button */}

          <TouchableOpacity onPress={ToBooking} className="bg-green-600 mt-4 py-2 rounded-lg shadow-lg shadow-green-900 active:bg-green-700">
            <Text className="text-lg font-semibold text-white text-center">
              Log In
            </Text>
          </TouchableOpacity>

          <Link href={"/Register"} className="mt-4 py-3 hover:text-cyan-300">
            <Text className="text-lg font-bold text-cyan-700 text-center">
              Don't have an account
            </Text>
          </Link>
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
};

export default Login;
