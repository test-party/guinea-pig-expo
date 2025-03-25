import Slider from "@react-native-community/slider";

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function SliderScreen() {
    const [slider1Value, setSlider1Value] = useState(0.2);
    const [slider2Value, setSlider2Value] = useState(0.5);

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.heading}>
                Testing "slider" rule
            </ThemedText>

            {/* Pass Case: custom .accessibilityLabel */}
            <ThemedText style={styles.caseHeader}>
                Pass Case: custom .accessibilityLabel
            </ThemedText>
            <View style={styles.sliderWrapper}>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={1}
                    value={slider1Value}
                    onValueChange={setSlider1Value}
                    minimumTrackTintColor="#4F46E5"
                    maximumTrackTintColor="#E5E7EB"
                    thumbTintColor="#6366F1"
                    accessibilityLabel="Volume"
                />
            </View>

            {/* Fail Case: no .accessibilityLabel (can't rely on default props)  */}
            <ThemedText style={styles.caseHeader}>
                {`Fail Case: no .accessibilityLabel (can't rely on default props)`}
            </ThemedText>
            <View>
                <View style={styles.sliderWrapper}>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={1}
                        value={slider2Value}
                        onValueChange={setSlider2Value}
                        minimumTrackTintColor="#4F46E5"
                        maximumTrackTintColor="#E5E7EB"
                        thumbTintColor="#6366F1"
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
        backgroundColor: "#f8f9fa",
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
    sliderWrapper: {
        marginTop: 10,
        marginBottom: 30,
        width: "100%",
    },
    slider: {
        width: "100%",
        height: 40,
    },
});
