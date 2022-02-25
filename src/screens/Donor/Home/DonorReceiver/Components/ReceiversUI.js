import React from "react";
import {
	Dimensions,
} from "react-native";
import * as theme from "constants/theme.js";
import {
	Block,
	Text,
	ReceiversDetail,
} from "components/Index.js";
import { styles } from "./DonationsMadeUI.js";

const HEIGHT = Dimensions.get("window").height;
export default ReceiversUI = ({
	receiversData,
	navigation
}) => {
	const renderReceivers = () => {
		return receiversData.receivers.clientsList
			.slice(0, 2)
			.map((item, index) => {
				return (
					<ReceiversDetail
						key={index}
						profilePic={item.profilepic}
						name={item.account.fullname}
						clientType={item.clienttype}
						onPress={() => {
							navigation.navigate("Donate From Receivers List", {
								accountid: item.account.accountid,
								fullname: item.account.fullname,
								routeName: "DonorReceiver",
							});
						}}
					/>
				);
			});
	};

	return (
			<Block style={[styles.container,{paddingBottom:80}]}>
			<Block row style={styles.titleContainer}>
				<Text style={styles.title}>
					Receivers
				</Text>
				<Text
					onPress={() => navigation.navigate("Receivers")}
					style={styles.subTitle}
					color={theme.colors.solidGray}
				>
					View All
				</Text>
			</Block>
			<Block style={styles.listContainer}>{renderReceivers()}</Block>
		</Block>
	);
};
