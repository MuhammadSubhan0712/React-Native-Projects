import { View, Text, ScrollView , FlatList } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import React from 'react'


const AdminPanel = () => {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          Driver: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          Customer: 'Second Item',
        },
      ];

  return (
    <ScrollView>
    <SafeAreaProvider>
    <SafeAreaView className='flex mt-2'>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
  </ScrollView>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
  )
}

export default AdminPanel