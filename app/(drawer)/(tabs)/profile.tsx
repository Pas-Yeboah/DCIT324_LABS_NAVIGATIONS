import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useProfile } from "../../../profileContext";

export default function ProfileScreen() {
  const { profile } = useProfile();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.bio}>{profile.bio}</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Index Number</Text>
        <Text style={styles.value}>{profile.indexNumber}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Programme</Text>
        <Text style={styles.value}>{profile.programme}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Level</Text>
        <Text style={styles.value}>{profile.level}</Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() =>
          router.push({
            pathname: "/edit-profile",
            params: {
              name: profile.name,
              bio: profile.bio,
              programme: profile.programme,
            },
          })
        }
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  name: { fontSize: 22, fontWeight: "bold" },
  bio: { fontSize: 14, color: "#555", marginTop: 4, marginBottom: 20 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#eee" },
  label: { fontSize: 14, color: "#888" },
  value: { fontSize: 14, fontWeight: "600" },
  button: { marginTop: 28, backgroundColor: "#1d3557", paddingVertical: 14, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});