import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
  <Stack.Screen name="index" options={{ title:'home'}} />
  <Stack.Screen name="splash" options={{ title:'Splash'}}/>
  </Stack>
  );
}
