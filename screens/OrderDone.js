import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins'
import { useNavigation } from '@react-navigation/native'

const OrderDone = () => {
  const navigation = useNavigation()
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium
  })

  if (!fontsLoaded){
    return null
  }
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#2A7DFF'} />
      <View className='bg-[#2A7DFF] h-screen w-screen flex flex-col items-center py-[10vh] justify-between'>
        <View className='w-[70vw] mt-32 flex items-center'>
          <Image source={require('../assets/orderdone.png')} className='mb-5' />
          <Text style={{fontFamily: 'Poppins_600SemiBold'}} className='text-center mt-5 text-white text-4xl'>Order Berhasil Dibuat!</Text>
        </View>
        <View className='w-[70vw]'>
          <Text style={{fontFamily: 'Poppins_500Medium'}} className='text-white text-center'>Akan ada yang ambil item kamu, silahkan dipersiapkan ya!</Text>
          <TouchableOpacity onPress={() => navigation.navigate('WACta')} className='bg-[#FB9A07] py-2 rounded-[10px] mt-5'>
            <Text className='text-white text-center'>Selesai</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default OrderDone