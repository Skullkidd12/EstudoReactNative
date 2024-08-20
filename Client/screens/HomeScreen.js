import { View, Text, TextInput, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import Categories from '../components/categories';
import { restaurantes, restaurantes2, restaurantes3 } from '../constants';
import RestauranteRow from '../components/restauranteRow';


export default function HomeScreen() {
   return (
      <SafeAreaView className="bg-white">
         <StatusBar barStyle="dark-content" />
         {/*Barra Pesquisa*/}
         <View className="flex-row items-center space-x-2 px-4 pb-2 pt-2">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
               <Icon.Search height={'25'} width={'25'} stroke={'gray'} />
               <TextInput placeholder="Restaurantes" className="ml-2 flex-1" />
               {/*Localizacao*/}
               <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                  <Icon.MapPin height={'20'} width={'20'} stroke={'gray'} />
                  <Text className="text-gray-500">São Paulo</Text>
               </View>
            </View>
            {/*botaoslider*/}
            <TouchableOpacity>
               <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 rounded-full">
                  <Icon.Sliders height={'20'} width={'20'} strokeWidth={2.5} stroke={'#fff'} />
               </View>
            </TouchableOpacity>
         </View>
         {/* main*/}
         <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
               paddingBottom: 20,
            }}
         >
            {/*categorias*/}
            <Categories />
            {/* restaurantes */}
            <View className='mt-5 mb-5 pb-7'>
               {
                  [restaurantes].map((item,index)=>{
                     return(
                        <RestauranteRow
                        key={index}
                        titulo ={item.title}
                        restaurant={item.restaurants}
                        descricao ={item.description}/>
                     )
                  })
               }
               {
                  [restaurantes2].map((item,index)=>{
                     return(
                        <RestauranteRow
                        key={index}
                        titulo ={item.title}
                        restaurant={item.restaurants}
                        descricao ={item.description}/>
                     )
                  }) 
               }
                {
                  [restaurantes3].map((item,index)=>{
                     return(
                        <RestauranteRow
                        key={index}
                        titulo ={item.title}
                        restaurant={item.restaurants}
                        descricao ={item.description}/>
                     )
                  })

                  
               }
            </View>
         </ScrollView>
      </SafeAreaView>
   );
}
