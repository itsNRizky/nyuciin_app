import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins'
import React from 'react'

const ProgressCard = ({status}) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  })

  if (!fontsLoaded){
    return null
  }
  return (
    <TouchableOpacity className='flex flex-row items-center justify-between'>
      <View className='felx flex-row items-center my-3'>
        {status === 'progres' ? (
          <View className='w-1/3 flex flex-row items-center bg-[#FB9A07] px-2 py-[2px] rounded-xl'>
            <Image className='mr-1' source={require('../assets/progres.png')} />
            <Text style={{fontFamily:'Poppins_500Medium'}} className='text-white'>Proses</Text>
        </View>
        ) : true}
        {status === 'delivery' ? (
          <View className='w-1/3 flex flex-row items-center bg-[#2A7DFF] px-2 py-[2px] rounded-xl'>
            <Image className='mr-1' source={require('../assets/delivery.png')} />
            <Text style={{fontFamily:'Poppins_500Medium'}} className='text-white'>Delivery</Text>
        </View>
        ) : true}
        {status === 'done' ? (
          <View className='w-1/3 flex flex-row items-center bg-[#1EDD31] px-2 py-[2px] rounded-xl'>
            <Image className='mr-1' source={require('../assets/done.png')} />
            <Text style={{fontFamily:'Poppins_500Medium'}} className='text-white'>Selesai</Text>
        </View>
        ) : true}
        <Text style={{fontFamily:'Poppins_500Medium'}} className='ml-2 text-[#102D5B]'>Senin, 3 November 2022</Text>
      </View>
      <View className='flex flex-row items-center'>
        <Text style={{fontFamily:'Poppins_500Medium'}} className='mr-3 text-[#DDDDDD]'>13:05</Text>
        <Image source={require('../assets/navarrow.png')} />
      </View>
    </TouchableOpacity>
  )
}

export default ProgressCard