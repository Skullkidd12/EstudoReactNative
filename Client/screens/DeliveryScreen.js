import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { restaurantes } from '../constants';
import { useNavigation } from '@react-navigation/native';
import MapView,{Marker} from 'react-native-maps'
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';

export default function DeliveryScreen() {
   const restaurant = restaurantes.restaurants[0];
   const navigation = useNavigation();

  return (
    <View className='flex-1'>
      {/* map view */}
      <MapView initialRegion={{
         latitude: -23.991200,
         longitude: -46.277953,
         latitudeDelta: 0.01,
         longitudeDelta: 0.01
      }}className='flex-1' mapType='standard'>

         <Marker coordinate ={{
         latitude: -23.991200,
         longitude: -46.277953
         }}
         title={restaurant.name}
         description={restaurant.description}
         >
         </Marker>  
      </MapView>
      <View className='rounded-t-3xl mt-0 bg-white relative'>
            <View className='flex-row justify-between px-5 pt-10'>
               <View>
                  <Text className='text-lg text-gray-700'>
                     Chegada estimada
                  </Text>
                  <Text className='text-3xl font-extrabold text-gray-700'>
                     20-30 Minutos
                  </Text>
                  <Text className='mt-2 text-gray-700 font-semibold'>
                     Seu pedido está a caminho!
                  </Text>
               </View>
               <Image className='w-24 h-24' source={require('../assets/img/carabike.png')}/>
            </View>
            <View style={{backgroundColor: themeColors.bgColor(0.8)}} className='p-2 flex-row justify-between items-center rounded-full my-5 mx-2'>
               <View className='p-1 rounded-full' style={{backgroundColor:'rgba(255,255,255,0.4)'}}>
                  <Image className='h-16 w-16 rounded-full ' source={require('../assets/img/entregadorpic.jpeg')}/>
               </View>
               <View className='flex-1 ml-3'>
                  <Text className = 'text-md font-bold text-white'>
                     Jorge Silva Morais
                  </Text>
                  <Text className = 'text-white text-xs'>
                     Seu entregador
                  </Text>
               </View>
               <View className='flex-row items-center space-x-2'>
                  <TouchableOpacity className='bg-white p-3 rounded-full'>
                     <Icon.Phone fill={'green'}
                     strokeWidth={1}
                     stroke={'green'}/>
                  </TouchableOpacity>

                  <TouchableOpacity
                  onPress={()=>navigation.navigate('Home')} className='bg-white p-3 rounded-full'>
                     <Icon.X fill={themeColors.bgColor(1)}
                     strokeWidth={3}
                     stroke={'red'}/>
                  </TouchableOpacity>

               </View>
            </View>
        </View>
    </View>
  )
}