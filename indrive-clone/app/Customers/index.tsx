import { View, Text, FlatList } from 'react-native';
import React from 'react';

const CustomerInfo = () => {
  // Mock data for registered customers
  const customers = [
    { id: '1', name: 'M Jawad', location: 'Millat Garden' },
    { id: '2', name: 'Haseeb ur Rehman', location: 'Sirjani Town' },
    { id: '3', name: 'Ashar Ullah', location: 'Gulshan -e- Iqbal' },
    { id: '4', name: 'M Farhan', location: 'Jinnah Square' },
  ];

  return (
    <View className="flex-1 bg-[#219d52] p-4">
      <Text className="text-2xl font-bold text-white mb-4 text-center">
        Registered Customers
      </Text>
      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-cyan-50 rounded-lg p-4 mb-3 shadow-sm shadow-blue-500">
            <Text className="text-lg font-semibold text-green-700">{item.name}</Text>
            <Text className="font-semibold text-cyan-600">{item.location}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CustomerInfo;
