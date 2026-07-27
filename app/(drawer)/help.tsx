import { FlatList, View, Text, StyleSheet } from "react-native";
import { faqs } from "../../data/dummyData";

export default function HelpScreen() {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={faqs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.question}>Q: {item.question}</Text>
          <Text style={styles.answer}>A: {item.answer}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { marginBottom: 16, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: "#eee" },
  question: { fontSize: 15, fontWeight: "600", marginBottom: 4 },
  answer: { fontSize: 14, color: "#444" },
});