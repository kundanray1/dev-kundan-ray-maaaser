import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import * as theme from "constants/theme.js";
import { WIDTH } from "constants/theme.js";
import { Block, Text } from "components/Index.js";
import moment from "moment";
import { ArrowRightIcon } from "assets/icons/Index.js";

export default function Linked({
  label,
  accountNo,
  status,
  date,
  iconComponent,
  ...props
}) {
  return (
    <Block
      row
      style={[
        styles.linkedContainer,
        {
          elevation: status == 2 ? 0 : 2,
          backgroundColor:
            status == 2 ? "rgba(52, 52, 52, 0.08)" : theme.colors.white,
        },
      ]}
    >
      <Block row>{iconComponent}</Block>
      <Block style={styles.textContainer}>
        {label ? (
          <>
            <Text
              style={[
                styles.label,
                {
                  fontSize: 16,
                },
              ]}
              numberOfLines={1}
            >
              {label}
            </Text>
            <Text style={{ fontSize: 13 }} color={theme.colors.solidGray}>
              {accountNo}
            </Text>
          </>
        ) : (
          <>
            <Text
              style={[
                styles.label,
                {
                  fontSize: 13,
                },
              ]}
              numberOfLines={1}
            >
              **** **** **** {accountNo}
            </Text>
            <Text style={{ fontSize: 12 }} color={theme.colors.solidGray}>
              Expires {moment(date).format("MM/YYYY")}
            </Text>
          </>
        )}
      </Block>
      <Block
        activeOpacity={0.8}
        style={styles.rightIcon}
      >
        <ArrowRightIcon />
      </Block>
    </Block>
  );
}

export const styles = StyleSheet.create({
  linkedContainer: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 2,
    shadowRadius: 2,
  },
  textContainer: {
    flex: 4,
    paddingLeft: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
    textTransform: "capitalize",
    width: WIDTH - 200,
  },
  rightIcon: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
