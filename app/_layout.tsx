import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {Tabs} from "expo-router";
import phoneSignScreen from "./phoneSign_up";
import React from "react";

export default function RootLayout() {
  return (
    <>

    <StatusBar style="light"/>
    <Stack>
  <Stack.Screen name="index" options={{ headerShown:false}}  />
  <Stack.Screen name="splash" options={{ title:'Splash', headerShown:false }}/>
  <Stack.Screen name="onboarding1" options={{ title:'onboarding1', headerShown:false , }}/>
  <Stack.Screen name="onboarding2" options={{ title:'onboarding2', headerShown:false , headerLeft:() => <></> }}/>
  <Stack.Screen name="sign_up" options={{ title:'Sign up' ,headerShown: false,  headerLeft : () => <></>}}/>
  <Stack.Screen name="phoneSign_up" options={{ title: 'phoneSign up', headerShown: false , }}/>
  <Stack.Screen name="verifyphone" options={{ headerShown: false , headerLeft:() => <></> }} />
  <Stack.Screen name="setpasswordnumber" options={{ headerShown: false }} />
  <Stack.Screen name="loading" options={{ headerShown: false }} />
  <Stack.Screen name="emailSign_up" options={{ headerShown: false }} />
  <Stack.Screen name="verifyEmail" options={{ headerShown: false }} />
  <Stack.Screen name="sign_in" options={{ title:'Sign in' ,headerShown: false,  headerLeft : () => <></>}}/>
  <Stack.Screen name="Sign_in_phone" options={{ headerShown: false }} />
  <Stack.Screen name="Sign_in_email" options={{ headerShown: false }} />
  <Stack.Screen name="reset_password" options={{headerShown : false}} />




  </Stack>

  </>
  );
}
