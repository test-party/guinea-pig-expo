import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TextInputScreen() {
    const [field1Value, setField1Value] = useState("");
    const [field2Value, setField2Value] = useState("");
    const [field3Value, setField3Value] = useState("");
    const [field4Value, setField4Value] = useState("");

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.heading}>
                Testing "text-input" rule
            </ThemedText>

            {/* Pass Case: Visual Label + accessibilityLabel */}
            <Text
                style={styles.caseHeader}
                accessibilityElementsHidden={true}
                importantForAccessibility="no"
            >
                Pass Case: Visual Label + accessibilityLabel
            </Text>
            <View>
                <Text style={styles.label}>Number Field</Text>
                <TextInput
                    style={styles.input}
                    value={field1Value}
                    onChangeText={setField1Value}
                    placeholder="Enter a number"
                    keyboardType="numeric"
                    accessibilityLabel="This is the label for the input field"
                    accessible={true}
                />
            </View>

            {/* Fail Case: Visual Label Only (no accessibilityLabel) */}
            <Text
                style={styles.caseHeader}
                accessibilityElementsHidden={true}
                importantForAccessibility="no"
            >
                Fail Case: Visual Label Only (no accessibilityLabel)
            </Text>
            <View>
                <Text style={styles.label}>Number Field</Text>
                <TextInput
                    style={styles.input}
                    value={field2Value}
                    onChangeText={setField2Value}
                    placeholder="Enter a number"
                    keyboardType="numeric"
                    accessible={true}
                />
            </View>

            {/* Fail Case: accessibilityLabel Only (no visual label) */}
            <Text
                style={styles.caseHeader}
                accessibilityElementsHidden={true}
                importantForAccessibility="no"
            >
                Fail Case: accessibilityLabel Only (no visual label)
            </Text>
            <View>
                <TextInput
                    style={styles.input}
                    value={field3Value}
                    onChangeText={setField3Value}
                    placeholder="Enter a number"
                    keyboardType="numeric"
                    accessibilityLabel="This is the label for the input field"
                    accessible={true}
                />
            </View>

            {/* Fail Case: Placeholder Only (no visual label or accessibilityLabel) */}
            <Text
                style={styles.caseHeader}
                accessibilityElementsHidden={true}
                importantForAccessibility="no"
            >
                Fail Case: Placeholder Only (no visual label or
                accessibilityLabel)
            </Text>
            <View>
                <TextInput
                    style={styles.input}
                    value={field4Value}
                    onChangeText={setField4Value}
                    placeholder="Placeholder only"
                    keyboardType="numeric"
                    accessible={true}
                />
            </View>
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
    label: {
        fontSize: 14,
        marginBottom: 4,
        color: "#333",
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        backgroundColor: "#FFF",
    },
});
