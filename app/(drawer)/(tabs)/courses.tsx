import { FlatList, View, Text, StyleSheet } from "react-native";
import { courses } from "../../../data/dummyData";

export default function CoursesScreen() {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={courses}
      keyExtractor={(item) => item.code}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.code}>{item.code}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.credits}>{item.credits} credit hours</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { marginBottom: 14, paddingBottom: 14, borderBottomWidth: 1, borderBottomColor: "#eee" },
  code: { fontSize: 14, fontWeight: "700", color: "#1d3557" },
  title: { fontSize: 16, marginVertical: 2 },
  credits: { fontSize: 13, color: "#888" },
});
