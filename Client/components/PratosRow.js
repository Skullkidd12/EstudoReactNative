import { View, Text, Image } from 'react-native'
import React from 'react'

export default function PratosRow({item}) {
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl mb-3 mx-2" style={{shadowColor: "#000",elevation: 3,}}>
      <Image className='rounded-3xl' style={{height: 100, width:100}} source={item.image}/>
      <View className="flex flex-1 space-y-3"> 
        <View className='pl-3'>
            <Text className='text-xl'>
               {item.name}
            </Text>
            <Text className='text-gray-700'>
               {item.description}
            </Text>
        </View>
        <View className='flex-row justify-between pl-3 items-center'>
            <Text className='text-gray-700 text-lg font-bold'>
               R${item.price},00
            </Text>
        </View>
        <View className="flex-row items-center">

            {/** aqui entra o opacity touchable */}
        </View>
      </View>
    </View>
  )
}