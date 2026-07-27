import { FlatList, View, Text, StyleSheet } from "react-native";
import { announcements } from "../../data/dummyData";

export default function AnnouncementsScreen() {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={announcements}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { marginBottom: 16, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: "#eee" },
  title: { fontSize: 16, fontWeight: "600" },
  date: { fontSize: 12, color: "#888", marginVertical: 2 },
  text: { fontSize: 14, color: "#333" },
});
