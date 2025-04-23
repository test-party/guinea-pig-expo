import { StyleSheet, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function ImageScreen() {
    return (
        <ThemedView>
            <ThemedView style={styles.container}>
                <ThemedText style={styles.title}>
                    Testing "image-alt" rule
                </ThemedText>
            </ThemedView>

            <ThemedText style={styles.margin}>Default Passing Case</ThemedText>
            <Image
                source={require("@/assets/images/favicon.png")}
                style={{ alignSelf: "center", width: 100, height: 100 }}
                accessibilityLabel="Image-Alt-Text-Description Passing"
                accessible={true}
            />

            <ThemedText style={styles.margin}>Fail Case: missing accessibilityLabel</ThemedText>
            <Image
                source={require("@/assets/images/react-logo.png")}
                style={{ alignSelf: "center", width: 100, height: 100 }}
            />

            <ThemedText style={styles.margin}>Fail Case: has the word "image" in the accessibilityLabel</ThemedText>
            <Image
                source={require("@/assets/images/favicon.png")}
                style={{ alignSelf: "center", width: 100, height: 100 }}
                accessibilityLabel="Image of ... Alt-Text-Description"
                accessible={true}
            />

            <ThemedText style={styles.margin}>Fail Case: has the word "icon" in the accessibilityLabel</ThemedText>
            <Image
                source={require("@/assets/images/favicon.png")}
                style={{ alignSelf: "center", width: 100, height: 100 }}
                accessibilityLabel="Icon of ... Alt-Text-Description"
                accessible={true}
            />

            <ThemedText style={styles.margin}>Fail Case: has the word "logo" in the accessibilityLabel</ThemedText>
            <Image
                source={require("@/assets/images/favicon.png")}
                style={{ alignSelf: "center", width: 100, height: 100 }}
                accessibilityLabel="Logo of ... Alt-Text-Description"
                accessible={true}
            />

            <ThemedText style={styles.margin}>Extra Case: Below Fold</ThemedText>
            <Image
                source={require("@/assets/images/favicon.png")}
                style={{ alignSelf: "center", width: 100, height: 100 }}
                accessibilityLabel="Image Below Fold"
                accessible={true}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
    },
    margin: {
        marginLeft: 10,
        marginRight: 10,
    },
});
