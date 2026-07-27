import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Campus Connect</Text>
      <Text style={styles.description}>
        Campus Connect is a student companion app that brings announcements, courses,
        timetables, and campus news together in one place.
      </Text>

      <Text style={styles.label}>Developed by</Text>
      <Text style={styles.text}>Your Name</Text>

      <Text style={styles.label}>Student ID</Text>
      <Text style={styles.text}>10987654</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  appName: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  description: { fontSize: 15, color: "#444", marginBottom: 24 },
  label: { fontSize: 13, color: "#888", marginTop: 12 },
  text: { fontSize: 16, fontWeight: "500" },
});
