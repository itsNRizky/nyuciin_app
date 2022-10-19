import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Homescreen from './screens/Homescreen';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Dashboard from './screens/Dashboard';



export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Homescreen'>
          <Stack.Screen name='Homescreen' component={Homescreen} options={{headerShown: false}} />
          <Stack.Screen name='Signin' component={Signin} options={{headerShown: false, animation: 'slide_from_right'}} />
          <Stack.Screen name='Signup' component={Signup} options={{headerShown: false, animation: 'slide_from_right'}} />
          <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown: false, animation: 'slide_from_bottom'}} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}