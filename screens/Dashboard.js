import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const Dashboard = () => {
  return (
    <SafeAreaView>
      <View className='bg-white h-full'>
        <Text>Dashboard</Text>
      </View>
    </SafeAreaView>
  )
}

export default Dashboard