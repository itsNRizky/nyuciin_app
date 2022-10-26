import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins'

const YourLocation = ({refBs}) => {
  const navigation = useNavigation()
  const [location, setLocation] = useState('')
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  })

  if (!fontsLoaded){
    return null
  }
  return (
    <View className='px-4'>
      <View className='flex flex-row items-center justify-between mt-5'>
        <Text style={{fontFamily: 'Poppins_600SemiBold'}} className='text-[#102D5B] text-xl'>Tentukan lokasi kamu</Text>
        <TouchableOpacity onPress={() => {
            refBs.current.close()
            navigation.navigate('YourLocationMap')
          }} className='flex flex-row items-center border-b p-1 border-[#2A7DFF] rounded-lg'>
          <Image className='w-4 h-4' source={require('../../assets/yourlocation.png')} />
          <Text style={{fontFamily: 'Poppins_400Regular'}} className='text-[#2A7DFF] ml-1 text-xs'>Lihat di map</Text>
        </TouchableOpacity>
      </View>
      <View className='flex flex-row items-center border border-[#D4D4D4] px-2 py-1 rounded-xl mt-5'>
        <Image className='mr-2' source={require('../../assets/search.png')} />
        <TextInput
          placeholder='Cari lokasi kamu'
          textContentType='addressCity'
          keyboardType='default'
          onChangeText={setLocation}
          cursorColor={'#2A7DFF'}
          className='w-[90%] text-[#102D5B]'
          style={{fontFamily: 'Poppins_400Regular'}}
        />
      </View>
    </View>
  )
}

export default YourLocation