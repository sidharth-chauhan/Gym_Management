import { Tabs } from "expo-router";



export default function RootLayout() {
  return(
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index"/>
      <Tabs.Screen name="member"/>
      <Tabs.Screen name="membership"/>
      <Tabs.Screen name="trainer"/>

    </Tabs>
  )
}