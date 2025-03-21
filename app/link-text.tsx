import { StyleSheet } from 'react-native';
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Link } from 'expo-router';
import { ExternalLink } from '@/components/ExternalLink';

export default function LinkTextScreen() {
    return (
        <ThemedView>
            <ThemedView style={styles.container}>
                <ThemedText style={styles.title}>Testing "link text" rule</ThemedText>
            </ThemedView>
            <ThemedText style={styles.margin}>Default Passing Cases</ThemedText>
            <ThemedView style={styles.container}>
                <Link href={'/'} accessibilityLabel='Link to Home Page'>Passing Internal Link</Link>
                <ExternalLink href={'/'} accessibilityLabel='External Link'>Passing External Link</ExternalLink>
            </ThemedView>
            <ThemedText style={styles.margin}>Case 1: Accessibility label must be unique.  The Expo Links below have the same accessibility label so they both fail the check. </ThemedText>
            <ThemedView style={styles.container}>
                <Link href={'/'} accessibilityLabel="I fail due to duplicate label">Internal Duplicate</Link>
                <ExternalLink href={'/'} accessibilityLabel="I fail due to duplicate label">External Duplicate</ExternalLink>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        alignItems: "center"
    },
    title: {
        fontSize: 24,
    },
    margin: {
        marginLeft: 10,
        marginRight: 10
    }
});
