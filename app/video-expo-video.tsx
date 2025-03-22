import { useVideoPlayer, VideoView } from "expo-video";
import { ScrollView, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Video } from "expo-av";
import { useRef } from "react";

const videoSource: string =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function VideoScreen(): JSX.Element {
    const videoRef = useRef(null);

    const player1 = useVideoPlayer(videoSource, (player) => {
        player.loop = true;
    });

    const player2 = useVideoPlayer(videoSource, (player) => {
        player.loop = true;
    });

    const player3 = useVideoPlayer(videoSource, (player) => {
        player.loop = true;
    });

    const player4 = useVideoPlayer(videoSource, (player) => {
        player.loop = true;
    });

    const player5 = useVideoPlayer(videoSource, (player) => {
        player.loop = true;
    });

    const player6 = useVideoPlayer(videoSource, (player) => {
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

                {/* Pass Case: expo-av */}
                <View>
                    <ThemedText style={styles.margin}>
                        Pass Case: expo-av
                    </ThemedText>
                    <View style={styles.videoContainer}>
                        <Video
                            source={{ uri: videoSource }}
                            ref={videoRef}
                            useNativeControls
                            style={styles.video}
                            accessibilityLabel="Funny bunny expo-av"
                        />
                    </View>
                </View>

                {/* Pass Case: expo-video */}
                <View>
                    <ThemedText style={styles.margin}>
                        Pass Case: expo-video
                    </ThemedText>
                    <View style={styles.videoContainer}>
                        <VideoView style={styles.video} player={player1} />
                    </View>
                </View>

                {/* Pass Case: accessibilityLabel and accessible={true} */}
                <View>
                    <ThemedText style={styles.margin}>
                        Pass Case: accessibilityLabel and accessible={"{true}"}
                    </ThemedText>
                    <View style={styles.videoContainer}>
                        <VideoView
                            style={styles.video}
                            player={player2}
                            accessibilityLabel="Funny bunny"
                            accessible={true}
                        />
                    </View>
                </View>

                {/* Pass Case: accessibilityLabel and accessible={false} */}
                <View>
                    <ThemedText style={styles.margin}>
                        Pass Case: accessibilityLabel and accessible={"{false}"}
                    </ThemedText>
                    <View style={styles.videoContainer}>
                        <VideoView
                            style={styles.video}
                            player={player3}
                            accessibilityLabel="Funny bunny"
                            accessible={false}
                        />
                    </View>
                </View>

                {/* Pass Case: missing accessible=true */}
                <View>
                    <ThemedText style={styles.margin}>
                        Pass Case: missing accessible={"{true}"}
                    </ThemedText>
                    <View style={styles.videoContainer}>
                        <VideoView
                            style={styles.video}
                            player={player4}
                            accessibilityLabel="Funny bunny"
                        />
                    </View>
                </View>

                {/* Pass Case: existing testID */}
                <View>
                    <ThemedText style={styles.margin}>
                        Pass Case: existing testID
                    </ThemedText>
                    <View style={styles.videoContainer}>
                        <VideoView
                            style={styles.video}
                            player={player5}
                            accessibilityLabel="Funny bunny"
                            accessible={true}
                            testID="video-element"
                        />
                    </View>
                </View>

                {/* Fail Case: missing accessibilityLabel */}
                <View>
                    <ThemedText style={styles.margin}>
                        Fail Case: missing accessibilityLabel and accessible=
                        {"{true}"}
                    </ThemedText>
                    <View style={styles.videoContainer}>
                        <VideoView
                            style={styles.video}
                            player={player6}
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
