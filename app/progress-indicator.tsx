import { ActivityIndicator, StyleSheet } from 'react-native';
import { ThemedView } from "@/components/ThemedView"
import React from 'react';
import { ThemedText } from '@/components/ThemedText';

export default function ProgressIndicatorScreen() {
    return (
        <ThemedView>
            <ThemedView style={styles.container}>
                <ThemedText style={styles.title}>Testing "progress" rule</ThemedText>
            </ThemedView>
            <ThemedText style={styles.margin}>Default Passing Case</ThemedText>
            <ThemedView style={styles.container}>
                <ActivityIndicator accessibilityLabel='A passing loading indicator'/>
            </ThemedView>
            <ThemedText style={styles.margin} accessibilityLabel="I fail due to no label">Case 1: The Progress Indicator must have an accessibility label.  The one below doesn't so it fails.</ThemedText>
            <ThemedView style={styles.container}>
                <ActivityIndicator />
            </ThemedView>
            <ThemedText style={styles.margin} accessibilityLabel="I fail due to duplicate label">Case 2: The accessibility label must be unique.  This text has the same accessibility label as the progress indicator below so it fails the check</ThemedText>
            <ThemedView style={styles.container}>
                <ActivityIndicator accessibilityLabel='I fail due to duplicate label'/>
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
