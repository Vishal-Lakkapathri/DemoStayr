import React from "react";
import { View, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";

export const HomeLogo = () => (
	<View style={{ alignItems: "center" }}>
		<Octicons name="home" size={100} color="#e83e8c" />
		<Text
			style={{
				color: "white",
				fontSize: 30,
        fontWeight: '500',
				fontFamily: "Baskerville-Italic",
			}}
		>
			StayR
		</Text>
	</View>
);
