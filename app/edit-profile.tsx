import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useProfile } from "../profileContext";


export default function EditProfileScreen() {
  
  const params = useLocalSearchParams<{ name?: string; bio?: string; programme?: string }>();
  const { updateProfile } = useProfile();
  const router = useRouter();

  const [name, setName] = useState(params.name ?? "");
  const [bio, setBio] = useState(params.bio ?? "");
  const [programme, setProgramme] = useState(params.programme ?? "");

  const handleSave = () => {
    updateProfile({ name, bio, programme });
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Full name" />

      <Text style={styles.label}>Bio</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        value={bio}
        onChangeText={setBio}
        placeholder="Short bio"
        multiline
      />

      <Text style={styles.label}>Programme</Text>
      <TextInput style={styles.input} value={programme} onChangeText={setProgramme} placeholder="Programme" />

      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 14, fontWeight: "600", marginTop: 16, marginBottom: 6, color: "#333" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, fontSize: 16 },
  multiline: { height: 90, textAlignVertical: "top" },
  button: { marginTop: 28, backgroundColor: "#1d3557", paddingVertical: 14, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
