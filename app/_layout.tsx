import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name='index' options={{ headerTitle: "Pregame Mobile Test Pages"}}/>
        <Stack.Screen name="(tabs)" options={{ headerTitle: "Tabs", headerBackTitle: "Home" }} />
        <Stack.Screen name='button' options={{ headerTitle: "Button", headerBackTitle: "Home" }} />
        <Stack.Screen name='image' options={{ headerTitle: "Image", headerBackTitle: "Home" }} />
        <Stack.Screen name='checkbox' options={{ headerTitle: "Checkbox", headerBackTitle: "Home" }} />
        <Stack.Screen name='textInput' options={{ headerTitle: "Text Input", headerBackTitle: "Home" }} />
        <Stack.Screen name='date-picker' options={{ headerTitle: "DatePicker", headerBackTitle: "Home" }} />
        <Stack.Screen name='link-text' options={{ headerTitle: "Link Text", headerBackTitle: "Home" }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
