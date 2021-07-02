import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import  Svg  from "react-native-svg";
const FlaotingButton = ({ image, opacity, style,iconComponent, ...props }) => {
	return (
		<TouchableOpacity
			activeOpacity={opacity || 0.8}
			style={styles.touchableOpacityStyle}
			{...props}
		>
			{iconComponent}
			
		</TouchableOpacity>
	);
};

export default FlaotingButton;

const styles = StyleSheet.create({
	touchableOpacityStyle: {
		right: "5%",
		bottom: "2.5%",
		position: "absolute",
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
	},
	floatingButtonStyle: {
		resizeMode: "contain",
		width: 50,
		height: 50,
	},
});
