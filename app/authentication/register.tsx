import { isLoading } from "expo-font";
import { View, TextInput, Text } from "react-native";
import AppButton from "../components/AppButton";
import { styles } from "./styles";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "@/FirebaseConfig";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    setIsLoading(true);

    try {
      const response = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      console.log("response", response);
    } catch (error) {
      console.error(`Error on ${handleSignUp.name}:`, error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Register</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <AppButton
        text="Create Account"
        onPress={handleSignUp}
        isLoading={isLoading}
        style={styles.loginBtn}
      />
    </View>
  );
}
