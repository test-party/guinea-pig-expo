import { StyleSheet } from 'react-native';
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Button } from "react-native"

export default function ButtonScreen() {
    return (
        <ThemedView>
            <ThemedView style={styles.container}>
                <ThemedText style={styles.title}>Testing "button" rule</ThemedText>
            </ThemedView>
            <ThemedText style={styles.margin}>Default Passing Case</ThemedText>
            <Button title="I Pass" accessibilityLabel="I Pass" />
            <ThemedText style={styles.margin} accessibilityLabel="I fail due to duplicate label">Case 1: The accessibility label must be unique.  This text has the same accessibility label as the "Same" button so it fails the check</ThemedText>
            <Button title="I fail due to duplicate label" accessibilityLabel="I fail due to duplicate label" />
            <ThemedText style={styles.margin}>Case 2: Button's accessibility label cannot contain the word "button" so this button fails the check</ThemedText>
            <Button title='I fail due to "button"' accessibilityLabel='I fail due to "button"'/>
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
