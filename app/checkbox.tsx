import { StyleSheet, View } from 'react-native';
import { ThemedView } from "@/components/ThemedView"
import React, { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import Checkbox from 'expo-checkbox';

export default function CheckboxScreen() {
    const [isChecked, setIsChecked] = useState(false);
    const [isUnchecked, setIsUnchecked] = useState(true);
    return (
        <ThemedView>
            <ThemedView style={styles.container}>
                <ThemedText style={styles.title}>Testing "checkbox" rule</ThemedText>
            </ThemedView>
            <ThemedText style={styles.margin}>Default Passing Case</ThemedText>
            <ThemedView style={styles.container}>
                <Checkbox accessibilityLabel="A valid checkbox" value={isChecked} onValueChange={setIsChecked} />
                <Checkbox accessibilityLabel="A valid unchecked checkbox" value={isUnchecked} onValueChange={setIsUnchecked} />
            </ThemedView>
            <ThemedText style={styles.margin} accessibilityLabel="I fail due to no label">Case 1: The checkbox must have an accessibility label.  This checkbox doesn't so it fails.</ThemedText>
            <ThemedView style={styles.container}>
                <Checkbox value={isChecked} onValueChange={setIsChecked} />
            </ThemedView>
            <ThemedText style={styles.margin}>Case 2: The accessibility label must be unique.  This text has the same accessibility label as the checkbox below so it fails the check</ThemedText>
            <ThemedView style={styles.container} accessibilityLabel="I fail due to duplicate label">
                <Checkbox accessibilityLabel="I fail due to duplicate label" value={isChecked} onValueChange={setIsChecked} />
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
