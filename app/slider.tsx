import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function SliderScreen() {
    const [slider1Value, setSlider1Value] = useState(0.2);
    const [slider2Value, setSlider2Value] = useState(0.5);
    const [slider3Value, setSlider3Value] = useState(0.6);
    const [slider4Value, setSlider4Value] = useState(0.7);
    const [slider5Value, setSlider5Value] = useState(0.9);

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.heading}>
                Slider Accessibility Cases
            </ThemedText>

            {/* ✅ Pass: Visual label + accessibilityLabel */}
            <View style={styles.card}>
                <Text style={styles.caseHeader}>✅ Visual label + accessibilityLabel</Text>
                <View style={styles.row}>
                    <Text style={styles.label}>Volume</Text>
                    <Text style={styles.valueText}>{Math.round(slider1Value * 100)}%</Text>
                </View>
                <Slider
                    style={styles.slider}
                    value={slider1Value}
                    onValueChange={setSlider1Value}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#4F46E5"
                    maximumTrackTintColor="#E5E7EB"
                    thumbTintColor="#6366F1"
                    accessibilityLabel="Volume slider"
                />
            </View>

            {/* ❌ Fail: Visual label only */}
            <View style={styles.card}>
                <Text style={styles.caseHeader}>❌ Visual label only</Text>
                <View style={styles.row}>
                    <Text style={styles.label}>Brightness</Text>
                    <Text style={styles.valueText}>{Math.round(slider2Value * 100)}%</Text>
                </View>
                <Slider
                    style={styles.slider}
                    value={slider2Value}
                    onValueChange={setSlider2Value}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#4F46E5"
                    maximumTrackTintColor="#E5E7EB"
                    thumbTintColor="#6366F1"
                />
            </View>

            {/* ❌ Fail: accessibilityLabel only */}
            <View style={styles.card}>
                <Text style={styles.caseHeader}>❌ accessibilityLabel only</Text>
                <Slider
                    style={styles.slider}
                    value={slider3Value}
                    onValueChange={setSlider3Value}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#4F46E5"
                    maximumTrackTintColor="#E5E7EB"
                    thumbTintColor="#6366F1"
                    accessibilityLabel="Contrast slider"
                />
            </View>

            {/* ❌ Fail: Duplicate accessibilityLabel */}
            <View style={styles.card}>
                <Text style={styles.caseHeader}>❌ Duplicate accessibilityLabel</Text>
                <View style={styles.row}>
                    <Text style={styles.label}>Setting A</Text>
                    <Text style={styles.valueText}>{Math.round(slider4Value * 100)}%</Text>
                </View>
                <Slider
                    style={styles.slider}
                    value={slider4Value}
                    onValueChange={setSlider4Value}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#4F46E5"
                    maximumTrackTintColor="#E5E7EB"
                    thumbTintColor="#6366F1"
                    accessibilityLabel="Setting slider"
                />
                <View style={styles.row}>
                    <Text style={styles.label}>Setting B</Text>
                    <Text style={styles.valueText}>{Math.round(slider5Value * 100)}%</Text>
                </View>
                <Slider
                    style={styles.slider}
                    value={slider5Value}
                    onValueChange={setSlider5Value}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#4F46E5"
                    maximumTrackTintColor="#E5E7EB"
                    thumbTintColor="#6366F1"
                    accessibilityLabel="Setting slider"
                />
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    heading: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 12,
        textAlign: "center",
    },
    card: {
        marginBottom: 12,
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#F6F6F6",
        elevation: 1,
    },
    caseHeader: {
        fontSize: 13,
        fontWeight: "500",
        marginBottom: 6,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4,
    },
    label: {
        fontSize: 14,
        color: "#333",
        flex: 1,
        paddingRight: 6,
    },
    valueText: {
        fontSize: 13,
        color: "#666",
    },
    slider: {
        width: "100%",
        height: 32,
    },
});
