import React,{useState} from "react";
import {
	StyleSheet,
	SafeAreaView,
	Modal,
	Dimensions,
	View,
	ActivityIndicator,
} from "react-native";
import * as theme from "../constants/theme";
import Text from "./Text";

const WIDTH = Dimensions.get("window").width;

export default CustomActivityIndicator = ({ label, isLoading, ...props }) => {
	const [loading, setLoading] = useState(isLoading);

	return (
		<SafeAreaView>
			<Modal
				visible={loading}
				transparent={true}
				statusBarTranslucent={true}
				onRequestClose={() => setLoading(!loading)}
			>
				<View style={styles.container}>
					<View style={[styles.modal, { width: WIDTH - 50 }]}>
						<ActivityIndicator
							size="large"
							color={theme.colors.primary2}
						/>
						<Text
							center
							style={{
								fontSize: 16,
								fontWeight: "500",
								margin: 10,
							}}
						>
							{label}
						</Text>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(52, 52, 52, 0.8)",
	},
	modal: {
		flexDirection: "row",
		borderRadius: 6,
		borderWidth: 1,
		borderColor: theme.colors.gray,
		backgroundColor: theme.colors.white,
		paddingVertical: 30,
		paddingHorizontal: 20,
	},
});
