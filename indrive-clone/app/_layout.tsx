import { Stack } from "expo-router";
import "../global.css"
export default function RootLayout() {

//   const Tab = createBottomTabNavigator();

//  function App(): JSX.Element {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Home"
//           component={'RideBookingScreen'}
//           options={{
//             tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={'RideBookingScreen'}
//           options={{
//             tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />,
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
}
// }
// function createBottomTabNavigator() {
//   throw new Error("Function not implemented.");
// }

