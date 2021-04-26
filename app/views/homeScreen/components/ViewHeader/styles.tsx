import { StyleSheet } from "react-native";

import colors from '../../../../styles/colors'

export default StyleSheet.create({
	viewHeaderContainer: {
		height: 45,
		paddingVertical: 5,
		paddingHorizontal: 10,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: colors.GRAY,
	},
	viewHeaderText: {
		color: "#fff",
		fontWeight: '600',
		textAlignVertical: "center",
		fontSize: 16,
		paddingLeft: 5,
	},
});
