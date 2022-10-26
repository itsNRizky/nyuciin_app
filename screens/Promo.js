import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'


const Promo = () => {
  return (
    <SafeAreaView>
      <View className='bg-white h-screen w-screen'>
        <Text>Promo</Text>
        <Navbar active={'promo'} />
      </View>
    </SafeAreaView>
  )
}

export default Promo