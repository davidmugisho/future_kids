import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {Tabs} from "expo-router";
import phoneSignScreen from "./phoneSign_up";

export default function RootLayout() {
  return (
    <>
    <StatusBar style="light"/>
    <Stack>
  <Stack.Screen name="index" options={{ headerShown:false}}  />
  <Stack.Screen name="splash" options={{ title:'Splash', headerShown:false }}/>
  <Stack.Screen name="onboarding1" options={{ title:'onboarding1', headerShown:false , headerLeft:() => <></>}}/>
  <Stack.Screen name="onboarding2" options={{ title:'onboarding2', headerShown:false , headerLeft:() => <></> }}/>
  <Stack.Screen name="sign_up" options={{ title:'Sign up' ,headerShown: false,  headerLeft : () => <></>}}/>
  <Stack.Screen name="phoneSign_up" options={{ title: 'phoneSign up', headerShown: false , headerLeft:() => <></>}}/>
  <Stack.Screen name="verifyPhone" options={{ headerShown: false }} />
<Stack.Screen name="setPasswordNumber" options={{ headerShown: false }} />
  <Stack.Screen name="loading" options={{ headerShown: false }} />

  </Stack>

  </>
  );
}
