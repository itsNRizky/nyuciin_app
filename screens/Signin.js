import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins'
import { StatusBar } from 'expo-status-bar'

const Signin = () => {
  const [name, setName] = useState('')
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
      <View className='bg-[#2A7DFF] h-screen'>
        <TouchableOpacity onPress={() => navigation.navigate('Homescreen')} className='bg-white h-11 w-11 rounded-full justify-center items-center my-6 mx-8'>
          <Image className='h-9 w-9' source={require('../assets/arrow.png')} />
        </TouchableOpacity>
        <Text style={{fontFamily: 'Poppins_600SemiBold'}} className='text-white text-2xl mx-8'>Daftar</Text>
        <View className='bg-white rounded-t-[20px] mt-8 px-8 h-full'>
          <View className='mt-8'>
            <Text style={{fontFamily: 'Poppins_600SemiBold'}} className='text-center text-[#102D5B] text-xl'>Selamat Datang</Text>
            <Text style={{fontFamily: 'Poppins_500Medium'}} className='text-center text-[#102D5B]'>Silahkan daftar untuk mulai laundry</Text>
          </View>
          <View className='mt-6'>
            <View>
              <Text style={{fontFamily: 'Poppins_500Medium'}} className='ml-5 text-[#102D5B]'>Nama</Text>
              <TextInput
                placeholder='Masukkan nama kamu'
                keyboardType='default'
                onChangeText={setName}
                cursorColor={'#2A7DFF'}
                className='bg-[#EFEFEF] px-5 py-4 rounded-md mb-5 text-[#102D5B]'
                style={{fontFamily: 'Poppins_400Regular'}}
                
              />
            </View>
            <View>
              <Text style={{fontFamily: 'Poppins_500Medium'}} className='ml-5 text-[#102D5B]'>Email</Text>
              <TextInput
                placeholder='Masukkan email kamu'
                textContentType='emailAddress'
                keyboardType='email-address'
                onChangeText={setName}
                cursorColor={'#2A7DFF'}
                className='bg-[#EFEFEF] px-5 py-4 rounded-md mb-5 text-[#102D5B]'
                style={{fontFamily: 'Poppins_400Regular'}}
              />
            </View>
            <View>
              <Text style={{fontFamily: 'Poppins_500Medium'}} className='ml-5 text-[#102D5B]'>Nomor Handphone</Text>
              <TextInput
                placeholder='Masukkan nomor hp kamu'
                keyboardType='phone-pad'
                textContentType='telephoneNumber'
                onChangeText={setName}
                cursorColor={'#2A7DFF'}
                className='bg-[#EFEFEF] px-5 py-4 rounded-md mb-5 text-[#102D5B]'
                style={{fontFamily: 'Poppins_400Regular'}}
                
              />
            </View>
            <View>
              <Text style={{fontFamily: 'Poppins_500Medium'}} className='ml-5 text-[#102D5B]'>Password</Text>
              <TextInput
                placeholder='Masukkan password baru'
                textContentType='password'
                secureTextEntry={true}
                onChangeText={setName}
                cursorColor={'#2A7DFF'}
                className='bg-[#EFEFEF] px-5 py-4 rounded-md mb-5 text-[#102D5B]'
                style={{fontFamily: 'Poppins_400Regular'}}
                
              />
            </View>
            <TouchableOpacity className='bg-[#2A7DFF] rounded-md mt-5'>
              <Text style={{fontFamily: 'Poppins_500Medium'}} className='text-center text-white my-3'>Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Signin