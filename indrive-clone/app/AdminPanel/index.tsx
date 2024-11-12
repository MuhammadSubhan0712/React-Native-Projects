import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { Link, useRouter } from 'expo-router';

const AdminPanel = () => {
  const router = useRouter();
  const DATA = [
    { id: '1', title: 'Driver Management', imageUrl: 'https://img.freepik.com/premium-vector/driver-vector-logo-design_410429-4782.jpg?semt=ais_hybrid'},
    { id: '2', title: 'Customer Profiles', imageUrl: 'https://cdn0.iconfinder.com/data/icons/design-and-usability/64/client_service_icon_staff_customer_support_user_profile-512.png' },
    { id: '3', title: 'Trip Management', imageUrl: 'https://thumbs.dreamstime.com/b/car-logo-illustration-art-background-46721370.jpg' },
    { id: '4', title: 'Reports & Analytics', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1478/1478892.png' },
  ];

//   interface define types:
  interface items {
    title : string , 
    id : number,
    imageUrl: string,
  }

  const Item = ({ title, imageUrl }:items)  => (
    <View className="bg-[#003fda] my-3 items-center mx-6 p-4 border rounded-3xl shadow-lg border-purple-900">
      <Image source={{ uri: imageUrl }} className="h-20 w-20 mb-2 rounded-full" />
      <Text className="text-xl text-white font-bold">{title}</Text>
    </View>
  );

  return (
    <ScrollView>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-zinc-50">
          {/* Header */}
          <View className="bg-[#c1f11d] p-6">
            <Text className="text-3xl font-bold text-black text-center">Dashboard</Text>
          </View>

          {/* Quick Stats */}
          <View className="flex-row justify-around mt-4 mb-6">
            <View className="bg-blue-900 p-4 rounded-lg shadow-lg w-40">
              <Text className="text-white text-lg">Total Drivers</Text>
              <Text className="text-white text-2xl font-bold">20</Text>
            </View>
            <View className="bg-green-800 p-4 rounded-lg shadow-lg w-40">
              <Text className="text-white text-lg">Total Customers</Text>
              <Text className="text-white text-2xl font-bold">50</Text>
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
