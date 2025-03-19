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
                <ExternalLink href='/'>External Link passes via text</ExternalLink>
                <ExternalLink href='/' accessibilityLabel='Passing External Link' />
                <Link href='/'>Internal Link passes via text</Link>
                <Link href='/' accessibilityLabel='Passing Internal Link' />
            </ThemedView>
            <ThemedText style={styles.margin}>Case 1: Expo Links fail with no text or Accessibilty Label</ThemedText>
            <ThemedView style={styles.container}>
                <Link href={"/"} />
                <ExternalLink href={"/"} />
            </ThemedView>
            <ThemedText style={styles.margin}>Case 2: Accessibility label must be unique.  The Expo Links below have the same accessibility label so they both fail the check. </ThemedText>
            <ThemedView style={styles.container}>
                <Link href={"/"} accessibilityLabel="I fail due to duplicate label">Internal</Link>
                <ExternalLink href={"/"} accessibilityLabel="I fail due to duplicate label">External</ExternalLink>
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
