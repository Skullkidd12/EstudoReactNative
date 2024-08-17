import { View, Text, ScrollView,Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import PratosRow from '../components/PratosRow';

export default function RestaurantScreen() {
   const {params} = useRoute();
   const navigation = useNavigation();
   let item = params;
   
   return (
      <View>
         <ScrollView>
            <View className='relative'>
               <Image className='w-full h-72' source={item.image}/>
               <TouchableOpacity className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full' onPress={()=>{
                  navigation.goBack()
               }}>
                  <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)}/>
               </TouchableOpacity>
            </View>
            <View style={{borderTopLeftRadius:40, borderTopRightRadius:40}}
            className='bg-white -mt-12 pt-6'>
               <View className='px-5'>
                  <Text className='text-3xl font-bold'>
                     {item.name}
                  </Text>
                  <View className='flex-row space-x-2 my-1 flex-wrap'>
                     <View className='flex-row items-center space-x-1'>
                        <Image source={require('../assets/img/estrela.png')} className='h-4 w-4'/>
                        <Text className='text-green-700'>{item.stars}</Text>
                        <Text className='text-gray-700'>
                        ({item.review} review) · <Text className ='font-semibold'>{item.category}</Text>
                        </Text>
                     </View>
                     <View className='flex-row item-center space-x-1 pt-0.5'>
                        <Icon.MapPin color={'gray'} width={'16'} height={'16'}/>
                        <Text className='text-gray-700 text-xs lin'>{item.address}</Text>
                     </View> 
                     <Text className='text-gray-500 mt-2'>{item.description}</Text>
                  </View>
               </View>
               <View className='pb-36 bg-white'>
                  <Text className="px-4 py-4 text-2xl font-bold">Cardápio</Text>
                  {/*pratos */}
                  {
                     item.dishes.map((dish,index)=>
                        <PratosRow item={{...dish}} key={index}/>
                     )
                  }
               </View>
            </View>
         </ScrollView>
         <Text>RestaurantScreen</Text>
      </View>
   );
}
