import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

const FlaotingButton = ({ image,opacity,style, ...props }) => {
	return (
		<TouchableOpacity
			activeOpacity={opacity || 0.8}
			style={styles.touchableOpacityStyle}
			{...props}
			>
			<Image
				source={image}
				style={styles.floatingButtonStyle}
			/>
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
