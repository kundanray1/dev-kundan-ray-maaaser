import React, { useState,useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Modal,
  View,
  Image,
  Dimensions,
} from "react-native";
import * as theme from "../../../../constants/theme.js";
import { Block, Text, Button } from "../../../../components/Index.js";

const WIDTH = Dimensions.get("window").width;
const Confirmation = () => {
  const [
    confirmationSuccessfulVisible,
    setConfirmationSuccessfulVisible,
  ] = useState(false);

  useEffect(() => {
    if (confirmationSuccessfulVisible) {
      setTimeout(function () {
        setConfirmationSuccessfulVisible(false);
      }, 800);
    }
  }, [confirmationSuccessfulVisible]);
  const confirmationSuccessful = () => (
    <SafeAreaView>
      <Modal
        visible={confirmationSuccessfulVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() =>
          setConfirmationSuccessfulVisible(!confirmationSuccessfulVisible)
        }
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 45 }]}>
            <Image
              source={require("../../../../assets/icons/successful-m.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text
              style={{ fontSize: 20, fontWeight: "700", paddingTop: 20 }}
            >
              Donation Successful !
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={{ flex: 1, paddingVertical: 16, paddingHorizontal: 16 }}>
      <Block row style={{ flex: 0, paddingVertical: 5 }}>
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
      <Block row style={{ flex: 0, paddingVertical: 5 }}>
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
      <Block row style={{ flex: 0, paddingVertical: 5 }}>
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
        onPress={() =>
          setConfirmationSuccessfulVisible(!confirmationSuccessfulVisible)
        }
      >
        <Text button style={{ fontSize: 18 }}>
          Donate
        </Text>
      </Button>
      {confirmationSuccessful()}
    </SafeAreaView>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  modal: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.white,
    paddingVertical: 30,
  },
});
