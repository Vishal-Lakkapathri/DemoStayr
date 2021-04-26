import React, { useRef } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
} from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";

interface FieldsProps {
	onChangeText: (text: string, inputType: string) => void;
}

export const ErrorBox = ({ message }: { message: string }) => (
	<View style={styles.errorBoxContainer}>
		<AntDesign name="exclamationcircle" size={12} color="black" />
		<Text style={styles.errorMessage}>{message}</Text>
	</View>
);

// export const ErrorBox = ({ message }: string) => {
// 	const rotation = useSharedValue(0);

// 	const animatedStyle = useAnimatedStyle(() => {
// 		return {
// 			transform: [{ rotateZ: `${rotation.value}deg` }],
// 		};
// 	});
// 	return (
// 		<View>
// 			<Animated.View style={[styles.errorBoxContainer, animatedStyle]} />
// 			<Text style={styles.fadingText}>Fading View!</Text>
// 		</View>
// 	);
// };

export const Fields = ({ onChangeText }: FieldsProps) => {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.textInputContainer}>
				<TextInput
					placeholder="User name"
					placeholderTextColor="#e83e8c"
					style={styles.textInput}
					maxLength={32}
					onChangeText={(text) => onChangeText(text, "userName")}
				/>
			</View>
			<View style={styles.textInputContainer}>
				<TextInput
					placeholder="Password"
					placeholderTextColor="#e83e8c"
					style={styles.textInput}
					maxLength={32}
					onChangeText={(text) => onChangeText(text, "password")}
					secureTextEntry
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		alignItems: "center",
		padding: 15,
	},
	textInputContainer: {
		flexDirection: "row",
		borderBottomColor: "white",
		borderBottomWidth: 1,
		marginVertical: 10,
		maxWidth: 300,
	},
	textInput: { fontSize: 14, flex: 1, padding: 10, margin: 0, color: "white" },
	errorBoxContainer: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#b80000",
		width: "80%",
		flexDirection: "row",
	},
	errorMessage: {
		color: "white",
		padding: 8,
	},
	fadingContainer: {
		padding: 20,
		backgroundColor: "powderblue",
	},
});
