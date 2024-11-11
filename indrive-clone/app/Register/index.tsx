import React, { useState } from "react";
import {
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { launchImageLibrary } from "react-native-image-picker";
import { Link, useNavigation } from "expo-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [contactno, setContactno] = useState<number | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigation;
  const [imageUri, setImageUri] = useState<string | null>(null);




  const toLogin = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth , email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert(
          "Signed In",
          "Welcome You've successfully signed in.",
          [
            {
              text: "OK",
              onPress: () => console.log("OK Pressed"),
            },
          ]
        );
      console.log("User Registered Succesfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("Erorr ==> ",errorMessage);
      });  
    navigate("../Login");
  };

  const selectImage = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        quality: 1,
      },
      (response) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.errorMessage) {
          console.log("ImagePicker Error: ", response.errorMessage);
        } else if (response.assets && response.assets[0].uri) {
          setImageUri(response.assets[0].uri);
        }
      }
    );
  };

  return (
    <ScrollView>
      <SafeAreaProvider>
        <LinearGradient
          colors={["#c1f11d", "#00db24"]}
          className="flex-1 items-center justify-center">
          <SafeAreaView className="w-11/12 bg-white p-5 rounded-2xl shadow-lg shadow-black border border-gray-300">
            <View className="flex items-center mt-2 mb-5">
              <Image
                className="h-24 w-24 border-4 border-gray-300 rounded-full shadow-md shadow-gray-500 mb-4"
                source={{
                  uri: "https://play-lh.googleusercontent.com/CeO35pm-07SaLuthR7VVXwAl4mBA5thYagq2eB-VRflSEuW4eIArPvoM6PVw-nmnzw=w240-h480-rw",
                }}
              />
            </View>

            <Text className="text-center py-3 text-2xl font-bold text-green-700 mb-6 shadow-md shadow-green-400">
              Sign Up
            </Text>

            {/* Input Username */}
            <TextInput
              className="h-12 px-4 rounded-lg bg-gray-100 mb-4 shadow-md shadow-gray-500 text-base text-gray-800"
              onChangeText={setUsername}
              value={username}
              placeholder="Username"
              placeholderTextColor="#aaa"
            />
            {/* Input Contact no */}
            <TextInput
              className="h-12 px-4 rounded-lg bg-gray-100 mb-4 shadow-md shadow-gray-500 text-base text-gray-800"
              onChangeText={setContactno}
              value={contactno}
              placeholder="Contact No"
              placeholderTextColor="#aaa"
              keyboardType="number-pad"
            />

            {/* Input Email */}

            <TextInput
              className="h-12 px-4 rounded-lg bg-gray-100 mb-4 shadow-md shadow-gray-500 text-base text-gray-800"
              onChangeText={setEmail}
              value={email}
              placeholder="Enter your Email"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
            />

            {/* Input Password */}

            <TextInput
              className="h-12 px-4 rounded-lg bg-gray-100 mb-4 shadow-md shadow-gray-500 text-base text-gray-800"
              onChangeText={setPassword}
              value={password}
              placeholder="*****************"
              placeholderTextColor="#aaa"
              secureTextEntry
            />

            {/* Input User Image */}

            {imageUri ? (
              <Image
                className="mt-3 w-full h-full border-r-0"
                source={{ uri: imageUri }}
                style={{
                  marginTop: 10,
                  width: 100,
                  height: 100,
                  borderRadius: 0,
                }}
              />
            ) : (
              <TouchableOpacity onPress={selectImage}>
                <View
                  style={{
                    marginTop: 10,
                    padding: 10,
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    backgroundColor: "green",
                    // display:'flex',
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 16,
                    }}>
                    Upload Your Image
                  </Text>
                </View>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={() => toLogin}
              className="bg-green-500 mt-4 py-3 rounded-lg shadow-lg shadow-green-900 active:bg-green-700">
              <Text className="text-lg font-semibold text-white text-center">
                Sign Up
              </Text>
            </TouchableOpacity>

            <Link href={"/Login"} className="mt-4  py-3  hover:text-cyan-300">
              <Text className="text-lg font-bold text-cyan-700 text-center">
                Already have a account
              </Text>
            </Link>
          </SafeAreaView>
        </LinearGradient>
      </SafeAreaProvider>
    </ScrollView>
  );
};

export default Register;
