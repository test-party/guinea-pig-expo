import Slider from '@react-native-community/slider';

import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function SliderScreen() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.heading}>
                Testing "slider" rule
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
                <Text style={styles.label}>Slider</Text>
                <Slider
                    style={{width: 200, height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    // accessibilityLabel="sliders"
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
