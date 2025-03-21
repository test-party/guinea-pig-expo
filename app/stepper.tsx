import { StyleSheet } from 'react-native';
import { ThemedView } from "@/components/ThemedView"
import React, { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import UIStepper from 'react-native-ui-stepper';

export default function StepperScreen() {
    const [value, setValue] = useState(0)
    return (
        <ThemedView>
            <ThemedView style={styles.container}>
                <ThemedText style={styles.title}>Testing "steppers" rule</ThemedText>
            </ThemedView>
            <ThemedText style={styles.margin}>Default Passing Case</ThemedText>
            <ThemedView style={styles.container}>
                <ThemedText>{value}</ThemedText>
                <UIStepper onValueChange={(value: number) => { setValue(value) }}></UIStepper>
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
