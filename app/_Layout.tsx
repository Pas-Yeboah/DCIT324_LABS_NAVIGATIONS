import {Stack} from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
  
    <Stack initialRouteName="welcome" screenOptions={{ headerShown: false }}>
       
        <Stack.Screen name="welcome" />

        
        <Stack.Screen name="(drawer)" />

       
        <Stack.Screen
          name="edit-profile"
          options={{ headerShown: true, title: "Edit Profile", presentation: "card" }}
        />
  </Stack>
  )
}

export default RootLayout

