import React from "react";
import { StyleSheet, Image } from "react-native";
import { Button, OutlinedButton, Block, Text } from "../../components/Index.js";
import * as theme from "../../constants/theme.js";

export default Welcome = ({ navigation }) => {
  return (
    <Block>
     
      <Block style={{ flex: 2.5 }}>
        <Block center middle>
          <Image
            source={require("../../assets/icons/scooter.png")}
            style={{ height: 150, width: 150 }}
          />
        </Block>
      </Block>

      <Block center middle style={{ flex: 1.5 }}>
        <Block>
          <Button full onPress={() => navigation.navigate("Register")}>
            <Text button>Sign up as Donor</Text>
          </Button>

          <Block row center>
            <Block
              style={{ height: 1.5, backgroundColor: theme.colors.black }}
            />
            <Block>
              <Text bold center>
                Or
              </Text>
            </Block>
            <Block
              style={{ height: 1.5, backgroundColor: theme.colors.black }}
            />
          </Block>

          <OutlinedButton full onPress={() => navigation.navigate("Register")}>
            <Text outlinedButton>Sign up as Receiver</Text>
          </OutlinedButton>

          <Block style={{ marginTop: 12 }}>
            <Text h4 color={theme.colors.gray}>
              Already have an account?{" "}
              <Text h4 height={18} color={theme.colors.blue}>
                Log In
              </Text>
            </Text>
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


