import React from "react";
import { Image, TouchableOpacity } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import UserIconComponent from "./../assets/icons/userIconComponent";

export default DonationsDetail = ({ profilePic, name, email, ...props }) => {
	return (
		<Block
			row
			style={{
				paddingTop: 5,
				paddingBottom: 10,
				borderBottomWidth: 0.8,
				borderColor: theme.colors.gray2,
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
				}}
			>
				<Text style={{ fontSize: 18, fontWeight: "700",textTransform:"capitalize"  }}>{name}</Text>

				<Block row center style={{ flex: 0 }}>
					<MaterialCommunityIcons
						name="email-outline"
						size={20}
						color={theme.colors.primary1}
						style={{ marginRight: 5 }}
					/>
					<Text
						style={{ fontSize: 14, fontWeight: "700", width: 220}} 
						numberOfLines={1}
						color={theme.colors.solidGray}
					>
						{email}
					</Text>
				</Block>
				<Block  row style={{ flex: 1,flexWrap: 'wrap',marginTop:1}}>
					<Block style={{ flex: 0, backgroundColor:"#DCF5FF",borderRadius:5,marginRight:6,marginBottom:4,paddingVertical:4,paddingHorizontal:12 }}>
					<Text style={{fontSize:12,fontWeight:"700"}} color="#0BB3F3">transaction.admin</Text>
				    </Block>
				    <Block style={{ flex: 0,backgroundColor:"#DCF5FF",borderRadius:5,marginRight:6,marginBottom:4,paddingVertical:4,paddingHorizontal:12 }}>
					<Text style={{fontSize:12,fontWeight:"700"}} color="#0BB3F3">member.admin</Text>
				    </Block>
				    <Block style={{ flex: 0,backgroundColor:"#DCF5FF",borderRadius:5,marginRight:6,marginBottom:4,paddingVertical:4,paddingHorizontal:12 }}>
					<Text style={{fontSize:12,fontWeight:"700"}} color="#0BB3F3">member.admin</Text>
				    </Block>
				</Block>
			</Block>
			<Block
				middle
				style={{
					flex: 1,
					alignItems: "flex-end",
				}}
			>
				<TouchableOpacity style={{ marginVertical: 2 }} {...props}>
					<Text
						bold
						style={{
							paddingVertical: 4,
							fontSize: 18,
							fontSize: 16,
							fontWeight: "700",
						}}
					>
						<MaterialCommunityIcons
							name="dots-horizontal"
							size={24}
							color={theme.colors.solidGray}
						/>
					</Text>
				</TouchableOpacity>
			</Block>
		</Block>
	);
};
