import React, { useState } from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Login = () => {
  
    const [text, onChangeText] = React.useState('Useless Text');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');


  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex justify-center items-center bg-slate-400 w-96'>
    
      <TextInput
          className=''
        //   onChangeText={onChangeNumber}
          value={text}
          placeholder="Enter Full Name"
        /> 
       
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