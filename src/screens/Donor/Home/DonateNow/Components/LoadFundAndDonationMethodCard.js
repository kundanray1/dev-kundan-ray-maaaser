import React from "react";
import { TouchableOpacity, Image,StyleSheet } from "react-native";
import * as theme from "constants/theme.js";
import { Block, Text } from "components/Index.js";
import { ArrowRightIcon } from "assets/icons/Index.js";

export default LoadFundAndDonationMethodCard = ({
	iconComponent,
	label,
	...props
}) => {
	return (
		<TouchableOpacity
			activeOpacity={1}
			style={styles.cardContainer}
			{...props}
		>
			<Block row style={styles.cardInnerContainer}>
				<Block row style={styles.iconContainer}>
					{iconComponent}
				</Block>
				<Block style={styles.labelContainer}>
					<Text style={styles.label}>{label}</Text>
				</Block>
				<Block style={styles.arrowRightIconContainer}>
					<ArrowRightIcon />
				</Block>
			</Block>
		</TouchableOpacity>
	);
};

export const styles = StyleSheet.create({
	cardContainer: {
		paddingHorizontal: 16,
		marginVertical: 4,
	},
	cardInnerContainer: {
		alignItems: "center",
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 3,
		shadowRadius: 3,
		elevation: 3,
		backgroundColor: theme.colors.white,
	},
	iconContainer: {
		flex: 1,
		alignItems: "flex-start",
	},
	labelContainer: {
		flex: 4,
		marginLeft: 10,
		justifyContent: "center",
	},
	label: { fontSize: 16, fontWeight: "700" },
	arrowRightIconContainer: {
		alignItems: "flex-end",
		justifyContent: "center",
	},
});
