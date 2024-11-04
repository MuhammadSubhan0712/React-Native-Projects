import { View, Text, ScrollView , FlatList} from 'react-native'
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import React from 'react'
import { Link } from 'expo-router';


const AdminPanel = () => {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Driver',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Customer',
        },
      ];

      type ItemProps = {title: string};

      const Item = ({title}: ItemProps) => (
        <View className='bg-slate-600 my-3 items-center mx-6 p-3 border rounded-lg border-l-purple-950 '>
          <Text className='text-2xl text-zinc-50 '>{title}</Text>
        </View>
      );
  return (
    <ScrollView>
    <SafeAreaProvider>
    <SafeAreaView className='flex mt-2'>
    <Link href={'/Login'}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </Link>
    </SafeAreaView>
  </SafeAreaProvider>
  </ScrollView>

);
}
export default AdminPanel