import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Homescreen from './screens/Homescreen';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Dashboard from './screens/Dashboard';
import ListProgress from './screens/ListProgress';
import Promo from './screens/Promo';
import Profile from './screens/Profile';
import YourLocationMap from './screens/YourLocationMap';
import OrderLaundry from './screens/OrderLaundry';
import OrderLaundryDetail from './screens/OrderLaundryDetail';
import OrderDone from './screens/OrderDone';
import WACta from './screens/WACta';



export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Homescreen'>
            <Stack.Screen name='Homescreen' component={Homescreen} options={{headerShown: false,}} />
            <Stack.Screen name='Signin' component={Signin} options={{headerShown: false, animation: 'slide_from_right'}} />
            <Stack.Screen name='Signup' component={Signup} options={{headerShown: false, animation: 'slide_from_right'}} />
            <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown: false, animation: 'slide_from_bottom'}} />
            <Stack.Screen name='ListProgress' component={ListProgress} options={{headerShown: false, animation: 'none'}} />
            <Stack.Screen name='Promo' component={Promo} options={{headerShown: false, animation: 'none'}} />
            <Stack.Screen name='Profile' component={Profile} options={{headerShown: false, animation: 'none', }} />
            <Stack.Screen name='YourLocationMap' component={YourLocationMap} options={{headerShown: false, animation: 'slide_from_right', }} />
            <Stack.Screen name='OrderLaundry' component={OrderLaundry} options={{headerShown: false, animation: 'none'}} />
            <Stack.Screen name='OrderLaundryDetail' component={OrderLaundryDetail} options={{headerShown: false, animation: 'slide_from_right'}} />
            <Stack.Screen name='OrderDone' component={OrderDone} options={{headerShown: false, animation: 'slide_from_right'}} />
            <Stack.Screen name='WACta' component={WACta} options={{headerShown: false, animation: 'slide_from_right'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}