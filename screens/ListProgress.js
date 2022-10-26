import { View, Text, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins'
import ProgressCard from './../components/ProgressCard';

const ListProgress = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  })

  if (!fontsLoaded){
    return null
  }
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'white'} />
      <View className='bg-white h-screen w-screen py-5'>
        <View className='px-2 h-1/3 mb-5'>
          <Text style={{fontFamily: 'Poppins_600SemiBold'}} className='text-[#2A7DFF] text-xl'>Progres Laundry</Text>
          <ScrollView className='mt-3'>
          <ProgressCard status={'progres'} />
            <ProgressCard status={'delivery'} />
          </ScrollView>
        </View>
        <View className='px-2 h-3/5 mb-5'>
          <Text  style={{fontFamily: 'Poppins_600SemiBold'}} className='text-[#2A7DFF] text-xl'>Riwayat Laundry</Text>
          <ScrollView className='mt-3'>
            <ProgressCard status={'delivery'} />
            <ProgressCard status={'done'} />
            <ProgressCard status={'done'} />
          </ScrollView>
        </View>
        <Navbar active={'list'} />
      </View>
    </SafeAreaView>
  )
}

export default ListProgress