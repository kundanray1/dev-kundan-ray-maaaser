import React from "react";
import { StyleSheet, Image } from "react-native";
import { Button, OutlinedButton, Block, Text } from "../../components/Index.js";
import * as theme from "../../constants/theme.js";
import { LinearGradient } from 'expo-linear-gradient';

export default Welcome = ({ navigation }) => {
  return (
    <Block>
      <Block style={{ flex: 2.5 }}>
        <Block center middle>
          <Image
            source={require("../../assets/icons/logo.png")}
            style={{ height: 150, width: 150 }}
          />
        </Block>
      </Block>

      <Block center middle style={{ flex: 1.5 }}>
        <Block>
          <Button full onPress={() => navigation.navigate("Register")}>
            <Text button style={{fontSize:18}}>Sign Up as Donor</Text>
          </Button>

          <Block row center>
            <Block
              style={{ height: 1, backgroundColor: theme.colors.black }}
            />
              <Text bold center style={{color:theme.colors.primary1,paddingHorizontal:3, textTransform: 'uppercase'}}>
                Or
              </Text>
            
            <Block
              style={{ height: 1, backgroundColor: theme.colors.black }}
            />
          </Block>

          <OutlinedButton full onPress={() => navigation.navigate("Register")}>
            <Text outlinedButton style={{color:theme.colors.primary1,fontSize:18}}>Sign Up as Receiver</Text>
          </OutlinedButton>

          <Block style={{ marginTop: 12 }}>
            <Text h4 color={theme.colors.gray}>
              Already have an account?{" "}
              <Text h4 height={18} style={{color:theme.colors.primary2}} onPress={() => navigation.navigate("Login")}>
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


