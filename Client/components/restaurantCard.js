import { View, Text, TouchableWithoutFeedback, Image }
 from 'react-native';
import * as Icon from 'react-native-feather';
import React from 'react';
import {useNavigation} from '@react-navigation/native'

export default function RestaurantCard({item}) {
   const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
    onPress={()=>{navigation.navigate('Restaurant',{...item})}}>
      <View className='mr-6 mb-1 bg-white rounded-3xl' style={{shadowColor: "#000",elevation: 3,}}>
         <Image className='h-36 w-64 rounded-t-3xl' source={item.image}/>
         <View className='px-3 pb-4 space-y-3'>
            <Text className='text-lg font-bold pt-2'>{item.name}</Text>
            <View className='flex-row items-center space-x-1'>
               <Image source={require('../assets/img/estrela.png')} className='h-4 w-4'/>
               <Text className='text-green-700'>{item.stars}</Text>
               <Text className='text-gray-700'>
                  ({item.review} review) · <Text className ='font-semibold'>{item.category}</Text>
               </Text>
            </View>
            <View className='flex-row item-center space-x-1'>
               <Icon.MapPin color={'gray'} width={'15'} height={'15'}/>
               <Text className='text-gray-700 text-xs'>Próximo · {item.address}</Text>
            </View>
         </View>  
      </View>
    </TouchableWithoutFeedback>
  )
}

