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
            <Link style={styles.link} href="/button">Button Test</Link>
            <Link style={styles.link} href="/checkbox">Checkbox Test</Link>
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