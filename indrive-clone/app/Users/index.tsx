import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Users = () => {
  return (
    <ScrollView>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-zinc-50">
          {/* Header */}
          <View className="bg-[#c1f11d] p-6">
            <Text className="text-3xl font-bold text-black text-center">
              Welcome
            </Text>
          </View>
          <View className="bg-[#003fda] my-3 justify-center items-center mx- p-4 border rounded-3xl shadow-lg border-purple-900">
            <Link href={"../RegisterDriver"}>
              <Text className="text-xl text-white font-bold">For Driver</Text>
            </Link>

            <Link href={"../Register"}>
              <Text className="text-xl text-white font-bold">For Customer</Text>
            </Link>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
};

export default Users;
