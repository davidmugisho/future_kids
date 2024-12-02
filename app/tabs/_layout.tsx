import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function TabstLayout() {
  return (
    <>
    <StatusBar style="light"/>
    <Stack>
  <Stack.Screen name="index" options={{ headerShown:false}}  />
  <Stack.Screen name="splash" options={{ title:'Splash', headerShown:false }}/>
  </Stack>
  </>
  );
}
