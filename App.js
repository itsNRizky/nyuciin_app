import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';
import Signin from './screens/Signin';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Homescreen'>
        <Stack.Screen name='Homescreen' component={Homescreen} options={{headerShown: false}} />
        <Stack.Screen name='Signin' component={Signin} options={{headerShown: false, animation: 'slide_from_right'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}