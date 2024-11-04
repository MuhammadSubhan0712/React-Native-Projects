import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { Link } from 'expo-router';

const AdminPanel = () => {
  const DATA = [
    { id: '1', title: 'Driver Management', imageUrl: 'https://via.placeholder.com/100' },
    { id: '2', title: 'Customer Profiles', imageUrl: 'https://via.placeholder.com/100' },
    { id: '3', title: 'Trip Management', imageUrl: 'https://via.placeholder.com/100' },
    { id: '4', title: 'Reports & Analytics', imageUrl: 'https://via.placeholder.com/100' },
  ];

  const Item = ({ title, imageUrl }) => (
    <View className="bg-purple-500 my-3 items-center mx-6 p-4 border rounded-3xl shadow-lg border-purple-900">
      <Image source={{ uri: imageUrl }} className="h-20 w-20 mb-2 rounded-full" />
      <Text className="text-xl text-white font-bold">{title}</Text>
    </View>
  );

  return (
    <ScrollView>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-gray-100">
          {/* Header */}
          <View className="bg-gradient-to-r from-green-400 to-blue-500 p-6">
            <Text className="text-3xl font-bold text-white text-center">Admin Dashboard</Text>
          </View>

          {/* Quick Stats */}
          <View className="flex-row justify-around mt-4 mb-6">
            <View className="bg-blue-500 p-4 rounded-lg shadow-lg w-40">
              <Text className="text-white text-lg">Total Drivers</Text>
              <Text className="text-white text-2xl font-bold">120</Text>
            </View>
            <View className="bg-green-500 p-4 rounded-lg shadow-lg w-40">
              <Text className="text-white text-lg">Total Customers</Text>
              <Text className="text-white text-2xl font-bold">350</Text>
            </View>
          </View>

          {/* Menu Items */}
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} imageUrl={item.imageUrl} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
          />

          {/* Footer */}
          <View className="bg-gray-200 p-4 mt-6 rounded-t-2xl shadow-md">
            <Text className="text-center text-gray-700 font-semibold">Powered by InDrive Admin © 2023</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
};

export default AdminPanel;
