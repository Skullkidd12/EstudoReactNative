import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation';
import { Text, View } from 'react-native';
import { store } from './store'
import { Provider } from 'react-redux'

export default function App() {
   return (
   
   <Provider store={store} stabilityCheck="never">
      <Navigation/>
   </Provider>
   
);
}
