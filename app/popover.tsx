import { Button, StyleSheet } from 'react-native';
import { ThemedView } from "@/components/ThemedView"
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import Popover from 'react-native-popover-view';

export default function CheckboxScreen() {
    return (
        <ThemedView>
            <ThemedView style={styles.container}>
                <ThemedText style={styles.title}>Testing "popover-scales" rule</ThemedText>
            </ThemedView>
            <ThemedText style={styles.margin}>Default Passing Case</ThemedText>
            <ThemedView style={styles.container}>
                <Popover
                    from={(
                        <Button accessibilityLabel='Passing!' title='Passing!'></Button>
                    )}>
                    <ThemedView>
                        <ThemedText>This is the contents of the popover</ThemedText>
                    </ThemedView>
                </Popover>
            </ThemedView>
            <ThemedText style={styles.margin} accessibilityLabel="I fail due to no text">Case 1: The popover must have text.  This popover doesn't so it fails.</ThemedText>
            <ThemedView style={styles.container}>
                <Popover
                    from={(
                        <Button accessibilityLabel='Failing!' title='Failing!'></Button>
                    )}>
                    <ThemedView>
                        <ThemedText></ThemedText>
                    </ThemedView>
                </Popover>
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
