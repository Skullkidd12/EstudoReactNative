import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect,useState } from 'react'
import { restaurantes } from '../constants';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restauranteSlice';
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/cartSlice';

export default function Carrinho() {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, SetGroupedItems] = useState({})
  const deliveryFee = 2
  const dispatch = useDispatch()


  useEffect(()=>{
      const items = cartItems.reduce((group,item)=>{
         if(group[item.id]){
               group[item.id].push(item);
         }else{
               group[item.id] = [item]
         }
         return group;
      },{})
      SetGroupedItems(items);
  },[cartItems])
  return (
    <View className='bg-white flex-1 items-baseline '>
      <SafeAreaView>
      <View className='relative py-4 pb-0' >
         <TouchableOpacity 
         onPress={()=> navigation.goBack()}
         style={{backgroundColor: themeColors.bgColor(1)}}
         className='absolute z-10 rounded-full p-1 top-5 left-2'>
            <Icon.ArrowLeft strokeWidth={3} stroke={'#fff'}/>
         </TouchableOpacity>
         <View className='space-y-1  bg-white'>
            <Text className='text-center font-bold text-xl '>
               Seu Carrinho
            </Text>
            <Text className='text-center text-gray-500 pb-2'>
               {restaurant.name}
            </Text>
         </View>
         {/*Delivery time */}
         <View style={{backgroundColor: themeColors.bgColor(0.2)}}
         className='flex-row px-4 py-2 items-center'>
            <Image source={require('../assets/img/carabike.png')} className='w-20 h-20 rounded-full'/>
            <Text className='flex-1 pl-4'>
               Entrega em 20-30 minutos
            </Text>
            <TouchableOpacity>
               <Text className='font-bold' style={{color:themeColors.text}}>
               Trocar
               </Text>
            </TouchableOpacity>
         </View>
         {/* dishes */}
         <ScrollView showsVerticalScrollIndicator={false}
         contentContainerStyle={{
            paddingBottom:50,
         }}
         className="bg-white pt-5">
            {
               Object.entries(groupedItems).map(([key,items])=>{
                  let dishes = items[0];
               return(
                  <View key={key}
                  className='flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3' style={{shadowColor: "#000",elevation: 3}}>
                     <Text className='font-bold' style={{color: themeColors.text}}>
                        {items.length}
                     </Text>
                     <Image className="h-14 w-14 rounded-full" source={dishes.image}/>
                     <Text className='flex-1 font-bold text-gray-700'>
                        {dishes.name}
                     </Text>
                     <Text className = 'font-semibold text-base'>R${dishes.price}</Text>
                     <TouchableOpacity className='p-1 rounded-full'
                     onPress={()=>dispatch(removeFromCart({id: dishes.id}))}
                     style={{backgroundColor: themeColors.bgColor(1)}}>

                        <Icon.Minus strokeWidth={2} height={20} width={20} stroke='white'/>

                     </TouchableOpacity>
                  </View>
               )
               }
            )
            }

         </ScrollView>
         {/* total */}
         
         <View style={{backgroundColor: themeColors.bgColor(0.2)}} className='p-6 px-8 rounded-t-3xl space-y-2'>
            <View className='flex-row justify-between'>
               <Text className ='text-gray-700'>
                  Subtotal
               </Text>
               <Text className ='text-gray-700'>
                  R${cartTotal}
               </Text>
            </View>
            <View className='flex-row justify-between'>
               <Text className ='text-gray-700'>
                  Taxa de Entrega
               </Text>
               <Text className ='text-gray-700'>
                  R${deliveryFee}
               </Text>
            </View>
            <View className='flex-row justify-between'>
               <Text className ='text-gray-700 font-extrabold text-lg'>
                  Total
               </Text>
               <Text className ='text-gray-700 font-extrabold text-lg'>
                  R${deliveryFee+cartTotal}
               </Text>
            </View>
            <View className='flex-row'>
               <TouchableOpacity
               onPress={()=>navigation.navigate('PreparandoPedido')}
               style={{backgroundColor:themeColors.bgColor(1)}}
               className='p-3 rounded-full w-full '>
                  <Text className='text-white text-center font-bold text-lg'>
                     Confirmar Pedido
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
      </SafeAreaView>
    </View>
  )
}