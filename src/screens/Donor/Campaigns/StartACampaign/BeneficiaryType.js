import React, { useState, useCallback } from "react";
import {
	FlatList,
	SafeAreaView,
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
import styles from "../../../../utility/globalStyles.js";

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
				<Text bold style={{ paddingVertical: 4, fontSize: 16 }}>
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
				<Block style={{flex:5}}>
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
        <View style={[styles.container,{marginTop:"120%"}]}>
					<View
						style={[
							styles.modal,
							{ width: WIDTH - 30, height: 200 },
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
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
};
