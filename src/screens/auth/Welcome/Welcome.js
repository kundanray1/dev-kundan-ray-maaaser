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
  console.log("Welcome")
  return (
    <Block>
      <Block style={{ flex: 2.5 }}>
        <Block center middle>
          <Image
            source={require("../../../assets/icons/logo.png")}
            style={{ height: 120, width: 120 }}
          />
        </Block>
      </Block>

      <Block center middle style={{ flex: 1.5 }}>
        <Block>
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

          <Block row center>
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
          <Block style={{marginTop:10}}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text h4 color={theme.colors.solidGray}>
                Already have an account?{" "}
                <Text h4 color={theme.colors.primary2}>
                  Log In
                </Text>
              </Text>
            </TouchableOpacity>
          </Block>
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
