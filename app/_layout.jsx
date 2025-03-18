import { Stack, useRouter, useSegments } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeScreen from "../components/SafeScreen";
import { StatusBar } from "expo-status-bar";
import useAuthStore from "../store/authStore";
import { useEffect } from "react";
import { use } from "react";

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();

  const {token, checkAuth, user} = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [])

  useEffect(() => {
    const inAuthScreen = segments[0] === "(auth)";
    const isSignedIn = user && token;

    if (!inAuthScreen && !isSignedIn) router.replace("/(auth)");
    else if (inAuthScreen && isSignedIn) router.replace("/(tabs)");
  }, [use, token, segments]);

  console.log("segements:", segments);
  return (
    <SafeAreaProvider>
      <SafeScreen>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(auth)" />
        </Stack>
      </SafeScreen>
      <StatusBar style="dark"/>
    </SafeAreaProvider>
  );
}
