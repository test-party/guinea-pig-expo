import { useVideoPlayer, VideoView } from "expo-video";
import { ScrollView, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const videoSource: string =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function VideoScreen(): JSX.Element {
    const player1 = useVideoPlayer(videoSource, (player) => {
        player.loop = true;
    });

    const player2 = useVideoPlayer(videoSource, (player) => {
        player.loop = true;
    });

    const player3 = useVideoPlayer(videoSource, (player) => {
        player.loop = true;
    });

    return (
        <ThemedView style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <ThemedView style={styles.container}>
                    <ThemedText style={styles.title}>
                        Testing Accessibility Hint
                    </ThemedText>
                </ThemedView>

                {/* Pass Case: default props */}
                <View>
                    <ThemedText>Pass Case: default props</ThemedText>
                    <View style={styles.videoContainer}>
                        <VideoView style={styles.video} player={player1} />
                    </View>
                </View>

                {/* Pass Case: custom accessibilityLabel with an accessibilityHint */}
                <View>
                    <ThemedText>
                        Pass Case: custom accessibilityLabel with an accessibilityHint
                    </ThemedText>
                    <View style={styles.videoContainer}>
                        <VideoView
                            style={styles.video}
                            player={player2}
                            accessibilityLabel="Funny bunny11"
                            accessible={true}
                            accessibilityHint="Custom hint - double tap to play or pause."
                        />
                    </View>
                </View>

                {/* Fail Case: custom accessibilityLabel (no accessibilityHint) */}
                <View>
                    <ThemedText>
                        {`Fail Case: custom accessibilityLabel (no accessibilityHint)`}
                    </ThemedText>
                    <View style={styles.videoContainer}>
                        <VideoView
                            style={styles.video}
                            player={player3}
                            accessibilityLabel="Funny bunny22"
                            accessible={true}
                        />
                    </View>
                </View>
            </ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#f8f9fa",
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    container: {
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    videoContainer: {
        width: 320,
        height: 180,
        transform: [{ scale: 0.85 }],
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#000",
    },
    video: {
        width: "100%",
        height: "100%",
    },
});
