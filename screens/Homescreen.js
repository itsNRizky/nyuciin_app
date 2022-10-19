import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';


const Homescreen = () => {
  const navigation = useNavigation()
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
      <StatusBar backgroundColor='#2A7DFF' />
      <View className='bg-[#2A7DFF] px-8 h-screen flex flex-col justify-between '>
        <View></View>
        <View className='flex flex-col items-center'>
          <Image className='mb-6' source={require('../assets/homescreen.png')} />
          <Text style={{fontFamily: 'Poppins_600SemiBold',}} className='text-3xl text-white'>Selamat Datang!</Text>
          <Text style={{fontFamily: 'Poppins_500Medium',}} className='text-sm text-center text-white w-3/4'>Permudah kegiatan laundry mu dengan Nyuci.in!</Text>
        </View>
        <View className='pb-10'>
          <TouchableOpacity className='bg-white rounded-[10px]' onPress={() => navigation.navigate('Signup')}>
            <Text style={{fontFamily: 'Poppins_600SemiBold',}} className='my-3 text-center text-sm text-[#2A7DFF]'>Buat Akun</Text>
          </TouchableOpacity>
          <Text style={{fontFamily: 'Poppins_400Regular',}} className='text-center text-white mt-3'>Sudah punya akun? <Text className='underline-offset-1 underline' onPress={() => navigation.navigate('Signin')}>Masuk sini</Text></Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Homescreen