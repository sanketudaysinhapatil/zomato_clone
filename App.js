import { StyleSheet, Text, View , StatusBar } from 'react-native'
import React from 'react'
import AppNavigator from './src/AppNavigator'

const App = () => {
  return (
    <>
       <StatusBar
        animated={true}
        backgroundColor="#ff3044"
        translucent={true}
       
      />
    <AppNavigator/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})