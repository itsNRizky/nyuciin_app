import { View, Text, Image, TouchableOpacity, Linking, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins'
import { useNavigation } from '@react-navigation/native'

const WACta = () => {
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
          <Image source={require('../assets/wa.png')} className='mb-5 w-40 h-40' />
          <Text style={{fontFamily: 'Poppins_600SemiBold'}} className='text-center mt-5 text-white text-4xl'>Oh iya!</Text>
          <Text style={{fontFamily: 'Poppins_600SemiBold'}} className='text-center mt-5 text-white text-2xl'>Jangan ragu untuk chat ya</Text>
        </View>
        <View className='w-[70vw]'>
          <Text style={{fontFamily: 'Poppins_500Medium'}} className='text-white text-center'>Kalo kamu ada pertanyaan terkait Nyuciin ataupun tanya progres laundry kamu, silahkan untuk chat😁</Text>
          <TouchableOpacity onPress={()=>{ Linking.openURL('https://wa.me/message/IHKIFOSCJDMBC1')}} className='bg-[#13990A] py-2 rounded-[10px] mt-5'>
            <Text className='text-white text-center'>Kontak Nyuciin</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} className='bg-[#FB9A07] py-2 rounded-[10px] mt-5'>
            <Text className='text-white text-center'>Kembali ke Halaman Utama</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default WACta