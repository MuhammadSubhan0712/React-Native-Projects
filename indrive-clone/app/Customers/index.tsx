import { View, Text, FlatList } from 'react-native';
import React from 'react';

const CustomerInfo = () => {
  // Mock data for registered customers
  const customers = [
    { id: '1', name: 'John Doe', location: 'Downtown' },
    { id: '2', name: 'Jane Smith', location: 'Uptown' },
    { id: '3', name: 'David Lee', location: 'City Center' },
    { id: '4', name: 'Alice Johnson', location: 'Westside' },
  ];

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Registered Customers
      </Text>
      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-white rounded-lg p-4 mb-3 shadow-sm shadow-gray-500">
            <Text className="text-lg font-semibold text-gray-900">{item.name}</Text>
            <Text className="text-gray-600">{item.location}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CustomerInfo;
