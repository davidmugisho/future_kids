import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
    <StatusBar style="light"/>
    <Stack>
  <Stack.Screen name="index" options={{ headerShown:false}}  />
  <Stack.Screen name="splash" options={{ title:'Splash', headerShown:false }}/>
  <Stack.Screen name="onboarding1" options={{ title:'onboarding1', headerShown:false , headerLeft:() => <></>}}/>
  <Stack.Screen name="onboarding2" options={{ title:'onboarding2', headerShown:false , headerLeft:() => <></> }}/>
  <Stack.Screen name="sign_up" options={{ title:'sign_up', headerShown:false , headerLeft:() => <></> }}/>

  </Stack>
  </>
  );
}
