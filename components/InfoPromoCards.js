import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const InfoPromoCards = () => {
  return (
    <View className='my-6 h-1/4'>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className='bg-gray-200 rounded-[10px] w-[92vw] mx-4'></View>
        <View className='bg-gray-200 rounded-[10px] w-[92vw] mx-4'></View>
        <View className='bg-gray-200 rounded-[10px] w-[92vw] mx-4'></View>
      </ScrollView>
    </View>
  )
}

export default InfoPromoCards