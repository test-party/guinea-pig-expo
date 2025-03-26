import React from "react";
import { StyleSheet, Text } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function NumberOfLinesRuleTestScreen() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.heading}>
                Testing "numberOfLines" rule
            </ThemedText>

            {/* Pass Case: No numberOfLines used */}
            <Text
                style={styles.caseHeader}
                accessibilityElementsHidden={true}
                importantForAccessibility="no"
            >
                Pass Case: No numberOfLines used
            </Text>
            <Text style={styles.testText}>
                This is a long paragraph that should wrap naturally based on the screen width and scale properly if the user increases text size.
            </Text>

            {/* Fail Case: numberOfLines used */}
            <Text
                style={styles.caseHeader}
                accessibilityElementsHidden={true}
                importantForAccessibility="no"
            >
                Fail Case: numberOfLines used
            </Text>
            <Text numberOfLines={2} style={styles.testText}>
                This is a long paragraph that will be truncated after two lines. This prevents the text from expanding fully at large sizes, which is an accessibility fail.
            </Text>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 22,
        fontWeight: "600",
        marginBottom: 16,
        textAlign: "center",
    },
    caseHeader: {
        marginTop: 30,
        marginBottom: 6,
        fontSize: 16,
        fontWeight: "500",
    },
    testText: {
        fontSize: 16,
        backgroundColor: "#F3F3F3",
        padding: 10,
        borderRadius: 6,
    },
});
