import React, { useState, useCallback } from "react";
import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	View,
	Dimensions,
	Modal,
	TextInput,
	TouchableOpacity,
} from "react-native";
import * as theme from "./../../../../constants/theme.js";
import {beneficiary} from "./Dummy.js";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Block, Text } from "../../../../components/Index.js";
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default BeneficiaryType = ({ navigation,beneficiaryType, setBeneficiaryType }) => {
	const [search, setSearch] = useState();
	const [filteredDataSource, setFilteredDataSource] = useState(beneficiary);
	const [masterDataSource, setMasterDataSource] = useState(beneficiary);
	const [beneficiaryModalVisible, setBeneficiaryTypeModalVisible] = useState(
		false
	);

	function searchFilterFunction(text) {
		if (text) {
			const newData = masterDataSource.filter(function (item) {
				const itemData = item.email
					? item.email.toUpperCase()
					: "".toUpperCase();
				const textData = text.toUpperCase();
				return itemData.indexOf(textData) > -1;
			});
			setFilteredDataSource(newData);
			setSearch(text);
		} else {
			setMasterDataSource(masterDataSource);
			setSearch(text);
		}
	}

	const onBeneficiaryTypeItem = useCallback(
		(email) => {
			setBeneficiaryType(email);
			setBeneficiaryTypeModalVisible(false);
		},
		[setBeneficiaryType]
	);

	const RenderBeneficiaryTypeOptions = ({ email }) => (
		<TouchableOpacity
			onPress={() => onBeneficiaryTypeItem(email)}
			style={{ marginVertical: 2 }}
		>
			<Block row>
				<Text bold style={{ paddingVertical: 4, fontSize: 18 }}>
					{email}
				</Text>
			</Block>
		</TouchableOpacity>
	);

	return (
		<SafeAreaView style={{ paddingVertical: 6 }}>
			<Text bold style={{ fontSize: 16 }}>
				Beneficiary Type
			</Text>
			<TouchableOpacity
				style={styles.customPicker}
				onPress={() =>
					setBeneficiaryTypeModalVisible(!beneficiaryModalVisible)
				}
			>
				<Block style={{flex:3}}>
					<Text
						bold
						style={{ fontSize: 16, color: theme.colors.solidGray }}
					>
						{beneficiaryType}
					</Text>
				</Block>
				<Block style={{flex:0.5, alignItems: "flex-end" }}>
					<AntDesign
						name="caretdown"
						size={16}
						color={theme.colors.solidGray}
					/>
				</Block>
			</TouchableOpacity>
			<Modal
				visible={beneficiaryModalVisible}
				transparent={true}
				animationType="fade"
				statusBarTranslucent={true}
				onRequestClose={() =>
					setBeneficiaryTypeModalVisible(false)
				}
			>
				<View style={styles.container}>
					<View
						style={[
							styles.modal,
							{ width: WIDTH - 40, height: 220 },
						]}
					>
						<Block style={styles.searchContainer}>
							<Block style={styles.vwSearch}>
								<Ionicons
									name="search"
									color="#676767"
									size={18}
								/>
							</Block>

							<TextInput
								placeholder="Search"
								placeholderTextColor="#999999"
								style={styles.textInput}
								onChangeText={(text) =>
									searchFilterFunction(text)
								}
								value={search}
							/>

							{search ? (
								<TouchableOpacity
									onPress={() => searchFilterFunction()}
									style={styles.vwClear}
								>
									<Ionicons
										name="close-circle-sharp"
										color="black"
										size={18}
									/>
								</TouchableOpacity>
							) : (
								<Block style={styles.vwClear} />
							)}
						</Block>

						<FlatList
							data={filteredDataSource}
							showsVerticalScrollIndicator={true}
							keyExtractor={(data) => {
								return data.id;
							}}
							renderItem={(data) => (
								<Block
									style={{ flex: 0, paddingHorizontal: 10 }}
								>
									<RenderBeneficiaryTypeOptions
										email={data.item.email}
									/>
								</Block>
							)}
						/>
						<TouchableOpacity activeOpacity={0.8} onPress={()=>{
							setBeneficiaryTypeModalVisible(false)
							navigation.navigate("Add Beneficiary")
						}} style={{ flex: 0, paddingVertical: 8,borderTopWidth:1,borderColor:theme.colors.gray2 }}>
							<Text
								bold
								style={{
									fontSize: 18,
									paddingHorizontal: 10,
									color: theme.colors.primary2,
								}}
							>
								+ Add beneficiary
							</Text>
						</TouchableOpacity >
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
	},
	modal: {
		borderRadius: 4,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 4,
		elevation: 4,
		borderColor: theme.colors.gray,
		backgroundColor: theme.colors.white,
		borderRadius: 3,
		paddingTop: 2,
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
});
