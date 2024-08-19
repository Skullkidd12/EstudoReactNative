import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PreparandoPedido() {
   const navigation = useNavigation();
  useEffect(()=>{
   setTimeout(()=>{
      //mover para tela delivery
      navigation.navigate('DeliveryScreen')
   },2500)
  })
  
  
   return (
    <View className='flex-1 bg-white justify-center items-center'>
      <Image source={require('../assets/img/motinho.png')} className='w-78 h-78'></Image>

    </View>
  )
}