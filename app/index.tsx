import { StyleSheet } from 'react-native';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function HomeScreen() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Select a Rule to Test</ThemedText>
            <Link style={styles.link} href="/(tabs)">Classic Tabs Page</Link>
            <Link style={styles.link} href={"/button"}>Button Test</Link>
            <Link style={styles.link} href={"/image"}>Image Test</Link>
            <Link style={styles.link} href="/checkbox">Checkbox Test</Link>
            <Link style={styles.link} href={"/textInput"}>Text Input Test</Link>
            <Link style={styles.link} href={"/date-picker"}>Date Picker Test</Link>
            <Link style={styles.link} href={"/link-text"}>Link Text Test</Link>
            <Link style={styles.link} href={"/progress-indicator"}>Progress Indicator Test</Link>
            <Link style={styles.link} href={"/tabs"}>Tabs Test</Link>
            <Link style={styles.link} href={"/text"}>Text Test</Link>
            <Link style={styles.link} href={"/sheet"}>Sheet Test</Link>
            <Link style={styles.link} href={"/slider"}>Slider Test</Link>
            <Link style={styles.link} href={"/stepper"}>Stepper Test</Link>
            <Link style={styles.link} href={"/switch"}>Switch Test</Link>
            <Link style={styles.link} href={"/video-expo-av"}>{`Video Test (expo-av)`}</Link>
            <Link style={styles.link} href={"/video-expo-video"}>{`Video Test (expo-video)`}</Link>
            <Link style={styles.link} href={"/video-expo-av-hint"}>{`Video Hint Test (expo-av)`}</Link>
            <Link style={styles.link} href={"/video-expo-video-hint"}>{`Video Hint Test (expo-video)`}</Link>
            <Link style={styles.link} href={"/popover"}>Popover Test</Link>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    link: {
        fontSize: 18,
        color: '#007AFF', // Blue color to mimic a web link
        textDecorationLine: 'underline', // Optional: adds underline like a traditional link
    },
});