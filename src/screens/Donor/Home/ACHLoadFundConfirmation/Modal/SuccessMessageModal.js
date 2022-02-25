import React from "react";
import {
	SafeAreaView,
	View,
	Modal,
	StyleSheet,
} from "react-native";
import * as theme from "constants/theme.js";
import {WIDTH} from "constants/theme.js";
import { Text } from "components/Index.js";
import { TickIcon } from "assets/icons/Index.js";

const SuccessMessageModal = ({
	successMessageModalVisible,
	setSuccessMessageModalVisible,
	navigation,
	message,
	screen,
}) => {
	return (
		<SafeAreaView>
			<Modal
				visible={successMessageModalVisible}
				transparent={true}
				animationType="fade"
				statusBarTranslucent={true}
				onRequestClose={() => {
					setSuccessMessageModalVisible(false);
					navigation.navigate(screen);
				}}
			>
				<View style={styles.container}>
					<View style={[styles.modal, { width: WIDTH - 45 }]}>
						<Text center style={styles.message}>
							{message}
						</Text>
						<View style={styles.icon}>
							<TickIcon />
						</View>
						<View style={{ paddingHorizontal: 30 }}>
							<Button
								onPress={() => {
									setSuccessMessageModalVisible(false);
									navigation.navigate(screen);
								}}
							>
								<Text button style={{ fontSize: 18 }}>
									OK
								</Text>
							</Button>
						</View>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
};

export default SuccessMessageModal;

export const styles = StyleSheet.create({
	icon: {
		paddingVertical: 25,
		alignItems: "center",
	},
	message: { fontSize: 18, fontWeight: "700" },
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(52, 52, 52, 0.8)",
	},
	modal: {
		borderRadius: 10,
		borderColor: theme.colors.gray,
		backgroundColor: theme.colors.white,
		paddingVertical: 30,
	},
});
