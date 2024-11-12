import { useCallback, useEffect, useState } from 'react';
import { Animated, Text, View , StyleSheet} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import Users from './Users'
import CustomerInfo from './Customers'
import Drivers from './Drivers'
// import RegisterDriver from './RegisterDriver'
import RideBooking from './Booking'

const Home = () => {
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
  const [appIsReady, setAppIsReady] = useState(false);
  const scaleAnim = new Animated.Value(0.8);

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 1,
      useNativeDriver: true,
    }).start();
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
    
  return (
    <View  style={styles.container}>
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Text style={styles.title}>Welcome to InDrive</Text>
      <View className='justify-between items-center'>
      <Entypo className='text-cyan-800' name="rocket" size={80} color="white" />
      {/* <Entypo name="drive" size={80} color="white" /> */}
      <Text className='text-cyan-800 text-5xl'> 🚙🚓 </Text>
      </View>
    </Animated.View>
 </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#800000'
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#00ecff',
    marginBottom: 20,
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  icon: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
}); 
export default Home
