import React, { useState } from 'react';
import { TextInput, Text, TouchableOpacity, View , Image} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { launchImageLibrary } from 'react-native-image-picker';
import { Link, useNavigation } from 'expo-router';

const Login = () => {
  const [username , setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigation();
  const [imageUri, setImageUri] = useState(null);

const toLogin = () => {
  navigate('../Login');
}

const selectImage = () => {
  launchImageLibrary(
    {
      mediaType: 'photo',
      quality: 1,
    },
    (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets[0].uri) {
        setImageUri(response.assets[0].uri);
      }
    }
  );
};

  return (
    <SafeAreaProvider>
      <LinearGradient colors={['#abfe05', '#00db24']} className="flex-1 items-center justify-center">
        <SafeAreaView className="w-11/12 bg-white p-5 rounded-2xl shadow-lg shadow-black border border-gray-300">

        <View className="flex items-center mt-2 mb-5">
          <Image
            className="h-24 w-24 border-4 border-gray-300 rounded-full shadow-md shadow-gray-500 mb-4"
            source={{
              uri: 'https://play-lh.googleusercontent.com/CeO35pm-07SaLuthR7VVXwAl4mBA5thYagq2eB-VRflSEuW4eIArPvoM6PVw-nmnzw=w240-h480-rw',
            }}
          />
        </View>

          <Text className="text-center py-3 text-2xl font-bold text-green-700 mb-6 shadow-md shadow-green-400">
           Sign Up
          </Text>

          <TextInput
            className="h-12 px-4 rounded-lg bg-gray-200 mb-4 shadow-md shadow-gray-500 text-base text-gray-800"
            onChangeText={setUsername}
            value={username}
            placeholder="Username"
            placeholderTextColor="#aaa"
          />
          <TextInput
            className="h-12 px-4 rounded-lg bg-gray-200 mb-4 shadow-md shadow-gray-500 text-base text-gray-800"
            onChangeText={setEmail}
            value={email}
            placeholder="Enter your Email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
          />
          
          <TextInput
            className="h-12 px-4 rounded-lg bg-gray-200 mb-4 shadow-md shadow-gray-500 text-base text-gray-800"
            onChangeText={setPassword}
            value={password}
            placeholder="*****************"
            placeholderTextColor="#aaa"
            secureTextEntry
          />
          
   {imageUri ? (
        <Image source={{ uri: imageUri }} style={{ width: 100, height: 100, borderRadius: 50 }} />
      ) : (
        <TouchableOpacity onPress={selectImage}>
          <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>Upload Image</Text>
          </View>
        </TouchableOpacity>
      )}

          <TouchableOpacity onPress={() => toLogin} className="bg-green-500 mt-4 py-3 rounded-lg shadow-lg shadow-green-900 active:bg-green-700">
            <Text className="text-lg font-semibold text-white text-center">Sign Up</Text>
          </TouchableOpacity>

          <Link href={'/Login'} className='mt-4  py-3  hover:text-cyan-300'>
          <Text className='text-lg font-bold text-cyan-700 text-center'>
          Already have a account
          </Text>
          </Link>
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
};

export default Login;
