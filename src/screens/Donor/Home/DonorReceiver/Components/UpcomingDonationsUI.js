import React from "react";
import * as theme from "constants/theme.js";
import {
	Block,
	Text,
	DonationsDetail,
} from "components/Index.js";
import { styles } from "./DonationsMadeUI.js";

export default UpcomingDonationsUI = ({
	upcomingDonationsData,
	navigation,
}) => {
	const renderUpcomingDonations = () => {
		return upcomingDonationsData.upcomingDonations
			.slice(0, 2)
			.map((item, index) => {
				return (
					<DonationsDetail
						key={index}
						profilePic={item.clientList[1].profilepic}
						name={item.clientList[1].account.fullname}
						amount={item.amount}
						date={item.upcomingtxndate}
						textColor={theme.colors.black}
					/>
				);
			});
	};
	return (
		<Block style={styles.container}>
			<Block row style={styles.titleContainer}>
				<Text style={styles.title}>Upcoming Donations</Text>
				<Text
					onPress={() => navigation.navigate("Upcoming Donations")}
					style={styles.subTitle}
					color={theme.colors.solidGray}
				>
					View All
				</Text>
			</Block>
			<Block style={styles.listContainer}>
				{renderUpcomingDonations()}
			</Block>
		</Block>
	);
};
