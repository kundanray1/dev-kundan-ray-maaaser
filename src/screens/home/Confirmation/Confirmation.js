import React from "react";
import { SafeAreaView } from "react-native";
import * as theme from "../../../constants/theme.js";
import { Block, Text, Button } from "../../../components/Index.js";

const Confirmation = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10, paddingHorizontal: 16 }}>
      <Block row style={{ flex: 0, marginTop: 5 }}>
        <Block>
          <Text bold style={{ fontSize: 16, fontWeight: "500" }}>
            Receiver’s Name
          </Text>
        </Block>
        <Block>
          <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
            Jasmine Shrestha
          </Text>
        </Block>
      </Block>
      <Block row style={{ flex: 0, marginTop: 5 }}>
        <Block>
          <Text bold style={{ fontSize: 16, fontWeight: "500" }}>
            Amount
          </Text>
        </Block>
        <Block>
          <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
            {"\u0024"}1234
          </Text>
        </Block>
      </Block>
      <Block row style={{ flex: 0, marginTop: 5 }}>
        <Block>
          <Text bold style={{ fontSize: 16, fontWeight: "500" }}>
            Date
          </Text>
        </Block>
        <Block>
          <Text color={theme.colors.solidGray} style={{ fontSize: 15 }}>
            April 4, 2021
          </Text>
        </Block>
      </Block>
      <Button
        style={{
          marginTop: 10,
        }}
      >
        <Text button style={{ fontSize: 18 }}>
         Donate
        </Text>
      </Button>
    </SafeAreaView>
  );
};

export default Confirmation;
