import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const LaundryService = ({refBs}) => {
  return (
    <View className='flex flex-row justify-between items-center mt-2 pb-4 border-b-[1px] border-[#DCDCDC]'>
      <View className='w-2/3'>
        <Text style={{fontFamily: 'Poppins_500Medium'}} className='text-base'>Nama Layanan</Text>
        <Text style={{fontFamily: 'Poppins_400Regular'}} className='text-xs text-[#A0A0A0]'>Detail Layanan misal jadinya berapa lama / pake sabun apa</Text>
      </View>
      <View>
        <Text style={{fontFamily: 'Poppins_500Medium'}} className='text-[#102D5B]'>Rp. 5000</Text>
        <TouchableOpacity onPress={() => refBs.current.open()}  className='bg-[#2A7DFF] p-2 my-2 rounded-[10px]'>
          <Text style={{fontFamily: 'Poppins_600SemiBold'}} className='text-white text-center'>Pilih</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LaundryService