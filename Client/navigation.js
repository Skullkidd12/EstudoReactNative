import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import Carrinho from './screens/Carrinho'
import PreparandoPedido from './screens/PreparandoPedido';
import DeliveryScreen from './screens/DeliveryScreen';
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
            <Stack.Screen name="PreparandoPedido"  component={PreparandoPedido} />
            <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
         </Stack.Navigator>
         
      </NavigationContainer>
   );
}
