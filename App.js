import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Expense from './screens/Expense'
import HomeProfile from './screens/HomeProfile'
import { AppProvider } from './context/AppContext'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
            component={HomeProfile}
          />
          <Stack.Screen
            name="Expense"
            options={{
              headerShown: false,
            }}
            component={Expense}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
