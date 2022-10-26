import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const NearestLaundryCard = () => {
  return (
    <View className='my-6 h-1/5'>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity className='bg-gray-200 rounded-[10px] w-[42vw] mx-4'></TouchableOpacity>
        <TouchableOpacity className='bg-gray-200 rounded-[10px] w-[42vw] mx-4'></TouchableOpacity>
        <TouchableOpacity className='bg-gray-200 rounded-[10px] w-[42vw] mx-4'></TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default NearestLaundryCard