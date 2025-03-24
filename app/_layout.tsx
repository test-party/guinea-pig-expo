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
          <Stack.Screen name='index' options={{ headerTitle: "Pregame Mobile Test Pages" }} />
          <Stack.Screen name="(tabs)" options={{ headerTitle: "Classic Tabs", headerBackTitle: "Back" }} />
          <Stack.Screen name='button' options={{ headerTitle: "Button", headerBackTitle: "Back" }} />
          <Stack.Screen name='image' options={{ headerTitle: "Image", headerBackTitle: "Back" }} />
          <Stack.Screen name='checkbox' options={{ headerTitle: "Checkbox", headerBackTitle: "Back" }} />
          <Stack.Screen name='textInput' options={{ headerTitle: "Text Input", headerBackTitle: "Back" }} />
          <Stack.Screen name='date-picker' options={{ headerTitle: "DatePicker", headerBackTitle: "Back" }} />
          <Stack.Screen name='link-text' options={{ headerTitle: "Link Text", headerBackTitle: "Back" }} />
          <Stack.Screen name='progress-indicator' options={{ headerTitle: "Progress Indicator", headerBackTitle: "Back" }} />
          <Stack.Screen name='tabs' options={{ headerTitle: "Tabs", headerBackTitle: "Back" }} />
          <Stack.Screen name='text' options={{ headerTitle: "Text", headerBackTitle: "Back" }} />
          <Stack.Screen name='sheet' options={{ headerTitle: "Sheet", headerBackTitle: "Back" }} />
          <Stack.Screen name='slider' options={{ headerTitle: "Slider", headerBackTitle: "Home" }} />
          <Stack.Screen name='stepper' options={{ headerTitle: "Stepper", headerBackTitle: "Back" }} />
          <Stack.Screen name='switch' options={{ headerTitle: "Switch", headerBackTitle: "Back" }} />
          <Stack.Screen name='video-expo-av' options={{ headerTitle: "Video (expo-av)", headerBackTitle: "Back" }} />
          <Stack.Screen name='video-expo-video' options={{ headerTitle: "Video (expo-video)", headerBackTitle: "Back" }} />
          <Stack.Screen name='video-expo-av-hint' options={{ headerTitle: "Video Hint (expo-av)", headerBackTitle: "Back" }} />
          <Stack.Screen name='video-expo-video-hint' options={{ headerTitle: "Video Hint (expo-video)", headerBackTitle: "Back" }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
    </ThemeProvider>
  );
}
