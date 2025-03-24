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
