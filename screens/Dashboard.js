import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins'
import Navbar from '../components/Navbar'
import InfoPromoCards from '../components/InfoPromoCards'
import NearestLaundryCard from '../components/NearestLaundryCard'
import { useNavigation } from '@react-navigation/native';
import RBSheet from "react-native-raw-bottom-sheet";

import YourLocation from './bottomSheets/YourLocation'

const Dashboard = () => {
  let navigation = useNavigation()
  const refRBSheet = useRef();
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold
  })

  if (!fontsLoaded){
    return null
  }
  return (
    <SafeAreaView>
      <View className='bg-white h-screen w-screen'>
        {/* Header */}
        <View className='flex flex-row items-end bg-[#2A7DFF] px-4 rounded-br-[80px]'>
          <View className='w-2/3 mb-4'>
            <Text style={{fontFamily: 'Poppins_500Medium',}} className='text-white'>Selamat Pagi, User!</Text>
            <Text style={{fontFamily: 'Poppins_600SemiBold',}} className='text-white text-2xl'>Mau laundry apa kamu hari ini?</Text>
          </View>
          <Image className='translate-y-6' source={require('../assets/dashboard.png')} />
        </View>

        {/* User Location */}
        <TouchableOpacity onPress={() => refRBSheet.current.open()} className='mx-4 mt-8 border border-gray-200 rounded-[10px] flex flex-row justify-between items-center p-3'>
          <View className='flex flex-row items-center'>
            <View className='bg-[#2A7DFF] rounded-full p-3 mr-3'><Image source={require('../assets/pinmap.png')} /></View>
            <View>
              <Text style={{fontFamily: 'Poppins_500Medium',}} className='text-[#606282] text-xs'>Lokasi kamu:</Text>
              <Text style={{fontFamily: 'Poppins_500Medium',}} className='text-[#102D5B]'>Jl. Raya Selatan no 20</Text>
            </View>
          </View>
          <View><Image source={require('../assets/navarrow.png')}/></View>
        </TouchableOpacity>

        {/* Infos and Promos */}
        <InfoPromoCards />

        {/* Laundry Near User */}
        <Text style={{fontFamily: 'Poppins_600SemiBold',}} className='text-[#102D5B] text-xl mx-4'>Laundry Dekat Sini</Text>
        <NearestLaundryCard />


        <Navbar active={'dashboard'} />
      </View>

      {/* BottomSheets To YourLocation */}
      <RBSheet 
          ref={refRBSheet} 
          closeOnDragDown={true}
          height={Dimensions.get('window').height*0.8}
          closeOnPressMask={false} 
          customStyles={{
            draggableIcon: {
              width: '25%',
              height: 7,
              backgroundColor: '#D9D9D9'
            },
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }
          }}
          >
          <YourLocation refBs={refRBSheet} />
        </RBSheet>
    </SafeAreaView>
  )
}

export default Dashboard