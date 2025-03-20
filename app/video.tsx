import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet, View, Button } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const videoSource = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function VideoScreen() {
    const player = useVideoPlayer(videoSource, (player) => {
        player.loop = true;
        player.play();
    });

    const { isPlaying } = useEvent(player, "playingChange", {
        isPlaying: player.playing,
    });

    return (
        <ThemedView style={styles.screen}>
            <ThemedText style={styles.title}>Testing "video" rule</ThemedText>
            <View style={styles.videoContainer}>
                <VideoView
                    style={styles.video}
                    player={player}
                    allowsFullscreen
                    accessibilityLabel="Funny bunny"
                    accessibilityHint="A bunny hopping around"
                    accessible={true}
                    allowsPictureInPicture
                />
            </View>
            <View style={styles.controlsContainer}>
                <Button
                    title={isPlaying ? "Pause" : "Play"}
                    onPress={() => (isPlaying ? player.pause() : player.play())}
                    color="#007AFF"
                />
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#333",
    },
    videoContainer: {
        width: "100%",
        maxWidth: 400, // Prevents video from being too wide
        aspectRatio: 16 / 9, // Keeps a standard video aspect ratio
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },
    video: {
        width: "100%",
        height: "100%",
    },
    controlsContainer: {
        marginTop: 20,
        width: "80%",
        alignItems: "center",
    },
});
