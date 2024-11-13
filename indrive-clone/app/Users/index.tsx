import { View, Text,TouchableOpacity ,  ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Users = () => {
  const router = useRouter();

  const toDriver = () => {
    router.push('/RegisterDriver')
  }
  const toPassenger = () => {
    router.push('/Register')
  }
  return (
    <ScrollView className="bg-[#c1f11d]">
  
      <SafeAreaProvider >
        <SafeAreaView>

          {/* Header */}
          <View className="p-5">
            <Text className="text-2xl font-bold text-black text-center">
            😊 Greetings and Welcome 😊
            </Text>
          </View>
          <TouchableOpacity onPress={toDriver} className="bg-[#009325a2] my-3 justify-center items-center mx- p-4 border rounded-3xl shadow-lg border-blue-600">
          {/* Register as a Driver */}
                <Text className="text-2xl text-white font-bold">
                Register For Driver
                </Text>
            </TouchableOpacity>
            
          {/* Register as a Passenger */}
          <TouchableOpacity onPress={toPassenger} className="bg-[#009325a2] my-3 justify-center items-center mx- p-4 border rounded-3xl shadow-lg border-blue-600">
                <Text className="text-2xl text-white font-bold">
                Register For Passenger                  
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
};

export default Users;
