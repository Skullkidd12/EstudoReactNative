import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import Carrinho from './screens/Carrinho'
const Stack = createNativeStackNavigator();

export default function Navigation() {
   return (
      <NavigationContainer>
         <Stack.Navigator 
               screenOptions={{
               headerShown: false,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Carrinho" component={Carrinho} />
         </Stack.Navigator>
         
      </NavigationContainer>
   );
}
