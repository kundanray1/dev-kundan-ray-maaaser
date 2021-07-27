import React from "react";
import { Image, TouchableOpacity,Dimensions } from "react-native";
import * as theme from "../constants/theme.js";
import Block from "./Block";
import Text from "./Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";
import UserIconComponent from "./../assets/icons/userIconComponent";
import NumberFormat from "react-number-format";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

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
      }}
    >
      <Block
        row
        style={{
          flex: 0.8,
          alignItems: "flex-start",
        }}
      >
        {profilePic == "" ? (
          <UserIconComponent height={"100%"} width={"70%"} />
        ) : (
          <Image
            source={{ uri: profilePic }}
            style={{ height: "100%", width: "70%", borderRadius: 30 }}
          />
        )}
      </Block>
      <Block
        style={{
          flex: 3.5,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
            textTransform: "capitalize",
            width: WIDTH-200,
          }}
          numberOfLines={1}
        >
          {name}
        </Text>
        <Text style={{ fontSize: 13 }} color={theme.colors.solidGray}>
          {moment(date).format("DD MMM, YYYY")}
        </Text>
      </Block>
      <Block
        middle
        style={{
          flex: 1.5,
          alignItems: "flex-end",
        }}
      >
        <NumberFormat
          value={amount / 100}
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
                fontSize: 14,
                fontWeight: "700",
              }}
            >
              {formattedValue}
            </Text>
          )}
        />
      </Block>
    </Block>
  );
};
