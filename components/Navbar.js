import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Navbar = ({active}) => {
  const navigation = useNavigation()
  return (
    <View className='flex flex-row items-center justify-around py-3 px-4 absolute self-center bottom-0 w-full'>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Image source={active !== 'dashboard' ? require(`../assets/navbaricon/home.png`) : require(`../assets/navbaricon/homeActive.png`)} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListProgress')}>
        <Image source={active !== 'list' ? require(`../assets/navbaricon/list.png`) : require(`../assets/navbaricon/listActive.png`)} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('OrderLaundry')} className={`bg-[${active !== 'order'?'#2A7DFF':'#FB9A07'}] p-2 rounded-full -translate-y-6`}>
        <Image source={require(`../assets/navbaricon/add.png`)} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Promo')}>
        <Image source={active !== 'promo' ? require(`../assets/navbaricon/promo.png`) : require(`../assets/navbaricon/promoActive.png`)} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={active !== 'profile' ? require(`../assets/navbaricon/profile.png`) : require(`../assets/navbaricon/profileActive.png`)} />
      </TouchableOpacity>
    </View>
  )
}

export default Navbar