import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'


const Profile = () => {
  return (
    <SafeAreaView>
      <View className='bg-white h-screen w-screen'>
        <Text>Profile</Text>
        <Navbar active={'profile'} />
      </View>
    </SafeAreaView>
  )
}

export default Profile