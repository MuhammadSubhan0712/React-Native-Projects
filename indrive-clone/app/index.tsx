import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Users from './Users';

const Home = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const scaleAnim = new Animated.Value(0.5);

  useEffect(() => {
    // Start the scale animation

    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 1,
      useNativeDriver: true,
    }).start();

    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Set appIsReady to true after resources are loaded
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
      <Users/>
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
    <View onLayout={onLayoutRootView} style={styles.container}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Text style={styles.title}>Welcome to MyDrive</Text>
        <View className="justify-between items-center">
          <Entypo className="text-cyan-800" name="rocket" size={80} color="white" />
          <Text className="text-cyan-800 text-5xl">🚙🚓</Text>
        </View>
      </Animated.View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#800000',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#00ecff',
    marginBottom: 20,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  icon: {
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default Home;
