import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: true }}>
        {/* "(tabs)" is the Dashboard screen - it renders the Bottom Tab Navigator
            and is the default screen shown when the drawer opens */}
        <Drawer.Screen
          name="(tabs)"
          options={{ title: "Dashboard", drawerLabel: "Dashboard" }}
        />
        <Drawer.Screen name="announcements" options={{ title: "Announcements" }} />
        <Drawer.Screen name="about" options={{ title: "About" }} />
        <Drawer.Screen name="help" options={{ title: "Help & Support" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}