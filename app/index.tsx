import { router } from "expo-router";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import AppButton from "./components/AppButton";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Wellcome to my Auth App</Text>
      <AppButton
        text="Log In"
        onPress={() => {
          router.navigate("/authentication" as any);
        }}
        style={{ backgroundColor: "green", marginTop: 20 }}
      />

      <AppButton
        text="Create new account"
        onPress={() => {
          router.navigate("/authentication/register" as any);
        }}
        style={{ backgroundColor: "blue", marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    marginTop: 20,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    width: "50%",
    alignItems: "center",
  },
});
