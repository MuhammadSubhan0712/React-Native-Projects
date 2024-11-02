import React, { useState } from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Login = () => {
  

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');


  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex justify-center items-center'>
     
        <TextInput
          className=''
        //   onChangeText={onChangeNumber}
          value={email}
          placeholder="Enter your Email"
          keyboardType="email-address"
        />
        <TextInput 
          className=''
        //   onChangeText={onChangeNumber}
          value={password}
          placeholder="****************"
          secureTextEntry={true}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Login