import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { restaurantes } from '../constants';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import Navigation from '../navigation';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Carrinho() {
  const navigation = useNavigation()
  const restaurant = restaurantes.restaurants[0];
  return (
   
    <View className='bg-white flex-1'>
      <SafeAreaView>
      <View className='relative py-4 '>
         <TouchableOpacity 
         onPress={()=> navigation.goBack()}
         style={{backgroundColor: themeColors.bgColor(1)}}
         className='absolute z-10 rounded-full p-1 top-5 left-2'>
            <Icon.ArrowLeft strokeWidth={3} stroke={'#fff'}/>
         </TouchableOpacity>
         <View>
            <Text className='text-center font-bold text-xl '>
               Seu Carrinho
            </Text>
         </View>
      </View>
      </SafeAreaView>
    </View>
    
  )
}