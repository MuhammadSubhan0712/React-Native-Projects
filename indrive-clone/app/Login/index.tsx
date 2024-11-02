import React, { useState } from 'react';
import { TextInput, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaProvider>
      <LinearGradient colors={['#13c72', '#2a298']} className="flex-1 items-center justify-center">
        <SafeAreaView className="w-11/12 bg-white p-5 rounded-2xl shadow-lg shadow-black border border-gray-300">
          <Text className="text-center text-2xl font-bold text-green-500 mb-6 shadow-md shadow-blue-300">
           Login
          </Text>
          
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
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
          />

          <TouchableOpacity className="bg-blue-500 mt-4 py-3 rounded-lg shadow-lg shadow-blue-900 active:bg-blue-700">
            <Text className="text-lg font-semibold text-white text-center">Log In</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
};

export default Login;
