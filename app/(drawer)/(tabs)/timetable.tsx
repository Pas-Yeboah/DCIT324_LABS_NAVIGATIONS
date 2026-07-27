import { FlatList, View, Text, StyleSheet } from "react-native";
import { timetable } from "../../../data/dummyData";

export default function TimetableScreen() {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={timetable}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.day}>{item.day} • {item.time}</Text>
          <Text style={styles.course}>{item.course}</Text>
          <Text style={styles.venue}>{item.venue}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { marginBottom: 14, paddingBottom: 14, borderBottomWidth: 1, borderBottomColor: "#eee" },
  day: { fontSize: 13, color: "#888" },
  course: { fontSize: 16, fontWeight: "600", marginVertical: 2 },
  venue: { fontSize: 14, color: "#444" },
});