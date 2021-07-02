import React from "react";
import { Image, TouchableOpacity, Pressable } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import moment from "moment";
import ArrowRightIconComponent from "../assets/icons/arrowRightIconComponent";
import UserIconComponent from "../assets/icons/userIconComponent";
import NumberFormat from 'react-number-format';

export default ScheduleDonationCard = ({
	receiverName,
	amount,
	startDate,
	scheduleType,
	scheduleTransactionStatus,
	profilePic,
	...props
}) => {
	let scheduleTypeString;
	if (scheduleType == 1) {
		scheduleTypeString = "One Time";
	} else if (scheduleType == 2) {
		scheduleTypeString = "Daily";
	} else if (scheduleType == 3) {
		scheduleTypeString = "Weekly";
	} else if (scheduleType == 4) {
		scheduleTypeString = "Monthly";
	} else if (scheduleType == 5) {
		scheduleTypeString = "Quaterly";
	} else if (scheduleType == 6) {
		scheduleTypeString = "Half Yearly";
	} else if (scheduleType == 7) {
		scheduleTypeString = "Yearly";
	} else {
		scheduleTypeString = "Nth Day";
	}
let status=scheduleTransactionStatus==1?"SCHEDULING":
  scheduleTransactionStatus==2?"DISABLED":"CANCELLED"

	return (
		<Block
			row
			style={{
				alignItems:"center",
				paddingVertical: 12,
				paddingHorizontal: 20,
				borderRadius: 4,
				shadowRadius: 4,
				elevation: 4,
				backgroundColor: theme.colors.white,
			}}
		>
			<Block
				row
				style={{
					flex: 1,
					alignItems: "flex-start",
				}}
			>
			{
				profilePic!==""?
				<Image
					source={{uri:profilePic}}
					style={{ height: 45, width: 45, borderRadius: 30 }}
				/>
				:
				<UserIconComponent height={45} width={45}/>
			}
			</Block>
			<Block
				style={{
					flex: 4,
					justifyContent: "center",
				}}
			>
				<Block row style={{ flex: 0 }}>
					<Text
						style={{
							fontSize: 16,
							fontWeight: "700",
							textTransform: "capitalize",
						}}
					>
						{receiverName}
					</Text>
					<NumberFormat
                    value={amount/100}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    renderText={formattedValue => <Text 	color={theme.colors.green} style={{ fontSize: 16, fontWeight: "700",marginLeft:15 }}>{formattedValue}</Text>} 
                    />
				
				</Block>
				<Block center  row style={{ flex: 0 }}>
				<Text
					style={{ fontSize: 13, fontWeight: "700" }}
					color={theme.colors.solidGray}
				>
					{moment(startDate).format("DD MMM YYYY")}
				</Text>
				
				<Block style={{flex:0,marginLeft:10, backgroundColor: 
								status=="SCHEDULING"?theme.colors.schedulingBackground:
								status=="DISABLED"?theme.colors.disabledBackground:
                theme.colors.cancelledBackground,
               paddingVertical:4,paddingHorizontal:8,borderRadius:14}}>
				<Text
						style={{
							fontSize: 13,
							fontWeight: "700",
						}}
						 color={
						 	  status=="SCHEDULING"?theme.colors.schedulingText:
								status=="DISABLED"?theme.colors.disabledText:
                theme.colors.cancelledText
              }
					>
						{status}
					</Text>
				</Block>
				</Block>

			</Block>
			<TouchableOpacity
				activeOpacity={0.8}
				style={{
					flex: 1,
					alignItems: "flex-end",
					justifyContent: "center",
				}}
				{...props}
			>
				<ArrowRightIconComponent/>
			</TouchableOpacity>
		</Block>
	);
};
