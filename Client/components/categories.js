import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { categories } from '../constants/index';
import { Image } from 'react-native';

export default function Categories() {


   {/* set state da categoria, tem um estado inicial de null*/}
   const [categoriaAtiva, SetCategoriaAtiva] = useState(null);


   return (
      <View className="mt-4">
         <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="overflow-visible"
            contentContainerStyle={{
               paddingHorizontal: 15,
            }}
         >
            {/*mapeia baseado no array de objetos 'categories' 
            o primeiro parametro é o item do objeto e o segundo é o indexador*/}

            {categories.map((category, index) => {
               {/*checa se o id da categoria atual é igual a categoria ativa, retornando true ou false*/}
               let isActive = category.id == categoriaAtiva;

               {/*muda as classes dos elementos caso a categoria atual e a categoria ativa seja igual*/}
               let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
               let textClass = isActive ? 'font-semibold text-gray-800' : ' text-gray-500';
               
               {/* o index entra como key na view, pq é o elemento que se repete baseado no numero de itens no array*/}
               return (
                  <View key={index} className="flex justify-center items-center mr-6">
                     <TouchableOpacity onPress={() => SetCategoriaAtiva(category.id)} className={`p-1 rounded-full shadow bg-gray-20 ${btnClass}`}>
                        <Image style={{ width: 45, height: 45 }} source={category.image} />
                     </TouchableOpacity>
                     <Text className={`text-sm ${textClass}`}>{category.name}</Text>
                  </View>
               );
            })}
         </ScrollView>
      </View>
   );
}
