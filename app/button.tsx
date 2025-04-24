import { StyleSheet, Pressable, TouchableOpacity, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ButtonScreen() {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <ThemedView style={styles.screenContainer}>
                <ThemedView style={styles.container}>
                    <ThemedText type="title">Testing "button" rule</ThemedText>
                </ThemedView>

                <ThemedText style={styles.heading}>Using Button element</ThemedText>

                {/* Case 1: Default Passing Case */}
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.cardTitle}>Pass Case</ThemedText>
                    <ThemedText style={styles.cardDescription}>
                        This Button element passes because it has a unique accessibility
                        label.
                    </ThemedText>
                    <Button title="I Pass" accessibilityLabel="I Pass" />
                </ThemedView>

                {/* Case 2: Duplicate label */}
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.cardTitle}>Fail Case</ThemedText>
                    <ThemedText style={styles.cardDescription}>
                        This Button element fails because it has the same accessibility
                        label as another button.
                    </ThemedText>
                    <Button
                        title="I fail due to duplicate label"
                        accessibilityLabel="I fail due to duplicate label"
                    />
                </ThemedView>

                {/* Case 3: Duplicate label */}
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.cardTitle}>Fail Case</ThemedText>
                    <ThemedText style={styles.cardDescription}>
                        This Button element fails because it has the same accessibility
                        label as another button.
                    </ThemedText>
                    <Button
                        title="I fail due to duplicate label"
                        accessibilityLabel="I fail due to duplicate label"
                    />
                </ThemedView>

                {/* Case 4: "button" in label */}
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.cardTitle}>Fail Case</ThemedText>
                    <ThemedText style={styles.cardDescription}>
                        This Button element fails because the accessibility label
                        contains the word "button", which should be avoided.
                    </ThemedText>
                    <Button
                        title='I fail due to "button"'
                        accessibilityLabel='I fail due to "button"'
                    />
                </ThemedView>

                <ThemedText style={styles.heading}>Using Pressable element</ThemedText>

                {/* Case 5: Pressable with text inside (Correct, should pass) */}
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.cardTitle}>Pass Case</ThemedText>
                    <ThemedText style={styles.cardDescription}>
                        This Pressable element passes because it has text inside.
                    </ThemedText>
                    <Pressable onPress={() => {}} style={styles.button}>
                        <ThemedText style={styles.text}>Pressable with text</ThemedText>
                    </Pressable>
                </ThemedView>

                {/* Case 6: Pressable with an accessibility label (Pass case) */}
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.cardTitle}>Pass Case</ThemedText>
                    <ThemedText style={styles.cardDescription}>
                        This Pressable element passes because it has an accessibility label.
                    </ThemedText>
                    <Pressable onPress={() => {}} style={styles.button} accessibilityLabel="Add item">
                        <Ionicons name="add-circle" size={24} color="white" />
                    </Pressable>
                </ThemedView>

                {/* Case 7: Pressable without an visible text (Pass case) */}
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.cardTitle}>Pass Case</ThemedText>
                    <ThemedText style={styles.cardDescription}>
                        This Pressable element passes because it has text alongside the icon.
                    </ThemedText>
                    <Pressable onPress={() => {}} style={styles.button}>
                        <ThemedText style={styles.text}>Add new item</ThemedText>
                        <Ionicons name="add-circle" size={24} color="white" />
                    </Pressable>
                </ThemedView>

                {/* Case 8: Pressable without an accessibility label (Fail case) */}
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.cardTitle}>Fail Case</ThemedText>
                    <ThemedText style={styles.cardDescription}>
                        This Pressable element fails because it lacks an accessibility
                        label.
                    </ThemedText>
                    <Pressable onPress={() => {}} style={styles.button}>
                        <Ionicons name="add-circle" size={24} color="white" />
                    </Pressable>
                </ThemedView>

                {/* Case 9: Pressable with a generic accessibility label */}
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.cardTitle}>Fail Case</ThemedText>
                    <ThemedText style={styles.cardDescription}>
                        This Pressable element fails because the accessibility label is
                        too generic (contains "button").
                    </ThemedText>
                    <Pressable
                        onPress={() => {}}
                        style={styles.button}
                    >
                        <ThemedText style={styles.text}>
                            I fail due to "button"
                        </ThemedText>
                    </Pressable>
                </ThemedView>

                <ThemedText style={styles.heading}>Using TouchableOpacity element</ThemedText>

                {/* Case 10: Pass Case for Button with Icon */}
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.cardTitle}>Pass Case</ThemedText>
                    <ThemedText style={styles.cardDescription}>
                        This TouchableOpacity element passes because it has an accessibility label.
                    </ThemedText>
                    <TouchableOpacity
                        onPress={() => {}}
                        accessibilityLabel="Remove item"
                        style={styles.button}
                    >
                        <Ionicons name="remove-circle" size={24} color="white" />
                    </TouchableOpacity>
                </ThemedView>

                {/* Case 11: TouchableOpacity without an accessibility label (same as Pressable) */}
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.cardTitle}>Fail Case</ThemedText>
                    <ThemedText style={styles.cardDescription}>
                        This TouchableOpacity element fails because it doesn't have an
                        accessibility label on the parent element.
                    </ThemedText>
                    <TouchableOpacity onPress={() => {}} style={styles.button}>
                        <Ionicons name="add-circle" size={24} color="white" />
                    </TouchableOpacity>
                </ThemedView>

                {/* Case 12: TouchableOpacity with a generic accessibility label */}
                <ThemedView style={styles.card}>
                    <ThemedText style={styles.cardTitle}>Fail Case</ThemedText>
                    <ThemedText style={styles.cardDescription}>
                        This TouchableOpacity element fails because the accessibility
                        label is too generic (contains "button").
                    </ThemedText>
                    <TouchableOpacity
                        onPress={() => {}}
                        style={styles.button}
                    >
                        <ThemedText style={styles.text}>
                            I fail due to "button"
                        </ThemedText>
                    </TouchableOpacity>
                </ThemedView>
            </ThemedView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        paddingHorizontal: 20,
    },
    scrollViewContainer: {
        paddingBottom: 40,
    },
    container: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
    },
    margin: {
        marginVertical: 8,
        fontSize: 14,
        color: "#333",
    },
    card: {
        backgroundColor: "white",
        padding: 16,
        marginVertical: 10,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 14,
        color: "#555",
        marginBottom: 12,
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 250,
        alignSelf: "center",
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "500",
    },
    heading: {
        fontSize: 21,
        fontWeight: "bold",
        marginTop: 25,
        marginBottom: 10,
        color: "navy",
    },
});
