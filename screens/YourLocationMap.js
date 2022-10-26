import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Text, View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins'
const YourLocationMap = () => {
  const navigation = useNavigation()
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  })

  if (!fontsLoaded){
    return null
  }
  return (
    <SafeAreaView>
      <StatusBar translucent={true} backgroundColor={'white'} />
      <View className='flex items-center'>
        <View className='flex flex-row justify-between items-center bg-white w-screen h-[50px]'>
          <TouchableOpacity onPress={() => navigation.goBack()} className='h-11 w-11 justify-center items-center my-6 mx-8'>
            <Image className='h-9 w-9' source={require('../assets/arrow.png')} />
          </TouchableOpacity>
          <Text style={{fontFamily: 'Poppins_500Medium'}} className='text-[#2A7DFF] text-base'>Tentukan lokasi kamu</Text>
          <TouchableOpacity className='h-11 w-11 justify-center items-center my-6 mx-8'>
            <Image className='h-7 w-7' source={require('../assets/info.png')} />
          </TouchableOpacity>
        </View>
        <MapView className='w-[100vw] h-[100vh]' />
        <View className='absolute bottom-44 w-[90vw] flex items-end'>
          <TouchableOpacity className='bg-white rounded-full w-10 h-10 flex items-center justify-center mb-4'>
            <Image source={require('../assets/currentlocation.png')} />
          </TouchableOpacity>
          <View className='flex flex-row p-5 bg-[#2A7DFF] rounded-xl'>
            <View className='flex justify-center items-center rounded-full px-2 mr-2 w-8 h-8 bg-[#FB9A07]'><Image source={require('../assets/pinmap.png')} /></View>
            <View className='w-[90%]'>
              <Text style={{fontFamily: 'Poppins_500Medium'}} className='text-white mb-2'>Jl. Raya Selatan no 20</Text>
              <Text style={{fontFamily: 'Poppins_400Regular'}} className='text-white text-xs' >Lokasi yang judulnya panjang yang didapat dari googlemap</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} className='absolute bottom-24 p-3 w-[90vw] bg-[#2A7DFF] rounded-xl'>
          <Text style={{fontFamily: 'Poppins_500Medium'}} className='text-white text-center'>Konfirmasi Lokasi</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


export default YourLocationMap