import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface IAppButtonProps {
  text: string;
  onPress: () => void;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
}

export default function AppButton(props: IAppButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, props.style ?? {}]}
      onPress={props.onPress}
    >
      {props.isLoading ? (
        <ActivityIndicator size="small" color={props.textColor ?? "white"} />
      ) : (
        <Text style={{ color: props.textColor ?? "white" }}>{props.text}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#03adfc",
    padding: 10,
    borderRadius: 5,
    width: "50%",
    alignItems: "center",
  },
});
