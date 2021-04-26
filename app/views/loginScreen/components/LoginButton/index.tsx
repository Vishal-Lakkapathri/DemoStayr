import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../../../../styles/colors";

interface ButtonProps {
	title: string;
	disabled?: boolean;
	onPress: () => void;
}

export const Button = ({ title, disabled, onPress }: ButtonProps) => {
	return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[disabled ? styles.disabledContainer : styles.container]}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 55,
    width: '80%',
		borderRadius: 30,
		backgroundColor: colors.WHITE,
		alignItems: "center",
		justifyContent: "center",
	},
	disabledContainer: {
		height: 55,
    width: '80%',
		borderRadius: 30,
		backgroundColor: colors.DISABLED,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		color: colors.PINK,
		fontSize: 16,
		fontWeight: "bold",
	},
});
