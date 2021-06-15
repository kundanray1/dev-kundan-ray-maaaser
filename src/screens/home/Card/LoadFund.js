import React from "react";
import BottomSheet from "reanimated-bottom-sheet";
import { Dimensions, Image, StyleSheet } from "react-native";
import {
	Block,
	Text,
	Input,
	Button,
	ErrorMessage,
} from "../../../components/Index.js";
import { Formik } from "formik";
import { LoadFundValidationSchema } from "./../../../utility/ValidationSchema.js";
import * as theme from "../../../constants/theme.js";
const WIDTH = Dimensions.get("window").width;

export const LoadFund = ({ bs1, amountFocus, setAmountFocusTrue ,setAmountFocusFalse }) => {

	const RenderHeader = () => (
		<Block style={styles.header}>
			<Block style={styles.panelHandle} />
		</Block>
	);
	const onSubmitLoadFund = (values) => {
		console.log(values);
	};
	const RenderContent = () => {
		return (
			<Block
				style={{
					flex: 0,
					paddingTop: 20,
					paddingBottom: 32,
					paddingHorizontal: 30,
					backgroundColor: "white",
				}}
			>
				<Block row center style={{ flex: 0 }}>
					<Image
						source={require("../../../assets/icons/image7.png")}
						style={{ height: 50, width: 50, marginRight: 10 }}
					/>
					<Text style={{ fontSize: 18, fontWeight: "700" }}>
						Nabil Bank
					</Text>
				</Block>
				<Formik
					initialValues={{
						amount: "",
					}}
					onSubmit={(values) => {
						onSubmitLoadFund(values);
					}}
					validationSchema={LoadFundValidationSchema}
				>
					{({
						handleChange,
						touched,
						setFieldTouched,
						handleSubmit,
						values,
						errors,
					}) => (
						<>
							<Input
								label="Amount"
								focus={amountFocus}
								onChangeText={handleChange("amount")}
								onBlur={() => {
									setFieldTouched("amount");
									setAmountFocusFalse
								}}
								number
								onFocus={setAmountFocusTrue}
								value={values.amount}
								style={{
									borderBottomColor: amountFocus
										? theme.colors.primary2
										: touched.amount && errors.amount
										? theme.colors.red
										: theme.colors.solidGray,
								}}
							/>
							<ErrorMessage
								error={errors.amount}
								visible={touched.amount}
							/>
			<Block style={{flex:0,paddingVertical:5}}>
							{!errors.amount ? (
								<Button onPress={handleSubmit}>
									<Text button style={{ fontSize: 18 }}>
										Load Fund
									</Text>
								</Button>
							) : (
								<Button>
									<Text button style={{ fontSize: 18 }}>
										Load Fund
									</Text>
								</Button>
							)}
							</Block>
						</>
					)}
				</Formik>
			</Block>
		);
	};

	return (
		<BottomSheet
			ref={bs1}
			snapPoints={[250, 0]}
			borderRadius={10}
			renderHeader={RenderHeader}
			renderContent={RenderContent}
			initialSnap={1}
			enabledGestureInteraction={false}
		/>
	);
};
const styles = StyleSheet.create({
	header: {
		backgroundColor: "#FFFFFF",
		borderTopWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderColor: theme.colors.gray2,
		paddingVertical: 10,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		alignItems: "center",
	},
	panelHandle: {
		width: WIDTH - 250,
		height: 4,
		borderRadius: 4,
		backgroundColor: "#00000040",
	},
});
