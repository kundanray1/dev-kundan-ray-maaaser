import React, { useState,useCallback,useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as theme from "./../../../constants/theme.js";
import {
  Block,
  Text,
} from "./../../../components/Index.js";

const WIDTH = Dimensions.get("window").width;
const receiversNameOptions = ["Daily","Weekly", "Monthly","Quaterly","Half Yearly", "Yearly"];

const ReceiversName = ({ receiversName, setReceiversName }) => {
  const [receiversNameModalVisible, setReceiversNameModalVisible] = useState(false);
  useEffect(()=>{

  })
  const onPressReceiversNameItem = useCallback(
    (option) => {
      setReceiversName(option);
      setReceiversNameModalVisible(false);
    },
    [setReceiversName]
  );

  const RenderReceiversNameOptions = receiversNameOptions.map((option, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => onPressReceiversNameItem(option)}
      style={{ marginVertical: 2 }}
    >
      <Text bold style={{ paddingVertical: 4, fontSize: 18 }}>
        {option}
      </Text>
    </TouchableOpacity>
  ));
  return (
    <SafeAreaView>
      <Block style={{ paddingVertical: 8 }}>
        <Text bold style={{ fontSize: 16, fontWeight: "500" }}>
         Receiver's Name
        </Text>
      <TouchableOpacity
        style={styles.customPicker}
        activeOpacity={0.8}
        onPress={() => setReceiversNameModalVisible(!receiversNameModalVisible)}
      >
        <Block>
          <Text bold style={{ fontSize: 16, color: theme.colors.solidGray }}>
            {receiversName}
          </Text>
        </Block>
        <Block style={{ alignItems: "flex-end" }}>
          <AntDesign
            name="caretdown"
            size={16}
            color={theme.colors.solidGray}
          />
        </Block>
      </TouchableOpacity>
      <Modal
        visible={receiversNameModalVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() => setReceiversNameModalVisible(!receiversNameModalVisible)}
      >
        <View style={styles.container}>
          <View style={[styles.modal, { width: WIDTH - 30 }]}>
            {RenderReceiversNameOptions}
          </View>
        </View>
      </Modal>
      </Block>
    </SafeAreaView>
  );
};

export default ReceiversName;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: theme.colors.white,
    borderRadius: 3,
    padding: 10,
  },
  option: {
    alignItems: "flex-start",
  },
  customPicker: {
    height: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: theme.colors.solidGray,
    alignItems: "center",
    borderBottomWidth: 1,
  },
});
