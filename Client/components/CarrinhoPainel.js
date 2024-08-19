import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal} from '../slices/cartSlice';

export default function CarrinhoPainel() {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const carTotal = useSelector(selectCartTotal);

  if(!cartItems.length) return;
  return (
    <View className='absolute bottom-7 w-full z-50'>
      <TouchableOpacity 
      onPress={()=> navigation.navigate('Carrinho')}
      style={{backgroundColor: themeColors.bgColor(1),shadowColor: "#000",elevation: 3,}}
      className='flex-row justify-between items-center mx-5 rounded-full p-4 py-3 '
      >
         <View className='p-2 px-5  rounded-full' style={{backgroundColor:'rgba(255,255,255,0.3)'}}>
            <Text className = 'font-extrabold text-white text-lg'>
            {cartItems.length}
            </Text>
         </View>
         <Text className='flex text-center font-extrabold text-white text-lg'>
            Ver Carrinho
         </Text>  
         <Text className='font-extrabold text-white text-lg pr-1'>
            R${carTotal}
         </Text>  
      </TouchableOpacity>
    </View>
  )
}