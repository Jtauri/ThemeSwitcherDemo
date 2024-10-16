import { Appbar, PaperProvider } from 'react-native-paper'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './styles'
import MainAppbar from './components/MainAppbar'
import Home from './screens/Home'
import Settings from './screens/Settings'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { ThemeContext } from './context/ThemeContext'
import ThemeProvider from './context/ThemeProvider'



export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <PaperProvider>
      <ThemeProvider>
        <NavigationContainer>
          <StatusBar backgroundColor='#666' barStyle='light-content' />
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{header: (props) => 
              <MainAppbar {...props} backgroundColor="#666" icon='cog' color='#fff' />
            }}
          >
            <Stack.Screen name="Home">
              {() =>
                <Home />
              }
            </Stack.Screen>
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  )
}

