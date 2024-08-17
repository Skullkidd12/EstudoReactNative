import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function CarrinhoPainel() {
  const navigation = useNavigation();
  return (
    <View className='absolute bottom-7 w-full z-50'>
      <TouchableOpacity 
      onPress={()=> navigation.navigate('Carrinho')}
      style={{backgroundColor: themeColors.bgColor(1),shadowColor: "#000",elevation: 3,}}
      className='flex-row justify-between items-center mx-5 rounded-full p-4 py-3 '
      >
         <View className='p-2 px-5  rounded-full' style={{backgroundColor:'rgba(255,255,255,0.3)'}}>
            <Text className = 'font-extrabold text-white text-lg'>3</Text>
         </View>
         <Text className='flex text-center font-extrabold text-white text-lg'>
            Ver Carrinho
         </Text>  
         <Text className='font-extrabold text-white text-lg pr-1'>
            R${23}
         </Text>  
      </TouchableOpacity>
    </View>
  )
}