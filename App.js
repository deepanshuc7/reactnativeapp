// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { useState, useEffect } from 'react';

// import SplashScreen from './screens/SplashScreen';
// import { loadUser } from './services/AuthService';
// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';
// import AuthContext from './contexts/AuthContext';
// import RegisterScreen from './screens/RegisterScreen';


// const Stack = createNativeStackNavigator();

// export default function App() {

//   const [user, setUser] = useState();
//   const [status, setStatus] = useState('loading');

//   useEffect(() => {
//     async function runEffect() {
//       try {
//         const user = await loadUser();
//         setUser(user);
//       } catch (e) {
//         console.log("failed to load user", e);
//       } 

//       setStatus("idle");
//     }
//       runEffect();
//   }, []);
 
//   if (status === "loading") {
//     return <SplashScreen />
//   }

//   return (
//     <AuthContext.Provider value={{user, setUser}}>
//       <NavigationContainer>
//       <Stack.Navigator>
//         {user ? (
//           <>
//            <Stack.Screen name="Home" component={HomeScreen} />
//           </>
//         ) : (
//           <>
//           <Stack.Screen name="Login" component={LoginScreen} />
//           <Stack.Screen name="Create account" component={RegisterScreen} />
//           </>
//         )} 
//       </Stack.Navigator>
//     </NavigationContainer>
//     </AuthContext.Provider>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from 'react-native-vector-icons';

// import SplashScreen from './screens/SplashScreen';
// import { loadUser } from './services/AuthService';
// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';
// import LocationScreen from './screens/LocationScreen';
// import NotificationScreen from './screens/NotificationScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import RegisterScreen from './screens/RegisterScreen';
// import AuthContext from './contexts/AuthContext';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function MainTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Location') {
//             iconName = focused ? 'location' : 'location-outline';
//           } else if (route.name === 'Notifications') {
//             iconName = focused ? 'notifications' : 'notifications-outline';
//           } else if (route.name === 'Profile') {
//             iconName = focused ? 'person' : 'person-outline';
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray',
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Location" component={LocationScreen} />
//       <Tab.Screen name="Notifications" component={NotificationScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   const [user, setUser] = useState();
//   const [status, setStatus] = useState('loading');

//   useEffect(() => {
//     async function runEffect() {
//       try {
//         const user = await loadUser();
//         setUser(user);
//       } catch (e) {
//         console.log("failed to load user", e);
//       }

//       setStatus("idle");
//     }
//     runEffect();
//   }, []);

//   if (status === "loading") {
//     return <SplashScreen />
//   }

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           {user ? (
//             <>
//               <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
//             </>
//           ) : (
//             <>
//               <Stack.Screen name="Login" component={LoginScreen} />
//               <Stack.Screen name="Create account" component={RegisterScreen} />
//             </>
//           )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// }



import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { StatusBar } from 'react-native';
// import { ThemeProvider } from './contexts/ThemeContext';
import AuthProvider from './providers/AuthProvider';
import AppNavigator from './navigator/AppNavigator';


const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000',
    text: '#fff',
  },
};

export default function App() {
  return (
   
      <AuthProvider>
         <StatusBar barStyle="light-content" backgroundColor="#000" />
      <NavigationContainer theme={MyDarkTheme}>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
   
  );
}


function AppContent() {
  const { navigationTheme } = useTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}