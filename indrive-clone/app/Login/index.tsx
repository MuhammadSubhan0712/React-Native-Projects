import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaProvider>
      <LinearGradient colors={['#1e3c72', '#2a5298']} style={styles.background}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Welcome Back!</Text>
          
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Enter your Email"
            keyboardType="email-address"
            placeholderTextColor="#ddd"
          />
          
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#ddd"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
};

export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
    transform: [{ perspective: 1000 }],
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2a5298',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#8b9dc3',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f0f4f8',
    shadowColor: '#333',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4c8ed9',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
