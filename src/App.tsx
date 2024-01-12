import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { BottomTabNavigator } from './navigators/BottomTab'

export const App: React.FC = () => {
  return(
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal'
  }
}
)