import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  Button,
  OutlinedButton,
  Block,
  Text,
} from "./../../../components/Index.js";
import * as theme from "./../../../constants/theme.js";

export default Welcome = ({ navigation }) => {
  console.log("Welcome");
  return (
    <Block>
      <Block
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom:40,
        }}
      >
        <Image
          source={require("../../../assets/icons/logo.png")}
          style={{ height: 110, width: 110 }}
        />
      </Block>

      <Block center>
        <Block middle>
          <Button
            full
            onPress={() =>
              navigation.navigate("Sign Up", {
                accountType: "DONOR",
              })
            }
          >
            <Text button style={{ fontSize: 18 }}>
              Sign Up as Donor
            </Text>
          </Button>
          <Block
            row
            center
            style={{
              flex: 0,
              paddingVertical: 25,
            }}
          >
            <Block style={{ height: 1, backgroundColor: theme.colors.black }} />
            <Text
              bold
              center
              style={{
                color: theme.colors.primary1,
                paddingHorizontal: 3,
                textTransform: "uppercase",
              }}
            >
              Or
            </Text>
            <Block style={{ height: 1, backgroundColor: theme.colors.black }} />
          </Block>

          <OutlinedButton
            full
            onPress={() =>
              navigation.navigate("Sign Up", {
                accountType: "RECEIVER",
              })
            }
          >
            <Text
              outlinedButton
              style={{ color: theme.colors.primary1, fontSize: 18 }}
            >
              Sign Up as Receiver
            </Text>
          </OutlinedButton>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{ paddingVertical: 15 }}
          >
            <Text h4 color={theme.colors.solidGray}>
              Already have an account?{" "}
              <Text h4 color={theme.colors.primary2}>
                Login
              </Text>
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </Block>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
