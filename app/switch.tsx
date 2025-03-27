import React, { useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function SwitchAccessibilityTestScreen() {
    const [wifiEnabled, setWifiEnabled] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [genericToggle1, setGenericToggle1] = useState(true);
    const [genericToggle2, setGenericToggle2] = useState(false);

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.heading}>
                Testing Switch Accessibility Label
            </ThemedText>

            {/* ✅ Pass: Visible label + accessibilityLabel */}
            <View style={styles.card}>
                <Text
                    style={styles.caseHeader}
                    accessibilityElementsHidden={true}
                    importantForAccessibility="no"
                >
                    ✅ Pass: Visible label + accessibilityLabel
                </Text>
                <View style={styles.row}>
                    <Text style={styles.label}>Wi-Fi</Text>
                    <Switch
                        value={wifiEnabled}
                        onValueChange={setWifiEnabled}
                        accessibilityLabel="Wi-Fi toggle"
                    />
                </View>
            </View>

            {/* ✅ Pass: Visible label only */}
            <View style={styles.card}>
                <Text
                    style={styles.caseHeader}
                    accessibilityElementsHidden={true}
                    importantForAccessibility="no"
                >
                    ✅ Pass: Visible label only
                </Text>
                <View style={styles.row}>
                    <Text style={styles.label}>Notifications</Text>
                    <Switch
                        value={notificationsEnabled}
                        onValueChange={setNotificationsEnabled}
                    />
                </View>
            </View>

            {/* ✅ Pass: accessibilityLabel only (unique) */}
            <View style={styles.card}>
                <Text
                    style={styles.caseHeader}
                    accessibilityElementsHidden={true}
                    importantForAccessibility="no"
                >
                    ✅ Pass: accessibilityLabel only (unique)
                </Text>
                <View style={styles.row}>
                    <View style={{ flex: 1 }} />
                    <Switch
                        value={darkMode}
                        onValueChange={setDarkMode}
                        accessibilityLabel="Dark Mode toggle"
                    />
                </View>
            </View>

            {/* ❌ Fail: accessibilityLabel only (not unique) */}
            <View style={styles.card}>
                <Text
                    style={styles.caseHeader}
                    accessibilityElementsHidden={true}
                    importantForAccessibility="no"
                >
                    ❌ Fail: accessibilityLabel only (not unique)
                </Text>
                <View style={styles.row}>
                    <View style={{ flex: 1 }} />
                    <Switch
                        value={genericToggle1}
                        onValueChange={setGenericToggle1}
                        accessibilityLabel="Toggle"
                    />
                </View>
                <View style={styles.row}>
                    <View style={{ flex: 1 }} />
                    <Switch
                        value={genericToggle2}
                        onValueChange={setGenericToggle2}
                        accessibilityLabel="Toggle"
                    />
                </View>
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
        marginBottom: 24,
        textAlign: "center",
    },
    card: {
        marginBottom: 20,
        padding: 16,
        borderRadius: 10,
        backgroundColor: "#F6F6F6",
        elevation: 2,
    },
    caseHeader: {
        fontSize: 15,
        fontWeight: "500",
        marginBottom: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 4,
    },
    label: {
        fontSize: 16,
        color: "#333",
        flex: 1,
        paddingRight: 10,
    },
});
