import { StyleSheet } from "react-native";
import * as theme from "../constants/theme.js";

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	modal: {
		borderRadius: 4,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 4,
		elevation: 4,
		backgroundColor: theme.colors.white,
		borderRadius: 4,
		padding: 10,
	},
	option: {
		alignItems: "flex-start",
	},
	customPicker: {
		height: 28,
		flexDirection: "row",
		paddingTop: 6,
		justifyContent: "space-between",
		borderColor: theme.colors.solidGray,
		alignItems: "center",
		borderBottomWidth: 1,
		paddingVertical: 6,
	},

	vwClear: {
		flex: 0.2,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	textInput: {
		flex: 1,
		fontSize: 18,
	},

	vwSearch: {
		flex: 0.1,
		justifyContent: "center",
	},
	icSearch: {
		height: 20,
		width: 20,
	},
	searchContainer: {
		backgroundColor: theme.colors.white,
		width: "100%",
		height: 35,
		marginBottom: 6,
		flexDirection: "row",
		borderBottomWidth: 1,
		flex: 0,
		borderColor: theme.colors.gray2,
		paddingHorizontal: 10,
		borderRadius: 2,
	},
	boxSearchContainer: {
		width: "100%",
		height: 40,
		marginTop:8,
		flexDirection: "row",
		flex: 0,
		borderColor: theme.colors.gray2,
		paddingHorizontal: 10,
		borderRadius: 2,
		backgroundColor:"#F4F4F4"

	},
	boxVwSearch: {
		flex: 0.1,
		justifyContent: "center",
		backgroundColor:"#F4F4F4"

	},
	boxTextInput: {
		flex: 1,
		fontSize: 18,
		justifyContent: "center",
		color:"#9D9D9D"
	},
});
