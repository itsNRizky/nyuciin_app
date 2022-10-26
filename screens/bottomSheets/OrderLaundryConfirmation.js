import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins'
import { useNavigation } from '@react-navigation/native'

const OrderLaundryConfirmation = ({refBs}) => {
  const navigation = useNavigation()
  const [promoInput, setPromoInput] = useState(1)
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  })

  if (!fontsLoaded){
    return null
  }
  return (
    <View className='w-screen h-[70vh] bg-white flex justify-between'>
      <View className=''>
        <Text style={{fontFamily: 'Poppins_600SemiBold'}} className='text-center mt-2 text-lg text-[#102D5B]'>Konfirmasi Pesanan Kamu</Text>
        <View className='flex flex-row items-center px-5 mt-5'>
          <Image className='mr-2' source={require('../../assets/example.png')} />
          <View>
            <Text style={{fontFamily: 'Poppins_500Medium'}} className='text-[#102D5B]'>Nama Laundry nya</Text>
            <Text style={{fontFamily: 'Poppins_500Medium'}} className='text-[#102D5B]'><Image source={require('../../assets/clock.png')} />  08.00 - 16.00</Text>
            <View className='flex flex-row'>
              <Image source={require('../../assets/star.png')} />
              <Image source={require('../../assets/star.png')} />
              <Image source={require('../../assets/star.png')} />
            </View>
          </View>
        </View>

        <View className='flex flex-row justify-between items-center mt-2 px-5 py-4 border-b-[1px] border-[#DCDCDC]'>
          <View className='w-2/3'>
            <Text style={{fontFamily: 'Poppins_500Medium'}} className='text-base'>Nama Layanan</Text>
            <Text style={{fontFamily: 'Poppins_400Regular'}} className='text-xs text-[#A0A0A0]'>Detail Layanan misal jadinya berapa lama / pake sabun apa</Text>
          </View>
          <View>
            <Text style={{fontFamily: 'Poppins_500Medium'}} className='text-[#102D5B]'>Rp. 5000</Text>
          </View>
        </View>

        <View className='flex flex-row items-center justify-between mx-5'>
          <Text style={{fontFamily: 'Poppins_400Regular'}} className='text-base'>Jumlah item: </Text>
          <View className='flex flex-row items-center my-5'>
            <TouchableOpacity onPress={() => setPromoInput(promoInput - 1)}><Text className='text-[#2A7DFF] text-2xl' style={{fontFamily: 'Poppins_600SemiBold'}}>-</Text></TouchableOpacity>
            <Text style={{fontFamily: 'Poppins_400Regular'}} className='mx-3 text-lg'>{promoInput}</Text>
            <TouchableOpacity onPress={() => setPromoInput(promoInput + 1)}><Text className='text-[#2A7DFF] text-2xl' style={{fontFamily: 'Poppins_600SemiBold'}}>+</Text></TouchableOpacity>
          </View>
        </View>

        <View className='flex flex-row items-center mx-5'>
          <Text className='text-base'>Kode promo: </Text>
          <TextInput 
            placeholder='Masukkan kode promo'
            textContentType='none'
            keyboardType='default'
            onChangeText={setPromoInput}
            cursorColor={'#2A7DFF'}
            style={{fontFamily: 'Poppins_400Regular'}}
            className='border-b-[1px] border-[#DBDBDB] w-[60vw]'
          />
        </View>
      </View>
      <View className='mx-5 flex'>
        <View className='flex flex-row justify-between'>
          <Text style={{fontFamily: 'Poppins_400Regular'}} className='text-lg'>Total</Text>
          <Text style={{fontFamily: 'Poppins_500Medium'}} className='text-lg'>Rp. 5000</Text>
        </View>
        <TouchableOpacity onPress={() => {
            refBs.current.close()
            navigation.navigate('OrderDone')
          }} className='bg-[#2A7DFF] p-3 rounded-[10px] mt-3'>
          <Text style={{fontFamily: 'Poppins_500Medium'}} className='text-white text-center'>Konfirmasi Pesanan</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderLaundryConfirmation