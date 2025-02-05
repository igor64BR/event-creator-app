import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import AppButton from "../components/AppButton";
import { styles } from "./styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "@/FirebaseConfig";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );

      console.log("response", response);
    } catch (error: any) {
      if (error.code === "auth/invalid-credential") {
        ToastAndroid.show("Invalid credentials", ToastAndroid.SHORT);
      } else {
        console.error(`Error on ${handleLogin.name}:`, error);
        ToastAndroid.show(
          "An error occurred on login attempt",
          ToastAndroid.SHORT
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
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
        text="Log In"
        onPress={handleLogin}
        isLoading={isLoading}
        style={styles.loginBtn}
      />
    </View>
  );
}
