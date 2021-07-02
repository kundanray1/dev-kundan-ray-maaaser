import React from "react";
import { Image, TouchableOpacity } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";
import UserIconComponent from "./../assets/icons/userIconComponent";
import NumberFormat from "react-number-format";

export default DonationsDetail = ({
  profilePic,
  name,
  amount,
  date,
  textColor,
  ...props
}) => {
  return (
    <Block
      row
      style={{
        paddingVertical: 5,
        borderColor: theme.colors.gray2,
      }}
    >
      <Block
        row
        style={{
          alignItems: "flex-start",
        }}
      >
        {profilePic == "" ? (
          <UserIconComponent height={45} width={45} />
        ) : (
          <Image
            source={{ uri: profilePic }}
            style={{ height: 45, width: 45, borderRadius: 30 }}
          />
        )}
      </Block>
      <Block
        style={{
          flex: 4,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "700",textTransform:"capitalize"  }}>{name}</Text>
        <Text
          style={{ fontSize: 14, fontWeight: "700" }}
          color={theme.colors.solidGray}
        >
          {moment(date).format("DD MMM YYYY")}
        </Text>
      </Block>
      <Block
        middle
        style={{
          alignItems: "flex-end",
        }}
      >
        <NumberFormat
          value={amount/100}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          decimalScale={2}
          fixedDecimalScale={true}
          renderText={(formattedValue) => (
            <Text
              bold
              style={{
                paddingVertical: 4,
                fontSize: 18,
                fontSize: 16,
                fontWeight: "700",
              }}
              color={textColor}
            >
              {formattedValue}
            </Text>
          )}
        />
      </Block>
    </Block>
  );
};
