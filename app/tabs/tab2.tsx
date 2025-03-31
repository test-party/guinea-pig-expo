import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ThemedView>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Testing "tabs" rule</ThemedText>
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.margin}>Tab 2 passes</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
  },
  margin: {
    marginLeft: 10,
    marginRight: 10
  }
});