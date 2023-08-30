import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import Navbar from '../components/Navbar'
import InfoPromoCards from '../components/InfoPromoCards'


const Promo = () => {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold
  })

  if (!fontsLoaded){
    return null
  }
  return (
    <SafeAreaView>
      <View className='bg-white h-screen w-screen py-4'>
        <Text style={{fontFamily: 'Poppins_600SemiBold'}} className='text-xl px-4 text-[#2A7DFF]'>Promo & Diskon!</Text>
        <InfoPromoCards />
        <InfoPromoCards />
        <InfoPromoCards />
        <Navbar active={'promo'} />
      </View>
    </SafeAreaView>
  )
}

export default Promo