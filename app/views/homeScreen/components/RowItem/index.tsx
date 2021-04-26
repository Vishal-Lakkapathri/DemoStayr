import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../../../../styles/colors";

interface RowItemProps {
	name: string;
	height: string;
	mass: string;
	gender: string;
	birthYear: string;
}

const Avatar = () => (
	<Image
		style={styles.avatar}
		source={{
			uri: "https://tinyurl.com/vztkj9rj",
		}}
	/>
);

const TextView = ({ title, value }: { title: string; value: string }) => (
	<View style={styles.textContainer}>
		<Text style={styles.textHeader}>{title}: </Text>
		<Text style={styles.textInfo}>{value.toUpperCase()}</Text>
	</View>
);

export const RowItem = ({
	name,
	height,
	mass,
	gender,
	birthYear,
}: RowItemProps) => {
	return (
		<View style={styles.mainContainer}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<View style={{ flexDirection: "column", alignItems: "flex-start" }}>
					<TextView title="Name" value={name} />
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<TextView title="Height" value={height} />
						<TextView title="Mass" value={mass} />
					</View>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<TextView title="Gender" value={gender} />
						<TextView title="DOB" value={birthYear} />
					</View>
				</View>
				<Avatar />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		flexDirection: "column",
		paddingVertical: 3,
		paddingHorizontal: 8,
	},
	textContainer: { flexDirection: "row", alignItems: "center", padding: 2 },
	textHeader: {
		fontSize: 16,
		fontWeight: "bold",
		marginTop: 3,
		marginBottom: 3,
		color: colors.ORANGE,
	},
	textInfo: {
		fontSize: 14,
		marginRight: 4,
		marginTop: 3,
    marginBottom: 3,
		fontWeight: "600",
		color: colors.BLACK,
	},
	avatar: {
		width: 70,
		height: 70,
		borderRadius: 100,
	},
});
