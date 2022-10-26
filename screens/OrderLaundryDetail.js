import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import LaundryService from '../components/LaundryService';
import RBSheet from 'react-native-raw-bottom-sheet';

import OrderLaundryConfirmation from './bottomSheets/OrderLaundryConfirmation';


const OrderLaundryDetail = () => {
  const refRBSheet = useRef()
  const navigation = useNavigation()
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  })

  if (!fontsLoaded){
    return null
  }
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'white'} />
      <View className='bg-white h-screen w-screen'>
        <TouchableOpacity onPress={() => navigation.goBack()} className='bg-white h-11 w-11 absolute rounded-full justify-center items-center my-6 mx-8'>
          <Image className='h-9 w-9' source={require('../assets/arrow.png')} />
        </TouchableOpacity>
        <Image className='w-screen -z-10' source={require('../assets/example2.png')} />
        <View className='mx-4 pb-4 border-b-[1px] border-[#DCDCDC]'>
          <Text style={{fontFamily: 'Poppins_600SemiBold'}} className='text-xl text-[#102D5B]'>Nama Laundry Nya</Text>
          <Text style={{fontFamily: 'Poppins_500Medium'}}><Image source={require('../assets/clock.png')} />  08.00 - 16.00</Text>
          <View className='flex flex-row items-center'>
            <Image source={require('../assets/star.png')} />
            <Image source={require('../assets/star.png')} />
            <Image source={require('../assets/star.png')} />
          </View>
        </View>
        <Text style={{fontFamily: 'Poppins_600SemiBold'}} className='mx-4 text-[#2A7DFF] text-lg mt-4'>Layanan</Text>
        <ScrollView className='mx-4' showsVerticalScrollIndicator={false}>
          <LaundryService refBs={refRBSheet} />
          <LaundryService refBs={refRBSheet} />
          <LaundryService refBs={refRBSheet} />
          <LaundryService refBs={refRBSheet} />
          <LaundryService refBs={refRBSheet} />
          <LaundryService refBs={refRBSheet} />
          <LaundryService refBs={refRBSheet} />
        </ScrollView>
      </View>

      {/* BottomSheet for Order Confirmation */}
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
          <OrderLaundryConfirmation refBs={refRBSheet} />
        </RBSheet>
    </SafeAreaView>
  )
}

export default OrderLaundryDetail