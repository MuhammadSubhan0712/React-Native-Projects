import React, { useState } from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Login = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');


  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex justify-center items-center'>
        <TextInput
          className='h-40 m-2 p-5'
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          className='h-40 m-2 p-5'
          onChangeText={onChangeNumber}
          value={email}
          placeholder="Enter your Email"
          keyboardType="email-address"
        />
        <TextInput 
          className='h-40 m-2 p-5'
          onChangeText={onChangeNumber}
          value={password}
          placeholder="****************"
          secureTextEntry={true}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Login