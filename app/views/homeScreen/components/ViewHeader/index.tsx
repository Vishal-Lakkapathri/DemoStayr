import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export const ViewHeader = ({ title }: { title: string }) => (
	<View style={styles.viewHeaderContainer}>
		<Text style={styles.viewHeaderText}>{title}</Text>
	</View>
);
