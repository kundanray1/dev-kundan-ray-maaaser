import React from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { CardText, ColCard, Row, RowCard, RowNoPadding, TextClick, WelcomeCard, welcomeCard } from "../../../utility/styledComponents.js";
import {
  Button,
  OutlinedButton,
  Block,
  Text,
} from "./../../../components/Index.js";
import * as theme from "./../../../constants/theme.js";
import DonorIconComponent from "../../../assets/icons/DonorIconComponent";
import ReceiverIconComponent from "../../../assets/icons/ReceiverIconComponent";
import MerchantIconComponent from "../../../assets/icons/MerchantIconComponent";
export default Welcome = ({ navigation }) => {
  return (
    <Block>
      <Block
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: 30,
        }}
      >
        <Image
          source={require("../../../assets/icons/logo.png")}
          style={{ height: 110, width: 110 }}
        />
      </Block>
      
      <Block center>
      <Text style={{ paddingVertical: 10, fontSize: 18, fontWeight: "700" }}>
          Sign Up
        </Text>
      
    
        <Block middle>
        <Text h4 color={theme.colors.solidGray} center>
              Choose Account Type
              </Text>
    
          {/* <OutlinedButton
            full
            onPress={() =>
              navigation.navigate("Sign Up", {
                accountType: "DONOR",
              })
            }
          >
              <Text
              outlinedButton
              style={{ color: theme.colors.primary1, fontSize: 18 }}
            >
              Sign Up as Donor
            </Text>
          </OutlinedButton>
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
           */}
          <RowNoPadding style={{ justifyContent: 'space-around',}}>
            <RowCard style={{marginHorizontal:10}}>
              <TouchableOpacity onPress={() =>
              navigation.navigate("Sign Up", {
                accountType: "DONOR",
              })} style={{ backgroundColor: '#ffffff',paddingHorizontal:10,textAlign:'center'}}>
                <WelcomeCard>
                  <DonorIconComponent />
                </WelcomeCard>
                <TextClick style={{ color: theme.colors.green, textAlign: 'center' }}>
                  Donor
                </TextClick>
              </TouchableOpacity>
            </RowCard>
            <RowCard  style={{marginHorizontal:10}}>
              <TouchableOpacity onPress={() =>
              navigation.navigate("Sign Up", {
                accountType: "RECEIVER",
              })
            } style={{ backgroundColor: '#ffffff',paddingHorizontal:10 }}>
                <WelcomeCard style={{ backgroundColor: theme.colors.lightorange }}>
                  <ReceiverIconComponent />
                </WelcomeCard>
                <TextClick style={{ color: theme.colors.orange, textAlign: 'center' }}>
                  Receiver
                </TextClick>
              </TouchableOpacity>
            </RowCard>
            <RowCard  style={{marginHorizontal:10}}>
              <TouchableOpacity onPress={() =>
              navigation.navigate("Sign Up", {
                accountType: "MERCHANT",
              })
            }  style={{ backgroundColor: '#ffffff',paddingHorizontal:10 }}>
                <WelcomeCard style={{ backgroundColor: theme.colors.transparentblue }}>
                  <MerchantIconComponent />
                </WelcomeCard>
                <TextClick style={{ color: theme.colors.lightpurple, textAlign: 'center' }}>
                  Merchant
                </TextClick>
              </TouchableOpacity>
            </RowCard>
          </RowNoPadding>
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



          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{ paddingVertical: 15,alignItems:'center'}}
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
