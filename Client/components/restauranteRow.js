import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { restaurantes } from '../constants'
import RestaurantCard from './restaurantCard'

export default function RestauranteRow({titulo,descricao,restaurant}) {
  return (
    <View>
      <View className='flex-row justify-between items-center px-4'>
         <View>
            <Text className='font-bold text-lg'>{titulo}</Text>
            <Text className='text-gray-500 text-xs'>{descricao}</Text>
         </View>
         <TouchableOpacity>
            <Text style = {{color: themeColors.text}} className='font-semibold'>See All</Text>
         </TouchableOpacity>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
         paddingHorizontal: 15
      }}
      className='overflow-visible py-5'>  

      {
         restaurantes.restaurants.map((restaurant, index)=>{
            return(
               <RestaurantCard
               item={restaurant}
               key={index}
               />
            )
         })
      } 
     
      </ScrollView>
    </View>
  )
}