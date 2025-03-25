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

    return (
        <ThemedView style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <ThemedView style={styles.container}>
                    <ThemedText type="title" style={styles.title}>
                        Testing Video Accessibility Label
                    </ThemedText>
                </ThemedView>

                {/* Pass Case: default props */}
                <View>
                    <ThemedText style={styles.margin}>
                        Pass Case: default props
                    </ThemedText>
                    <View style={styles.videoContainer}>
                        <VideoView 
                            style={styles.video}
                            player={player1} 
                        />
                    </View>
                </View>

                {/* Pass Case: custom accessibilityLabel */}
                <View>
                    <ThemedText style={styles.margin}>
                        Pass Case: custom accessibilityLabel
                    </ThemedText>
                    <View style={styles.videoContainer}>
                        <VideoView
                            style={styles.video}
                            player={player2}
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
        textAlign: "center",
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
        marginBottom: 20,
    },
    video: {
        width: "100%",
        height: "100%",
    },
    margin: {
        margin: 5,
    },
});
