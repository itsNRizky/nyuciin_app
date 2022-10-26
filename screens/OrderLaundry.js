import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins'

import Navbar from '../components/Navbar'
import MapView from 'react-native-maps'
import { useNavigation } from '@react-navigation/native';

const OrderLaundry = () => {
  const navigation = useNavigation()
  const [location, setLocation] = useState('')
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold
  })

  if (!fontsLoaded){
    return null
  }
  return (
    <SafeAreaView>
      <View className='bg-white h-screen w-screen'>
        <Text style={{fontFamily: 'Poppins_600SemiBold'}} className='text-[#2A7DFF] text-xl px-4 mt-4'>Mau laundry hari ini?</Text>
        <View className='flex flex-row items-center border border-[#D4D4D4] mx-4 px-2 py-1 rounded-xl mt-5'>
          <Image className='mr-2' source={require('../assets/search.png')} />
          <TextInput
            placeholder='Cari lokasi laundry'
            textContentType='addressCity'
            keyboardType='default'
            onChangeText={setLocation}
            cursorColor={'#2A7DFF'}
            className='w-[90%] text-[#102D5B]'
            style={{fontFamily: 'Poppins_400Regular'}}
          />
        </View>
        <View className='flex items-center mt-5'>
          <MapView className='w-[90vw] h-[75vh]' />
          
          <TouchableOpacity onPress={() => navigation.navigate('OrderLaundryDetail')} className='absolute bottom-10 flex flex-row items-center justify-between bg-white w-[80vw] rounded-[10px] p-3'>
            <View className='flex flex-row items-center'>
              <Image className='w-16 h-16' source={require('../assets/example.png')} />
              <View className='ml-4'>
                <Text style={{fontFamily: 'Poppins_500Medium'}} className='text-[#102D5B]'>Nama Laundrynya</Text>
                <Text style={{fontFamily: 'Poppins_500Medium'}} className='text-[#102D5B]'><Image source={require('../assets/clock.png')} /> 08.00 - 16.00</Text>
                <View className='flex flex-row'>
                  <Image source={require('../assets/star.png')} />
                  <Image source={require('../assets/star.png')} />
                  <Image source={require('../assets/star.png')} />
                </View>
              </View>
            </View>
            <View className='p-5'>
              <Image source={require('../assets/navarrow.png')} className='-rotate-90 w-6 h-6' />
            </View>
          </TouchableOpacity>
        </View>
        <Navbar active={'order'} />
      </View>
    </SafeAreaView>
  )
}

export default OrderLaundry