import { View, Text,TouchableOpacity ,  ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Users = () => {
  return (
    <ScrollView className="bg-[#c1f11d]">
      <SafeAreaProvider >
        <SafeAreaView>
          {/* Header */}
          <View className="bg-[#c1f11d] p-6">
            <Text className="text-2xl font-bold text-black text-center">
            😊 Greetings and Welcome 😊
            </Text>
          </View>
          <TouchableOpacity className="bg-[#009325a2] my-3 justify-center items-center mx- p-4 border rounded-3xl shadow-lg border-purple-900">
          {/* Register as a Driver */}
            <Link href={"../RegisterDriver"}>
                <Text className="text-2xl text-white font-bold">
                Register For Driver
                </Text>
            </Link>
            </TouchableOpacity>
            
          {/* Register as a Passenger */}
          <TouchableOpacity className="bg-[#009325a2] my-3 justify-center items-center mx- p-4 border rounded-3xl shadow-lg border-purple-900">
            <Link href={"../Register"}>
                <Text className="text-2xl text-white font-bold">
                Register For Passenger                  
                </Text>
            </Link>
            </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
};

export default Users;
