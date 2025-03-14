import { StyleSheet } from 'react-native';
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

export default function DatePickerScreen() {
    const [dateValue, setDateValue] = useState<Date>(new Date())
    return (
        <ThemedView>
            <ThemedView style={styles.container}>
                <ThemedText style={styles.title}>Testing "date-picker-label" rule</ThemedText>
            </ThemedView>
            <ThemedText style={styles.margin}>Default Passing Case</ThemedText>
            <ThemedView style={styles.container}>
                <DateTimePicker value={dateValue} accessibilityLabel='I Pass' />
            </ThemedView>
            <ThemedText style={styles.margin} accessibilityLabel="I fail due to duplicate label">Case 1: The accessibility label must be unique.  This text has the same accessibility label as the Date Picker below.</ThemedText>
            <ThemedView style={styles.container}>
                <DateTimePicker value={dateValue} accessibilityLabel='I fail due to duplicate label' />
            </ThemedView>
            <ThemedText style={styles.margin}>Case 2: Date Picker cannot have style "graphical" or "wheel" </ThemedText>
            <ThemedView style={styles.container}>
                <DateTimePicker value={dateValue} accessibilityLabel='I fail due to style graphical' />
                <DateTimePicker aria-label='Hello?' value={dateValue} accessibilityLabel='I fail due to style wheel' />
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
